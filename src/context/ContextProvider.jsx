import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  // const [Allusers, setAllUsers] = useState([]);
  // useEffect(() => {
  //   getUsers();
  // }, []);

  // const getUsers = async () => {
  //   const token = localStorage.getItem(info.access_token);
  //   console.log(token);
  //   try {
  //     const response = await axios.get(
  //       "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  //         },
  //       }
  //     );
  //     if (response && response.data) {
  //       setAllUsers(response.data);
  //       // console.log(response.data);
  //     } else {
  //       console.error("Invalid API response:", response);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  let user = JSON.parse(localStorage.getItem("info"));
  let token = user.access_token;
  let userData = user.user;
  console.log(userData);

  let url = "https://holiday-planner-4lnj.onrender.com/api/v1/";
  const { data: fetchUsersData} = useQuery({
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
    }
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

  //   tours transactions

  const { data: DashTours, isLoading: ToursLoading } = useQuery({
    queryKey: ["tours"],
    queryFn: async () => {
      const res = await axios.get(
        "https://holiday-planner-4lnj.onrender.com/api/v1/tour/"
      );
      return res.data;
    },
    onSuccess: (data) => {
      console.log(data);
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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const usestatecontext = () => useContext(StateContext);
