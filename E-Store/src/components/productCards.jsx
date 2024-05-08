import React from 'react'
import { Link } from 'react-router-dom'

const ProductCards = ({ item }) => {
    return (
        <div className=" w-72 rounded overflow-hidden shadow-lg m-2 pb-2 flex flex-col space-y-4">
            <img className="w-full h-48 object-cover" src={item.thumbnail} alt={item.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
            </div>
            <div className="px-6 pt-4 pb-2 flex">
                <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: ${item.price}</div>
                <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rating: {item.rating}</div>
            </div>
            <Link className="block w-2/4 bg-orange-700 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded mt-4 mx-6"  to={`/products/${item.title.replace(/\s+/g, '-')}`}>
                Check Product
            </Link>
        </div>

    )
}

export default ProductCards