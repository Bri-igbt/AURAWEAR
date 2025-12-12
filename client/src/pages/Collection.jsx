import React, {useContext, useEffect, useState} from 'react'
import {ShopContext} from "../context/ShopContext.jsx";
import {assets} from "../assets/frontend_assets/assets.js";
import Title from "../components/Title.jsx";
import ProductItem from "../components/ProductItem.jsx";

const Collection = () => {
    const { products } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relevant');

    const handleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(category.filter((item) => item !== e.target.value))
        } else {
            setCategory(prev => [...prev, e.target.value])
        }
    }

    const handleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(subCategory.filter((item) => item !== e.target.value))
        } else {
            setSubCategory(prev => [...prev, e.target.value])
        }
    }

    const sortProducts = () => {
        let fpCopy = products.slice();

        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a, b) => a.price - b.price))
                break;

            case 'high-low':
                setFilterProducts(fpCopy.sort((a, b) => b.price - a.price))
                break;

            default:
                applyFilter();
                break;
        }

    }

    const applyFilter = () => {
        let productsCopy = products.slice();

        if (category.length > 0) {
            productsCopy = productsCopy.filter((product) => category.includes(product.category));
        }

        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter((product) => subCategory.includes(product.subCategory));
        }

        // Apply sorting on the filtered products
        switch (sortType) {
            case 'low-high':
                productsCopy.sort((a, b) => a.price - b.price);
                break;
            case 'high-low':
                productsCopy.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        setFilterProducts(productsCopy);
    }


    useEffect(() => {
        sortProducts();
    }, [sortType])

    useEffect(() => {
        applyFilter();
    }, [category, subCategory])


    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        {/* Filters */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 gap-2 text-xl flex items-center cursor-pointer'>
                    FILTERS
                    <img
                        src={assets.dropdown_icon}
                        alt='dropdown'
                        className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
                    />
                </p>
            {/* Category Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input type='checkbox' value={'Men'}  onChange={handleCategory} className='w-3' /> Men
                        </p>

                        <p className='flex gap-2'>
                            <input type='checkbox' value={'Women'} onChange={handleCategory} className='w-3' /> Women
                        </p>

                        <p className='flex gap-2'>
                            <input type='checkbox' value={'Kids'}  onChange={handleCategory}  className='w-3' /> Kids
                        </p>
                    </div>
                </div>
            {/* Sub-Categories Filters */}
                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input type='checkbox' value={'Topwear'} onChange={handleSubCategory} className='w-3' /> Topwear
                        </p>

                        <p className='flex gap-2'>
                            <input type='checkbox' value={'Bottomwear'} onChange={handleSubCategory} className='w-3' /> Bottomwear
                        </p>

                        <p className='flex gap-2'>
                            <input type='checkbox' value={'Winterwear'} onChange={handleSubCategory} className='w-3' /> Winterwear
                        </p>
                    </div>
                </div>
            </div>

        {/* Right Side */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1='ALL' text2='COLLECTIONS' />

                {/*  Product Sort */}
                    <select onChange={(e) => setSortType(e.target.value)} className='text-sm border-2 border-gray-300 px-2'>
                        <option value='relevant'>Sort by: Relevant</option>
                        <option  value='low-high'>Sort by: Low to High</option>
                        <option value='high-low'>Sort by: High to Low</option>
                    </select>
                </div>

            {/*    */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6'>
                    {filterProducts.map((product, index) => (
                        <ProductItem
                            key={index}
                            name={product.name}
                            id={product._id}
                            image={product.image}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Collection
