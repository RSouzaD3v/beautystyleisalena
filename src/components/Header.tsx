import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { SearchIcon, HeartIcon, ShoppingCart }  from 'lucide-react'
import logo from '../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className='container flex justify-between p-5'>
            <div className='p-2 rounded-full bg-gray-600'>
                <Image width={50} height={50} src={logo} alt='logo' />
            </div>

            <div>
                <div className='flex cursor-pointer bg-gray-200 p-2 rounded-md w-[250px] overflow-hidden'>
                    <label htmlFor="search">
                        <SearchIcon />
                    </label>
                    <input 
                        className='w-[100%] bg-gray-200 px-2 outline-none'
                        type="search" 
                        name="search" 
                        id="search" 
                        placeholder="Search"
                    />
                </div>
            </div>

            <div className='flex gap-[20px] items-center'>
                <div>
                    
                    <Link className='flex flex-col justify-center items-center' href={"/cart"}>
                        <ShoppingCart />
                        <h1>Carrinho</h1>
                    </Link>
                </div>
                <div>
                    <Link className='flex flex-col justify-center items-center' href={"/favorite"}>
                        <HeartIcon />
                        <h1>Favoritos</h1>
                    </Link>
                </div>

                <div>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </header>
    );
}

export default Header;