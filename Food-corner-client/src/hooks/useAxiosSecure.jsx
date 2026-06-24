import axios from "axios";

export const axiosSecur = axios.create({
  baseURL: "https://29p39s-5000.csb.app/",
});

export default function useAxiosSecure() {
  return axiosSecur;
}
