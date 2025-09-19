import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../Components/Title';
import ProductItem from '../Components/Productitem';

const Collection = () => {
  const { products ,showsearch , search} = useContext(ShopContext);
  const [showfilter, setshowfilter] = useState(false);
  const [filterproducts, setfilterproducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  useEffect(() => { setfilterproducts(products) }, [])

  const toggle = (e) => {
    const value = e.target.value;
    setcategory((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };
  
   const togglesubcategory = (e) => {
    const value = e.target.value;
    setsubcategory((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const applyfilters=()=>{
    let productscopy = [...products];
    if(showsearch && search){
      productscopy = productscopy.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase().trim()));
    }
    if(category.length > 0){
      productscopy = productscopy.filter((item)=> 
        category.includes(item.category)
      );
    }
    if(subcategory.length > 0){
      productscopy = productscopy.filter((item)=> 
        subcategory.includes(item.subCategory)
      );
    }
    switch(sortType){
      case'low-high' :
        setfilterproducts(productscopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setfilterproducts(productscopy.sort((a,b)=>(b.price - a.price)));
        break;
      default:
        break;
    }
    setfilterproducts(productscopy);
  }

  useEffect(()=>{ applyfilters(); },[ category , subcategory ,products , sortType , search , showsearch])


  return (
    <>
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        {/* filter options */}
        <div className="min-w-60">
          <p className='my-2 text-xl flex cursor-pointer items-center gap-2  '>FILTERS</p>
          <img onClick={() => setshowfilter(!showfilter)} className={`h-3 sm:hidden ${showfilter ? 'rotate-90' : ""}`} src={assets.dropdown_icon} alt="" />
          {/* category filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' : "hidden"} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className='flex gap-2'>
                <input type="checkbox" value={"Men"} className='w-3' onChange={(e) => toggle(e)} />MEN
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={"Women"} className='w-3' onChange={(e) => toggle(e)} />WOMEN
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={"Kids"} className='w-3' onChange={(e) => toggle(e)} />KIDS
              </p>
            </div>
          </div>

          {/* category filter */}
          <div className={`border border-gray-300 pl-5 pr-3 py-3 my-5 ${showfilter ? '' : "hidden"} sm:block`}>
            <p className='mb-3 text-sm font-medium'>SUB CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className='flex gap-2'>
                <input type="checkbox" value={"Topwear"} className='w-3' onChange={(e) => togglesubcategory(e)} />TOPWEAR
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={"Bottomwear"} className='w-3' onChange={(e) => togglesubcategory(e)} />BOTTOMWEAR
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={"Winterwear"} className='w-3' onChange={(e) => togglesubcategory(e)} />WINTERWEAR
              </p>
            </div>
          </div>
        </div>


        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={'ALL'} text2={'COLLECTIONS'}> </Title>
            {/* SORT */}
            <select className='border border-gray-300 text-sm px-3'
            onChange={(e) => setSortType(e.target.value)}
            value={sortType}>
              <option value="relavent">Sort By : Relevant</option>
              <option value="high-low">Sort By : High to Low</option>
              <option value="low-high">Sort By : Low to High</option>
            </select>
          </div>

          {/* [products] */}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 ">
            {
              filterproducts.map((item, index) => (
                <ProductItem
                  key={index}
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              ))
            }
          </div>
        </div> </div>
    </>
  )
}

export default Collection
