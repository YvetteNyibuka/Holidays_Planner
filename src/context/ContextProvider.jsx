import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [Allusers, setAllUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users"
      );
      if (response && response.data) {
        setAllUsers(response.data);
        // console.log(response.data);
      } else {
        console.error("Invalid API response:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
      localStorage.setItem("isLogin", JSON.stringify(data));
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
      localStorage.setItem("isRegister", JSON.stringify(data));
      window.href = "/login";
    },
  });

//   tours transactions 

const { data: DashTours, isLoading: ToursLoading } = useQuery({
  queryKey: ["tours"],
  queryFn: async () => {
    const res = await axios.get("https://holiday-planner-4lnj.onrender.com/api/v1/tour/");
    return res.data;
  },
});

  return (
    <StateContext.Provider
      value={{ Allusers, setAllUsers, loginMutation, signupMutation, DashTours, ToursLoading }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const usestatecontext = () => useContext(StateContext);
