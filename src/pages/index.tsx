//Modules React/Next etc.
import { NextPage } from 'next'
import Navbar from './components/Navbar';
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head'

import { FaFilter } from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WorkStation - Ordem de Serviço</title>
      </Head>
      <Navbar />
      <div className='flex w-screen h-[57.5rem] p-6 space-x-10'>
        <section className='flex flex-col w-96 h-full bg-zinc-200 rounded-xl p-3 space-y-5'>
          <input type='text' className='bg-zinc-200 w-full h-12 rounded-xl mt-4 border border-zinc-400' />
          <div className='self-center w-64 h-[1px] bg-zinc-400 my-6'></div>
          <span className='font-bold text-zinc-700 text-base mb-3'>Filtros</span>
          <div className='flex justify-around'>
            <button className='flex items-center justify-center w-12 h-12 bg-zinc-200 rounded-xl border border-slate-300 hover:bg-zinc-300 transition'><FaFilter /></button>
            <button className='flex items-center justify-center w-12 h-12 bg-zinc-200 rounded-xl border border-slate-300 hover:bg-zinc-300 transition'><FaFilter /></button>
            <button className='flex items-center justify-center w-12 h-12 bg-zinc-200 rounded-xl border border-slate-300 hover:bg-zinc-300 transition'><FaFilter /></button>
          </div>
          <button className='w-full h-12 bg-sky-500 rounded-md font-semibold text-white hover:bg-sky-600 transition'>Criar ordem</button>
        </section>
        <article className='w-full h-full bg-zinc-200 rounded-xl p-6'>
          <span className='text-xl font-semibold'>Ordem de serviço</span>
        </article>
      </div>
    </div>
  )
}

export default Home