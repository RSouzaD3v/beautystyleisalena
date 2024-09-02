import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/logo.png';
import { ShoppingCart } from 'lucide-react';
import Header from "@/components/Header";

export default async function Home() {
  const { userId, actor } = await auth(); 
  const user = await currentUser();

  var defaultEmail = user?.primaryEmailAddress?.emailAddress as string || 'none';

  const searchUser = await db.user.findUnique({
    where: {
      email: defaultEmail,
    }
  })

  const products = await db.product.findMany();
  const productsDestaques = await db.product.findMany({
    where: {
      productSession: {
        has: 'destaques'
      }
    }
  });
  

  return (
    <main>
      <Header />
      <div className="bg-black w-[100%] h-96 flex items-center justify-center">
        <Image src={Logo} alt="logo" />
      </div>

      <div className="container my-5 flex justify-around flex-wrap">
        {productsDestaques.map((v) => {
          return (
            <div key={v.id} className="w-[250px] h-[300px] rounded-md border overflow-hidden shadow-md">
              <Link  href={'view-product/'+ v.id.toString()}>
                  <div className="w-full h-[200px] bg-black overflow-hidden flex justify-center items-center">
                    <Image width={200} height={200} src={Logo} alt="logo" />
                  </div>
              </Link>
                  <div className="flex items-center justify-between p-2 -space-y-1">
                    <div className="mt-2">
                      <h1 className="text-xl font-bold">{v.name}</h1>
                      <h1 className="text-sm text-gray-600">Preço: <b className="text-xl text-black">{v.price}</b></h1>
                      {/* <p>{v.description?.slice(0, 19)}...</p> */}
                    </div>
                    <div className="rounded-full cursor-pointer bg-black text-center p-2">
                      <ShoppingCart className="text-white"/>
                    </div>
                  </div>
            </div>
          )
        })}
      </div>
    </main>
  );
}
