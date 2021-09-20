import { StarIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
}) {

    const dispatch = useDispatch()
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }));
    }

    return <div className="grid grid-cols-5">
        <Image src={image} height={180} width={180} objectFit="contain" />
        
        {/* Midle */}
        <div className="col-span-3 mx-5">
            <p>{title}</p>
            <div className="flex">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
            </div>
            <p className="text-xs my-2 line-clamp-3">{description}</p>
            <Currency quantity={ price} currency="IDR" />

            {hasPrime && (
                <div className="flex items-center space-x-2">
                    <img 
                        src="https://links.papareact.com/fdw" 
                        alt="" 
                        className="w-12"
                        loading="lazy"
                    />
                    <p className="text-xs text-gray-500">Free next-day delivery</p>
                </div>
            )}

        </div>

        {/* Right slide */}
        <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="keranjang">Add to Basket</button>
                <button onClick={removeItemFromBasket} className="keranjang">Remove Basket</button>
        </div>

    </div>;
}

export default CheckoutProduct
