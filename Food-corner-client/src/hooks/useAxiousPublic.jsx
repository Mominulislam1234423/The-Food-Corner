import axios from "axios";
export default function useAxiousPublic() {
  const axiosPublic = axios.create({
    baseURL: "https://llmf56-5000.csb.app/",
  });
  return axiosPublic;
}
