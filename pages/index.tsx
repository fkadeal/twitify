import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className=" ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
      </main>
    </div>
  )
}

export default Home
