import React, {useContext} from 'react'
import {ShopContext} from "../context/ShopContext.jsx";
import {assets} from "../assets/frontend_assets/assets.js";

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

    return showSearch ?  (
        <div className='border-t border-b bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-2 rounded-full w-3/4 sm:w-1/2'>
                <input
                    type='text'
                    placeholder='Search Products'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='flex-1 outline-none text-sm bg-inherit'
                />
                <img src={assets.search_icon} alt='search icon' className='w-5' onClick={() => setShowSearch(false)}/>
            </div>

            <img
                src={assets.cross_icon}
                alt='close icon'
                className='w-3 inline cursor-pointer'
                onClick={() => setShowSearch(false)}
            />
        </div>
    ) : null
}
export default SearchBar
