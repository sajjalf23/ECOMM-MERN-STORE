import React , {useState , useContext} from 'react'
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import { assets } from '../assets/frontend_assets/assets';
import Carttotal from "../Components/Carttotal";

const Placeorder = () => {
  const [method , setmethod] = useState("cod");
  const {navigate} = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5  sm:pt-14 border-t min-h-[80vh]'>
      {/* left */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIEVRY'} text2={"INFORMATION"}></Title>
        </div>
        <div className="flex gap-3">
          <input type="text" placeholder='First Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='Second Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type="email" placeholder='Email' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <input type="text" placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <div className="flex gap-3">
          <input type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <div className="flex gap-3">
        <input type="Number" placeholder='ZIP Code' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <input type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type="Number" placeholder='Phone Number' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
      </div>


      {/* right */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <Carttotal></Carttotal>
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={"METHOD"}></Title>
          <div className="flex gap-3 flex-col lg:flex-row">
               <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
               onClick={()=> setmethod("stripe")}>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${ method === "stripe" ? "bg-green-400" : ""}`}></p>
                <img src={assets.stripe_logo} alt="" className='h-5 mx-4' />
               </div>
               <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
               onClick={()=> setmethod("razorpay")}
               >
                <p className={`min-w-3.5 h-3.5 border rounded-full ${ method === "razorpay" ? "bg-green-400" : ""}`}></p>
                <img src={assets.razorpay_logo} alt="" className='h-5 mx-4' />
               </div>
               <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
               onClick={()=> setmethod("cod")}>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${ method === "cod" ? "bg-green-400" : ""}`}></p>
                <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIEVERY</p>
               </div>
          </div>
          <div className="w-full text-end mt-8">
                <button className='bg-black text-white px-8 py-3 my-8 text-center' onClick={()=> navigate('/order')}>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Placeorder
