import type { NextPage } from 'next'
import Sidbar from '../components/Sidbar'
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
        <Sidbar />
      </main>
    </div>
  )
}

export default Home
