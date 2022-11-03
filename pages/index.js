import Head from 'next/head'
// import type { NextPage } from 'next'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Image from 'next/image' 
import {getProviders, getSession,useSession}from 'next-auth/react'
import Login from '../components/Login'

export default function Home({ trendingResults, followResults, providers}) {
    const {data: session } = useSession();
    if(!session) return (<><Login providers={providers} /></>)

  return (
    <div className=" ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed /> 
        { session.user.name}
         
      </main>
    </div>
  )
}

// export default Home
export async function getServerSideProps(context){
  // 'https://jsonkeeper.com/b/WWMJ'
  // https://jsonkeeper.com/b/NKEV
  const trendingResults = "ggg"// await fetch("http://localhost:").then((res)=>res.json());
  const followResults = "" //await fetch("http://localhost").then((res)=>res.json());

  const providers = await getProviders();
  const session = await getSession(context);

  return {props:{
    trendingResults,
    followResults,
    providers:{...providers},
    session
  },
  };
}