/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import api from "../config/axios";

const NewsContext = createContext();





const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState([]);
const fetcNewsh = async (url="/everything?q=USA") => {

    try{
          const response = await api.get(
    `${url}&apiKey=${import.meta.env.VITE_API_KEY}`,
    );
     return response.data;

    }catch(err){
        console.log(err);
    }

 

};

const value={news,setNews,fetcNewsh};
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { useNewsContext, NewsContextProvider };
