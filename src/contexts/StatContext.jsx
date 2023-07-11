import { createContext, useContext, useEffect, useReducer, useState } from "react";


export const StatContext= createContext();

export const StatContextProvider= ({children})=>{

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    useEffect(()=>{
        dispatch({type:"GET_PRODUCTS",payload:products})
    },[products])

    const fetchData=async()=>{
        const response=await fetch("https://fakestoreapi.com/products");
        const data=await response.json();
        setProducts(data);
    }

    const initalState={
        products:[],
        cart:[],
    }

    const reducer =(stat,action) =>{
        switch(action.type){
            case "GET_PRODUCTS":
                return {...stat,products:action.payload};
        }
    }

    const [stat,dispatch]=useReducer(reducer,initalState);
    
    const data={stat,dispatch}
    return(
       <StatContext.Provider value={data}>
        {children}
       </StatContext.Provider>
    )
}


export const StatContextCustom= () => useContext(StatContext);