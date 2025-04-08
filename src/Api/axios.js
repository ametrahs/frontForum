import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://localhost:2017/api",
  baseURL: "https://forumserve.onrender.com/api",

  // baseURL: "https://backendforum-m789.onrender.com/api",
  // baseURL: "https://backforum.onrender.com/api",

  // baseURL: "https://evangadi-forum-backend-1-80qg.onrender.com",
});

export default axiosInstance;
