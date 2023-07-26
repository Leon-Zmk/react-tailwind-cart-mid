import React, { useState } from 'react'
import { StatContextCustom } from '../contexts/StatContext';
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io';
import Cart from './Cart';
import { useEffect } from 'react';

function AddToCart() {

    const {stat:{carts}} =StatContextCustom();
    const [mainTotal,setMainTotal] =useState(0);

    useEffect(()=> {
        setMainTotal(Total);
    },[])

    const increaseTotal = (price) => {
        setMainTotal(mainTotal+price);
    }
    const decreaseTotal = (price) => {
        setMainTotal(mainTotal - price);
    }
    const Total = carts?.reduce((pv,iv) => pv + iv.price,0);
  return (
    <div>
        <div className='flex flex-col mt-20'>
        {carts?.map(cart => {
            return(
                <Cart key={cart.id} item={cart} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal}></Cart>
            )
        })}
    </div>
    <hr className=" w-[60%] mx-auto" />
    <div className=' flex justify-around mb-20' >
        <p>Total</p>
        <p>${mainTotal.toFixed(2)}</p>
    </div>
    </div>
   

  )
}

export default AddToCart