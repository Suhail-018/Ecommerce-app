import { createContext, useEffect, useState } from "react";
// import products from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

const currency ='$'
const delivery_fee = 10;

const [search, setSearch] = useState('');
const [showSearch, setShowSearch] = useState(false);
const backendUrl= import.meta.env.VITE_BACKEND_URL;
const [products, setProducts] = useState([]);
const [token, setToken] = useState('')

const [cartItems, setCartItems] = useState({});
const navigate =useNavigate();

const addToCart = async (itemId, size) => {

            if(!size){
                toast.error('Select Product Size');
                return;

                }

            let cartData = structuredClone (cartItems);

            if (cartData[itemId]) {

                    if (cartData[itemId] [size]) {

                    cartData[itemId] [size] += 1;

                    }

                    else{

                        cartData [itemId] [size] = 1;

                    }
            
            }
            else{
                cartData[itemId] = {};
                cartData[itemId][size] = 1;

            }
            setCartItems(cartData)


}

const getCartCount = () => {

    let totalCount = 0;
    for(const items in cartItems){
        for(const item in cartItems[items]){
            try {
                if (cartItems[items][item]> 0){
                    totalCount += cartItems[items][item];
                }
            } catch (error) {
        }
        }
    }
    return totalCount;
}

const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
  
    // Update the quantity for the given item and size
    cartData[itemId][size] = quantity;
  
    // Set the updated cart data
    setCartItems(cartData);
  };

  const getCartAmount =  () => {
    let totalAmount = 0;
  
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id.toString() === items);
  
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.error(`Error calculating total for item ${items} and size ${item}:`, error);
        }
      }
    }
  
    return totalAmount;
  };
  
  // Example usage
//   useEffect(() => {
//     const calculateTotal = async () => {
//       const total = await getCartAmount();
//       console.log("Cart Total Amount:", total);
//     };
  
//     calculateTotal();
//   }, [cartItems, products]);
  
  

// useEffect(()=>{
// console.log(cartItems)
// }, [cartItems])

const getProductsData = async () => {
  try {
    const response = await axios.get(backendUrl + '/api/product/list');

    if (response.data.success) {
      setProducts(response.data.products);
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

useEffect(() => {
  getProductsData();
}, [products]);


const value = {
products, currency, delivery_fee, search, setSearch, showSearch,
 setShowSearch, cartItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate, backendUrl, token, setToken
}
return (

    <ShopContext.Provider value={value}>
        {props.children}

    </ShopContext.Provider>
)

}
export default ShopContextProvider;


// below new///////////////////////////

// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//   const currency ='$'
//   const delivery_fee = 10;
//   const [search, setSearch] = useState('');
//   const [showSearch, setShowSearch] = useState(false)
//   const [cartItems, setCartItems] = useState({});
//   const [products, setProducts] = useState([]);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProducts();
//     checkUserAuth();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/products');
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const checkUserAuth = () => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       // Verify token and set user
//       // This is a simplified version. In a real app, you'd want to verify the token with the server
//       setUser({ token });
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         setUser({ token: data.token });
//         navigate('/');
//       } else {
//         toast.error(data.msg);
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       toast.error('An error occurred during login');
//     }
//   };

//   const register = async (name, email, password) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, password }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         setUser({ token: data.token });
//         navigate('/');
//       } else {
//         toast.error(data.msg);
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//       toast.error('An error occurred during registration');
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//     navigate('/login');
//   };

//   const addToCart = async (itemId, size) => {
//     if(!size){
//       toast.error('Select Product Size');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/cart/add', {
//         method: 'POST',
//         headers: { 
//           'Content-Type': 'application/json',
//           'x-auth-token': user.token
//         },
//         body: JSON.stringify({ productId: itemId, quantity: 1, size }),
//       });
//       if (response.ok) {
//         const updatedCart = await response.json();
//         setCartItems(updatedCart.items);
//         toast.success('Item added to cart');
//       } else {
//         toast.error('Failed to add item to cart');
//       }
//     } catch (error) {
//       console.error('Add to cart error:', error);
//       toast.error('An error occurred while adding to cart');
//     }
//   };

//   const updateQuantity = async (itemId, size, quantity) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/cart/update', {
//         method: 'PUT',
//         headers: { 
//           'Content-Type': 'application/json',
//           'x-auth-token': user.token
//         },
//         body: JSON.stringify({ productId: itemId, quantity, size }),
//       });
//       if (response.ok) {
//         const updatedCart = await response.json();
//         setCartItems(updatedCart.items);
//       } else {
//         toast.error('Failed to update cart');
//       }
//     } catch (error) {
//       console.error('Update quantity error:', error);
//       toast.error('An error occurred while updating quantity');
//     }
//   };

//   const getCartCount = () => {
//     return Object.values(cartItems).reduce((total, item) => total + item.quantity, 0);
//   };

//   const getCartAmount = () => {
//     return Object.values(cartItems).reduce((total, item) => total + (item.product.price * item.quantity), 0);
//   };

//   const value = {
//     products, 
//     currency, 
//     delivery_fee, 
//     search, 
//     setSearch, 
//     showSearch, 
//     setShowSearch, 
//     cartItems, 
//     addToCart, 
//     getCartCount, 
//     updateQuantity, 
//     getCartAmount, 
//     navigate,
//     user,
//     login,
//     register,
//     logout
//   };

//   return (
//     <ShopContext.Provider value={value}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
