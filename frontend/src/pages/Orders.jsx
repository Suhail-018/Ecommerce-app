import React, { useContext, useState, useEffect } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios';

const Orders = () => {
//    const  {products, currency} = useContext(ShopContext)
const { backendUrl, token, currency } = useContext(ShopContext);

const [orderData, setOrderData] = useState([]);

const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
  
      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        { headers: { token } }
      );
  
      console.log(response.data);
    if (response.data.success) {
        let allOrdersItem = [];
  
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            allOrdersItem.push(item);
          });
        });
  
        setOrderData(allOrdersItem.reverse()); // Assuming `setOrderData` updates the order state
      } else {
        console.error('Failed to load orders:', response.data.message);
      }
  
    //   if (response.data.success) {
    //     setOrderData(response.data.orders); // Assuming `setOrderData` updates the order state
    //   } else {
    //     console.error('Failed to load orders:', response.data.message);
    //   }
    } catch (error) {
      console.error('Error loading orders:', error.message);
    }
  };
  
  useEffect(() => {
    loadOrderData();
  }, [token]); // Dependency array to ensure it runs only once on component mount
  

  return (
    <div className='border-t pt-16'> 
                <div className="text-2xl">
                        <Title text1="MY" text2="ORDERS" />
                </div>

                <div>
                        {
                            orderData.map((item, index) => (
                                <div key={index} className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex items-start gap-6 text-sm">
                                            {/* Add content here */}
                                            <img  className='w-16 sm:w-20' src={item.image[0]}/>
                                            <div>
                                                <p className='sm:text-base font-medium'>{item.name}</p>
                                                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                                                    <p className='text-lg'>{currency}{item.price}</p>
                                                    <p>Quantity: 1</p>
                                                    <p>Size: M</p>
                                                </div>
                                                <p className='mt-2'>Date: <span className='text-gray-400'>25, july, 2024</span></p>
                                            </div>
                                            
                                        </div>
                                        <div className="md:w-1/2 flex justify-between">
                                            <div className="flex items-center gap-2">
                                                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                                                <p className="text-sm md:text-base">Ready to ship</p>
                                            </div>
                                        </div>
                                        <button className='border px-4 py-2 text-sm font-medium rounded-sm'>TRACK ORDER</button>

                                </div>
                            ))
                        }
                </div>

      
    </div>
  )
}

export default Orders

// import React, { useContext, useEffect, useState } from 'react'
// import Title from '../components/Title'
// import { ShopContext } from '../context/ShopContext'

// const Orders = () => {
//   const { currency, user } = useContext(ShopContext)
//   const [orders, setOrders] = useState([])

  
//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/orders', {
//         headers: {
//           'x-auth-token': user.token
//         }
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setOrders(data);
//       } else {
//         console.error('Failed to fetch orders');
//       }
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   return (
//     <div className='border-t pt-16'> 
//       <div className="text-2xl">
//         <Title text1="MY" text2="ORDERS" />
//       </div>

//       <div>
//         {
//           orders.map((order, index) => (
//             <div key={index} className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//               <div className="flex items-start gap-6 text-sm">
//                 <img className='w-16 sm:w-20' src={order.items[0].product.image[0]} alt={order.items[0].product.name} />
//                 <div>
//                   <p className='sm:text-base font-medium'>{order.items[0].product.name} {order.items.length > 1 ? `and ${order.items.length - 1} more item(s)` : ''}</p>
//                   <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
//                     <p className='text-lg'>{currency}{order.totalAmount}</p>
//                     <p>Items: {order.items.length}</p>
//                   </div>
//                   <p className='mt-2'>Date: <span className='text-gray-400'>{new Date(order.createdAt).toLocaleDateString()}</span></p>
//                 </div>
//               </div>
//               <div className="md:w-1/2 flex justify-between">
//                 <div className="flex items-center gap-2">
//                   <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
//                   <p className="text-sm md:text-base">{order.status}</p>
//                 </div>
//               </div>
//               <button className='border px-4 py-2 text-sm font-medium rounded-sm'>TRACK ORDER</button>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Orders
