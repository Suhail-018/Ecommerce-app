import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');

  const {navigate} = useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-1 min-h-[80vh] border-t'>
      {/* Left Side */}
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
            <div className="text-xl sm:text-2xl my-3">
              <Title text1="DELIVERY" text2="INFORMATION" />
            </div>

            <div className="flex gap-3">
                <input 
                  className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text"  placeholder="First Name"/>
                <input 
                  className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last Name"/>
            </div>
            <input 
                  className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email address"/>
            <input 
                  className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street"/>
            <div className="flex gap-3">
                <input 
                  className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text"  placeholder="City"/>
                <input 
                  className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State"/>
            </div>
            <div className="flex gap-3">
              <input 
                className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number"  placeholder="Zipcode"/>
              <input 
                className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="statecode"/>
            </div>
            <input 
                className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phonenumber"/>

        </div>

        {/* right side */}
        <div className="mt-8">
            <div className="mt-8 min-w-80">
              <CartTotal />
            </div>

            <div className="mt-12">
              <Title text1="PAYMENT" text2="METHOD" />
               {/* Content for payment method goes here */}
              <div className="flex gap-3 flex-col lg:flex-row">
                  <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                      <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                      <img className="h-5 mx-4" src={assets.stripe} alt="Stripe Logo" />
                  </div>

                  <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                    <img className="h-5 mx-4" src={assets.razorpay} alt="Razorpay Logo" />
                  </div>
                  <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                    <p className='text-gray-500 text-sm font-medium mx-4'> CASH ON DELIVERY</p>
                  </div>

               
              </div>
              <div className='w-full text-end mt-8'>
                <button onClick={()=>navigate('/orders')} className='bg-black text-white text-sm  px-16 py-3'>PLACE ORDER</button>
              </div>
            </div>

        </div>


      
    </div>
  )
}

export default PlaceOrder


// import React, { useContext, useState } from 'react'
// import Title from '../components/Title'
// import CartTotal from '../components/CartTotal'
// import { assets } from '../assets/assets'
// import { ShopContext } from '../context/ShopContext'

// const PlaceOrder = () => {
//   const [method, setMethod] = useState('cod');
//   const { navigate, user, getCartAmount } = useContext(ShopContext)
//   const [shippingAddress, setShippingAddress] = useState({
//     street: '',
//     city: '',
//     state: '',
//     zipCode: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setShippingAddress(prev => ({ ...prev, [name]: value }));
//   };

//   const handlePlaceOrder = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/orders', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-auth-token': user.token
//         },
//         body: JSON.stringify({
//           shippingAddress,
//           totalAmount: getCartAmount() + 10, // Adding delivery fee
//           paymentMethod: method
//         })
//       });

//       if (response.ok) {
//         navigate('/orders');
//       } else {
//         // Handle error
//         console.error('Failed to place order');
//       }
//     } catch (error) {
//       console.error('Error placing order:', error);
//     }
//   };

//   return (
//     <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-1 min-h-[80vh] border-t'>
//       {/* Left Side */}
//       <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
//         <div className="text-xl sm:text-2xl my-3">
//           <Title text1="DELIVERY" text2="INFORMATION" />
//         </div>

//         <input 
//           className="border border-gray-300 rounded py-1.5 px-3.5 w-full" 
//           type="text"  
//           placeholder="Street"
//           name="street"
//           value={shippingAddress.street}
//           onChange={handleInputChange}
//         />
//         <div className="flex gap-3">
//           <input 
//             className="border border-gray-300 rounded py-1.5 px-3.5 w-full" 
//             type="text"  
//             placeholder="City"
//             name="city"
//             value={shippingAddress.city}
//             onChange={handleInputChange}
//           />
//           <input 
//             className="border border-gray-300 rounded py-1.5 px-3.5 w-full" 
//             type="text" 
//             placeholder="State"
//             name="state"
//             value={shippingAddress.state}
//             onChange={handleInputChange}
//           />
//         </div>
//         <input 
//           className="border border-gray-300 rounded py-1.5 px-3.5 w-full" 
//           type="text"  
//           placeholder="Zipcode"
//           name="zipCode"
//           value={shippingAddress.zipCode}
//           onChange={handleInputChange}
//         />
//       </div>

//       {/* right side */}
//       <div className="mt-8">
//         <div className="mt-8 min-w-80">
//           <CartTotal />
//         </div>

//         <div className="mt-12">
//           <Title text1="PAYMENT" text2="METHOD" />
//           {/* Content for payment method goes here */}
//           <div className="flex gap-3 flex-col lg:flex-row">
//             <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
//               <img className="h-5 mx-4" src={assets.stripe} alt="Stripe Logo" />
//             </div>

//             <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
//               <img className="h-5 mx-4" src={assets.razorpay} alt="Razorpay Logo" />
//             </div>
//             <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
//               <p className='text-gray-500 text-sm font-medium mx-4'> CASH ON DELIVERY</p>
//             </div>
//           </div>
//           <div className='w-full text-end mt-8'>
//             <button onClick={handlePlaceOrder} className='bg-black text-white text-sm  px-16 py-3'>PLACE ORDER</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PlaceOrder
