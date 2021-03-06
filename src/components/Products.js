import Image from 'next/image'
import Currency from 'react-currency-formatter'
import { StarIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import Skeleton from 'react-loading-skeleton';


const MAX_RATING = 5
const MIN_RATING = 1

function Products({id, title, price, description, category, image }) {
    const dispatch = useDispatch();
    
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )
    const [hasPrime] = useState(Math.random() < 0.5);

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            hasPrime,
            description,
            category,
            image,
        };

        dispatch(addToBasket(product))
    }

    const [hasProduct, setProduct] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProduct(true);
        }, 1000);
        return () => clearTimeout(timer);
    })

    if(hasProduct) {
        return (
            <div className="relative flex flex-col m-5 bg-gray-50 shadow-sm z-30 p-10">
                <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

                <Image src={image} height={200} width={200} objectFit="contain" />

                <h4 className="my-3">{title}</h4>

                <div className="flex">
                    {Array(rating).fill().map((_, i) =>(
                        <StarIcon className="h-5 text-yellow-500" />
                    ))}
                </div>

                <p className="text-xs my-2 line-clamp-2">{description}</p>

                <div className="mb-5">
                    <Currency quantity={price} currency="IDR" />
                </div>

                {hasPrime && (
                    <div className="flex items-center space-x-2 -mt-5">
                        <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )}

                <button onClick={addItemToBasket} className="mt-auto keranjang">Tambah ke Keranjang</button>

            </div>
        )
        
                }

        return (
            <div className="relative flex flex-col m-5 bg-gray-50 shadow-sm z-30 p-10">
                <p className=" pl-14 mb-6"> { <Skeleton width={90} height={90} /> || category } </p>
                <h4> {<Skeleton /> || title} </h4> <br />
                <p> {<Skeleton count={2} /> || description } </p>
            </div>
        )
}

export default Products
