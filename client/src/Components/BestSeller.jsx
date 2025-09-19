import React, { useContext , useEffect, useState} from 'react'
import {ShopContext} from "../Context/ShopContext"
import Title from "./Title"
import ProductItem from "./Productitem"

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestsellers , setbestsellers] = useState([]);
    useEffect(()=>{
        const bestproducts = products.filter((item)=>(item.bestseller));
        setbestsellers(bestproducts.slice(0,5));
    },[])
  return (
    <div className='my-10'>
        <div className="text-center text-3xl py-8">
            <Title text1={'BEST'} text2={'SELLER'}
            ></Title>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover the favorites our customers can’t stop talking about.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    bestsellers.map((item, index) => (
                        <ProductItem
                            key={item._id || index}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))

                }
            </div>
    </div>
  )
}

export default BestSeller
