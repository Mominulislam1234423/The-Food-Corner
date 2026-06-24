import axios from "axios";
export default function useAxiousPublic() {
  const axiosPublic = axios.create({
    baseURL: "https://29p39s-5000.csb.app/",
  });
  return axiosPublic;
}
