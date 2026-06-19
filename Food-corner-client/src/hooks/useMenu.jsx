import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localDataFetch = fetch("menu.json").then((res) => res.json());
    const dbDataFetch = fetch("https://llmf56-5000.csb.app/menu")
      .then((res) => res.json())
      .catch((err) => {
        console.error("Database data load হতে সমস্যা:", err);
        return [];
      });

    Promise.all([localDataFetch, dbDataFetch])
      .then(([localItems, dbItems]) => {
        const combinedMenu = [...localItems, ...dbItems];

        setMenu(combinedMenu);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error combining data:", error);
        setLoading(false);
      });
  }, []);

  return [menu, loading];
};

export default useMenu;
