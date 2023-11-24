import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const API = createContext();

export function FetchAPI({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://assets.alippo.com/catalog/static/data.json");
        setData(response.data); 
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []); 

  return (
    <API.Provider value={{ data, setData }}>
      {children}
    </API.Provider>
  );
}
