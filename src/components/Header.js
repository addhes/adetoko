import Image from 'next/image'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"

import { signIn, signOut, useSession } from "next-auth/client"
import { useRouter } from "next/router"
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'

function Header() {
    const [session] = useSession()
    const router = useRouter();
    const items = useSelector(selectItems)

    return (
       <header>
           <div className="flex items-center bg-cyan-800 p-1 flex-grow">
               <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push("/")} 
                        src="/assets/images/logo.png"
                        width={140}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
               </div>
               <div className="hidden sm:flex cursor-pointer items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500">
                   <input className="p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none" type="text" />
                   <SearchIcon className="h-12 p-4" />
               </div>

                <div className="text-white sm:flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="cursor-pointer hover:underline">
                        <p>
                            {session ? `Hello, ${session.user.name}` : `Sign In` }
                        </p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>

                    <div className="cursor-pointer hover:underline">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    <div onClick={() => router.push('checkout')} className=" relative flex items-center cursor-pointer hover:underline">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 text-center rounded-full text-black font-bold bg-yellow-400">
                        {items.length}
                        </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className=" hidden md:inline font-extrabold md:text-sm">Basket</p>
                    </div>
                </div>
           </div>

           <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
               <p className="cursor-pointer hover:underline flex items-center">
               <MenuIcon className="h-6 mr-1" />
               all
               </p>
                <p className="cursor-pointer hover:underline">Prime Video</p>
                <p className="cursor-pointer hover:underline">Amaxon Business</p>
                <p className="cursor-pointer hover:underline">Today's deals</p>
                <p className="cursor-pointer hover:underline hidden lg:inline-flex">Electonics</p>
                <p className="cursor-pointer hover:underline hidden lg:inline-flex">Foods</p>
                <p className="cursor-pointer hover:underline hidden lg:inline-flex">Buy Again</p>
                <p className="cursor-pointer hover:underline hidden lg:inline-flex">Shopper Toolkit</p>
           </div>
       </header>
    )
}

export default Header;
