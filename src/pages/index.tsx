//Modules React/Next etc.
import { NextPage } from "next";
import NavBar from "./components/NavBar/Navbar";
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head'

const Home: NextPage = () => {
  return(
    <div>
      <>
        <Head>
          <title>WorkSpace Plus - WorkStation</title>
        </Head> 
        <NavBar/>
      </>
    </div>
  )
}

export default Home