// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../Context/ShopContext'
// import ProductItem from '../Components/Productitem';

// const Relatedproducts = ({category , subCategory}) => {
//     const {products} = useContext(ShopContext)

//     const [related, setrelated] = useState([]);

//     useEffect(()=>{
//         if(products.length > 0){
//             let productsCopy = products.slice();
//             productsCopy = productsCopy.filter((item)=> item.category === category);
//             productsCopy = productsCopy.filter((item)=> item.subCategory === subCategory);
//             setrelated(productsCopy.slice(0,5));
//         }
//     },[products]);
//   return (
//     <div className='my-24'>
//         <div className="text-center text-3xl py-2 ">
//             <Title text1={"RELATED"} text2={"PRODUCTS"}></Title>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//             {
//                 related.map((item,index)=>(
//                     <ProductItem id={item._id} key={index} name={item.name} 
//                     price={item.price} image={item.image}></ProductItem>
//                 ))
//             }
//         </div>
//     </div>
//   )
// }

// export default Relatedproducts


import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "../Components/ProductItem";
import Title from "../Components/Title"; 

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = [...products];

      productsCopy = productsCopy.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      productsCopy = productsCopy.filter(
        (item) => item.subCategory.toLowerCase() === subCategory.toLowerCase()
      );

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]); // ✅ dependencies fixed

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <ProductItem
            key={item._id || index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
