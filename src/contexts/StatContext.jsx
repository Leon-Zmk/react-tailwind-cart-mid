import { createContext, useEffect, useState } from "react";


export const StatContext= createContext();

export const StatContextProvider= ({children})=>{

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const response=await fetch("https://fakestoreapi.com/products");
        const data=await response.json();
        setProducts(data);
    }


    const data={products}
    return(
       <StatContext.Provider value={data}>
        {children}
       </StatContext.Provider>
    )
}
