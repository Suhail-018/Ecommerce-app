import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { backendurl } from '../App';
import { toast } from 'react-toastify';

const Add = ({token}) => {

    // states
    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);    

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const [category, setCategory] = useState("Men");
    const [subCategory, setSubCategory] = useState("Warm");

    const [bestseller, setBestseller] = useState(false);
    const [sizes, setSizes] = useState([]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
          const formData = new FormData();
      
          formData.append("name", name);
          formData.append("description", description);
          formData.append("price", price);
          formData.append("category", category);
          formData.append("subCategory", subCategory);
          formData.append("bestseller", bestseller);
          formData.append("sizes", JSON.stringify(sizes));
      
          image1 && formData.append("image1", image1);
          image2 && formData.append("image2", image2);
          image3 && formData.append("image3", image3);
          image4 && formData.append("image4", image4);
      
          // Submit formData to the backend
          const response = await axios.post( backendurl + "/api/product/add", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              token
            },
          });
          console.log(response.data);
          
      
          if (response.data.success) {
            toast.success("Product added successfully!");
          } else {
            toast.error(response.data.message);
          }
        } catch (error) {
          console.error(error);
          toast.error("An error occurred while adding the product.");
        }
      };
      


  return (
    <form onSubmit={onSubmitHandler}className='flex flex-col w-full items-start gap-3'>
        <div>
            <p className='mb-2'>Upload Image</p>
            <div className= 'flex gap-2'> 
            <label htmlFor="image1">
                <img className='w-20' src={!image1 ? assets.upload : URL.createObjectURL(image1)} alt="" />
                <input  onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden />
            </label>
            <label htmlFor="image1">
                <img className='w-20' src={!image2 ? assets.upload : URL.createObjectURL(image2)} alt="" />
                <input  onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden />
            </label>
            <label htmlFor="image1">
                <img className='w-20' src={!image3 ? assets.upload : URL.createObjectURL(image3)} alt="" />
                <input  onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden />
            </label>
            <label htmlFor="image1">
                <img className='w-20'  src={!image4 ? assets.upload : URL.createObjectURL(image)} alt="" />
                <input  onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden />
            </label>
            </div>

                    <div className='w-full'>
                    <p className='mb-2'>Product name</p>
                    <input onChange={(e)=> setName(e.target.value)} value={name}
                        className='w-full max-w-[500px] px-3 py-2'
                        type="text"
                        placeholder='Type here'
                        required
                    />
                    </div>

                    <div className='w-full'>
                    <p className='mb-2'>Product description</p>
                    <textarea onChange={(e)=> setDescription(e.target.value)} value={description}
                        className='w-full max-w-[500px] px-3 py-2'
                        placeholder='Write here'
                    />
                    </div>

                    <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'> 
                        <div>
                            <p className='mb-2 '>Product category</p>
                            <select onChange={(e)=> setCategory(e.target.value)}  className='w-full px-3 py-2'>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Unisex">Unisex</option>
                            </select>
                        </div>
                        <div>
                            <p className='mb-2 '> Sub category</p>
                            <select onChange={(e)=> setSubCategory(e.target.value)} className='w-full px-3 py-2' >
                                <option value="Warm">Warm</option>
                                <option value="Cold">Cold</option>
                                <option value="Rainy">Rainy</option>
                            </select>
                        </div>

                        <div>
                            <p className='mb-2'>Product Price</p>
                            <input onChange={(e)=> setPrice(e.target.value)} value={price}
                                className='w-full px-3 py-2 sm:w-[120px]' 
                                type="Number" 
                                placeholder='25' 
                            />
                        </div>

                    </div>

                    <div>
                        <p className='mb-2 mt-1'> Product Sizes</p>
                        <div className='flex gap-3'>

                            <div  onClick={()=>setSizes(prev => prev.includes("EDP") ? prev.filter(item => item !== "EDP"): [...prev, "EDP"])}>
                            <p className={`${sizes.includes("EDP") ? "bg-brown-100" : "bg-slate-200"}  px-3 py-1 cursor-pointer`}>EDP</p>
                            </div>

                            <div  onClick={()=>setSizes(prev => prev.includes("EDT") ? prev.filter(item => item !== "EDT"): [...prev, "EDT"])}>
                            <p className={`${sizes.includes("EDT") ? "bg-brown-100" : "bg-slate-200"}  px-3 py-1 cursor-pointer`}>EDT</p>
                            </div>

                            <div  onClick={()=>setSizes(prev => prev.includes("Parfum") ? prev.filter(item => item !== "Parfum"): [...prev, "Parfum"])}>
                            <p className={`${sizes.includes("Parfum") ? "bg-brown-100" : "bg-slate-200"}  px-3 py-1 cursor-pointer`}>Parfum</p>
                            </div>

                        </div>
                    </div>
        </div>
        <div className='flex gap-2 mt-2'>
            <input onChange={(e)=> setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
            <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
        </div>

        <button 
            type="submit" 
            className='w-28 py-3 mt-4 bg-black text-white'>
            ADD
        </button>

    </form>

  )
}

export default Add
