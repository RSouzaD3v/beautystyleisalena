import { db } from "@/lib/db"
import { auth, currentUser } from '@clerk/nextjs/server'

export const CartCount = async () => {
    const { userId } = auth();
    const cart = await db.cart.findMany({
        where: {
            userId: userId as string,
        }
    });

    return (
        <div className='bg-red-500 w-[20px] 
        h-[20px] rounded-full
        text-white text-center 
        justify-center flex items-center absolute -mt-5'
        >
            1
        </div>
    )
}