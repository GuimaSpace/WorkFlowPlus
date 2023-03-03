//Modules React/Next etc.
import { NextPage } from 'next'
import Navbar from './components/Navbar';
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head'

const Home: NextPage = () => {
  const [OpenOsWindow, setOpenOsWindow] = useState(false)
  return (
    <div>
      <Head>
        <title>WorkStation - Ordem de Serviço</title>
      </Head>
      <Navbar />
      <div className='flex w-screen h-[57.5rem] p-6 space-x-10'>
        <section className='flex h-full'>
          <div className='w-80 h-full bg-zinc-200 rounded-xl'>

          </div>
        </section>
        <article className='w-full h-full bg-zinc-200 rounded-xl'>

        </article>
      </div>
    </div>
  )
}

export default Home