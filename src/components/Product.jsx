import React from 'react'

function Product(props) {
   const {image,title,description,price} = props;
  return (
    <div>
      <div className="card bg-slate border p-10">
        <div className="img p-4 mb-4">
            <img src={image} className=' w-[200px] h-[200px]' alt="" />
        </div>
        <h4>{title}</h4>
        <p className=''>{description.substr(0,40)}</p>
        <small>${price}</small>
        <div className="">
            <button className='text-white bg-teal-500 p-2 shadow rounded'>Detail</button>
            <button className='text-white bg-teal-500 p-2 shadow rounded m-4'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product
