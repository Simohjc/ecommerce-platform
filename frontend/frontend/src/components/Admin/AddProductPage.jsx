import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import login from "../../assets/login.webp";
import { Link } from "react-router-dom";

const categories = ["T-Shirts", "Hoodies", "Shoes", "Accessories"];
const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["Black", "White", "Red", "Blue", "Green"];

const AddProductPage = () => {
    const API_BASE_URL = 'http://localhost:9000';
    const [product, setProduct] = useState({
      name: "",
      price: "",
      category: "",
      brand: "",
      color: [],
      size: [],
      description: "",
      image: "",
    });
  
    const [imageFile, setImageFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProduct({ ...product, [name]: value });
    };
  
    const handleSelectChange = (selectedOptions, { name }) => {
      setProduct({ ...product, [name]: selectedOptions.map((opt) => opt.value) });
    };
  
    const handleImageUpload = async () => {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "simo-ecommerce");
      formData.append("cloud_name", "dbif9jvdz");
  
      try {
        setUploading(true);
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dbif9jvdz/image/upload",
          formData
        );
        setProduct({ ...product, image: response.data.secure_url });
        setUploading(false);
        return response.data.secure_url; // Return the URL for use in handleSubmit
      } catch (err) {
        console.error("Image upload failed", err);
        setUploading(false);
        throw err; // Re-throw the error to handle in submit
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      // Basic validation
      if (!product.name || !product.price) {
        alert("Product name and price are required");
        setIsSubmitting(false);
        return;
      }
  
      try {
        let imageUrl = product.image;
        
        // Upload new image if one was selected but not yet uploaded
        if (!product.image && imageFile) {
          imageUrl = await handleImageUpload();
        }
  
        const response = await axios.post(
            `${API_BASE_URL}/api/admin/products`, // Now using full URL
            {
              ...product,
              price: Number(product.price),
              color: product.color.join(','),
              size: product.size.join(','),
              image: imageUrl
            },
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
            }
          );
  
        alert("Product added successfully!");
        console.log("New product:", response.data);
        
        // Reset form after successful submission
        setProduct({
          name: "",
          price: "",
          category: "",
          brand: "",
          color: [],
          size: [],
          description: "",
          image: "",
        });
        setImageFile(null);
  
      } catch (error) {
        console.error("Error adding product:", error);
        alert(`Failed to add product: ${error.response?.data?.message || error.message}`);
      } finally {
        setIsSubmitting(false);
      }
    };


  return (
   <div className="flex  w-full bg-gradient-to-r from-purple-400 via-purple-700 to-indigo-900 text-gray-100 overflow-hidden">
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <div className="flex justify-center mb-7">
        <div>
          <Link to="/" className="text-2xl lg:text-3xl ml-5 lg:ml-0 text-[#fafafc] animate-pulse">
               SimoShopExpress
          </Link>
        </div>
        </div>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg border shadow-sm">
      <h3 className="font-bold mb-4 text-center text-neutral-400">Add Product</h3>
        {/* Text Inputs */}
        {["name", "price", "brand", "description"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field}
            value={product[field]}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mb-4"
          />
        ))}

        {/* Category Dropdown */}
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded mb-4"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Multi-selects */}
        <Select
          isMulti
          name="size"
          options={sizes.map((s) => ({ label: s, value: s }))}
          onChange={handleSelectChange}
          className="basic-multi-select mb-4"
          classNamePrefix="select"
          placeholder="Select Sizes"
        />
        <Select
          isMulti
          name="color"
          options={colors.map((c) => ({ label: c, value: c }))}
          onChange={handleSelectChange}
          className="basic-multi-select mb-4"
          classNamePrefix="select"
          placeholder="Select Colors"
        />

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="w-full mb-4"
        />
        {uploading && <p>Uploading image...</p>}
        {product.image && (
          <img src={product.image} alt="Uploaded" className="w-32 h-32 object-cover" />
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>

    <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={login}
            alt="Login to Account"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
</div>
  );
};

export default AddProductPage;
