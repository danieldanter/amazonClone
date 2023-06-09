import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { getSession } from 'next-auth/react';

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
  
     <Header />

     <main className="max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
        {/* Banner */}
        <Banner />
        {/* Product Feed */}
        <ProductFeed products={products}/>

     </main>

     
      
      {/* Footer */}
    </div>
  );
}

// server side rendering
// server side rendering
export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );
  return {
    props: {
      products,
      session,
    },
  };
}