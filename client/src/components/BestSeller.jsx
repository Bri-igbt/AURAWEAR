import React, {useContext, useEffect, useState} from 'react'
import {ShopContext} from "../context/ShopContext.jsx";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSellerProducts, setBestSellerProducts] = useState([])

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller))
        setBestSellerProducts(bestProduct.slice(0, 5))
    }, [])
    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1='BEST' text2='SELLER' />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Proven excellence. These bestsellers combine timeless appeal with unmatched quality—loved by
                    customers season after season.
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSellerProducts.map((products, index) => (
                    <ProductItem
                        key={index}
                        id={products._id}
                        image={products.image}
                        name={products.name}
                        price={products.price}
                    />
                ))}
            </div>
        </div>
    )
}
export default BestSeller
