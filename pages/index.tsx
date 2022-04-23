import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="h-[100vh]">
      <Head>
        <title>AirBnb | Harshjohar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-5'>
          <h2 className='text-4xl font-semibold pb-5'>
            Explore Nearby
          </h2>

          {/* pull data from an API, we ll use getStaticProps */}
        </section>
      </main>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").then(res=>res.json());

  return {
    props: {
      exploreData
    }
  }
  
}