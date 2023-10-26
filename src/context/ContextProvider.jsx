import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  let user = JSON.parse(localStorage.getItem("info"));
  let token = user?.access_token;
  let userData = user?.user;
  // console.log(userData);

  let url = "https://holiday-planner-4lnj.onrender.com/api/v1/";
  const { data: fetchUsersData } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(url + "auth/users/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return res.data;
    },
    onSuccess: (data) => {
      console.log(res.data);
    },
  });

  const { data: loggedUser } = useQuery({
    queryKey: ["logged_users"],
    queryFn: async () => {
      const res = await axios.get(
        url + `auth/users/getOne?fieldName=email&value=${userData.email}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return res.data;
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (data) => {
      const resp = await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/auth/login",
        data
      );
      return resp.data;
    },
    onSuccess: (data) => {
      console.log(data);
      console.log("Successfully logged in");
      localStorage.setItem("info", JSON.stringify(data));
      window.location.href = "/dashboard";
    },
  });

  const signupMutation = useMutation({
    mutationFn: async (data) => {
      const newUser = await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup",
        data
      );
      return newUser.data;
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Registered successfully");
      localStorage.setItem("access_token", JSON.stringify(data));
      window.href = "/login";
    },
  });

  const { data: SingleUSer, isLoading: SingleUserLoading } = useQuery({
    queryKey: ["user"], // Pass email as part of the queryKey
    queryFn: async (email) => {
      const res = await axios.get(
        url + `auth/users/getOne?fieldName=email&value=${email}`
      );
      console.log(res);
      return res.data;
    },
  });

  //   tours transactions

  const { data: DashTours, isLoading: ToursLoading } = useQuery({
    queryKey: ["tours"],
    queryFn: async () => {
      const res = await axios.get(
        "https://holiday-planner-4lnj.onrender.com/api/v1/tour/"
      );
      console.log(res)
      return res.data;
    },
    onSuccess: (data) => {
      console.log(res.data);
    },
  });

  return (
    <StateContext.Provider
      value={{
        fetchUsersData,
        loggedUser,
        loginMutation,
        signupMutation,
        DashTours,
        ToursLoading,
        SingleUserLoading,
        SingleUSer,
        // tourMutation,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const usestatecontext = () => useContext(StateContext);
