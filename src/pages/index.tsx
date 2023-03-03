//Modules React/Next etc.
import { NextPage } from "next";
import Navbar from "./components/Navbar";
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head'

const Home: NextPage = () => {
  /* useState do WinboxJs */
  const ref = useRef();
  /* Variaveis de janelas WinBox */
  const [OpenOsWindow, setOpenOsWindow] = useState(false)
  return (
    <div>
        <Head>
          <title>WorkStation - Ordem de Serviço</title>
          <Navbar/>
        </Head>
      </div>
      )
}

      export default Home