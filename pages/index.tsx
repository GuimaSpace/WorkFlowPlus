//Modules React/Next etc.
import { NextPage } from "next";
import dynamic from 'next/dynamic';
import Nav
const WinBox = dynamic(() => import('react-winbox'), { ssr: false });
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head'

const Home: NextPage = () => {
  /* useState do WinboxJs */
  const ref = useRef();
  /* Variaveis de janelas WinBox */
  const [OpenOsWindow, setOpenOsWindow] = useState(false)
  return (
    <div>
      <>
        <Head>
          <title>WorkStation - Ordem de Serviço</title>
        </Head>
      </>

      <button
        onClick={() => { setOpenOsWindow(true) }}
      >Abrir</button>

      {OpenOsWindow && (
        <WinBox
          title={'WorkFlow Plus by IonSolution'}
          noMin={false}
          noMax={false}
          noFull={true}
          noClose={false}
          width={1500}
          height={500}
          x="center"
          y="center"
          top={0}
          right={0}
          bottom={0}
          left={0}
          hide={false}
          className={''}
          onclose={() => {
            // destroying actions while `onclose` must be wrapped within `setTimeout`
            setTimeout(() => {
              setOpenOsWindow(false);
            });
          }}
        >
          <div style={{ padding: 10, fontFamily: 'arial' }}>
            <h1>WorkFlow Plus</h1>
          </div>

          <hr />
          <h3 style={{ padding: 10, fontFamily: 'arial' }}>
            WorkFlow Plus desenvolvido por:<br />

          </h3>
        </WinBox>
      )}
    </div>
  )
}

export default Home