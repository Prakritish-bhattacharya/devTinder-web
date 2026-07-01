import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Import the useSelector hook from react-redux to access the Redux store

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user); // Access the user state from the Redux store
  // Function to fetch user data from the backend
  const fetchUser = async () => {
    if (userData) return; // If userData is already available in the Redux store, no need to fetch it again
    try {
      // Make a GET request to the backend to fetch user data
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true, // Include credentials (cookies) in the request
      });
      // update the user state in the redux store with the fetched user data
      dispatch(addUser(res.data));
    } catch (err) {
      // If there's an error (e.g., user not authenticated or cookie expired), redirect to the login page
      if (err.status === 401) {
        navigate("/login"); // Redirect to the login page if there's an error (e.g., user not authenticated or cookie expired)
      }
      console.error(err);
    }
  };
  // useEffect hook to fetch user data when the component mounts
  useEffect(() => {
    // Call the fetchUser function to fetch user data from the backend
    fetchUser();
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      {/* <Footer/> */}
    </div>
  );
};

export default Body;
