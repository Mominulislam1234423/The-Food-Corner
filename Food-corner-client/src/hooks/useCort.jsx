import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import AuthContext from "../Firebase/AuthContext/AuthContext";

export default function useCort() {
  const { user } = useContext(AuthContext);
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://llmf56-5000.csb.app/cart?email=${user.email}`
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
  });

  return [cart, refetch];
}
