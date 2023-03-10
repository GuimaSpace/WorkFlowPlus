//Modules React/Next etc.
import { NextPage, NextPageContext } from "next";
import dynamic from "next/dynamic";
const WinBox = dynamic(() => import('react-winbox'), { ssr: false });
import React, { useEffect, useRef, useState } from 'react';
import Head from "next/head";
import { BiHomeAlt2 } from 'react-icons/bi';
import { RiSuitcaseLine } from 'react-icons/ri';
import { MdSupportAgent } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5'
import api from "./services/api";
import { ServiceInterface } from "@/models";
import ServiceList from "./components/ServiceList";
import SupportMenu from "./components/supportMenu";

interface Props {
  services: ServiceInterface[];
  totalPages: number;
}

const Home: NextPage<Props> = ({ services, totalPages }: Props) => {
  /* useState do WinboxJs */
  /* Variaveis de janelas WinBox */
  const [OpenOsWindow, setOpenOsWindow] = useState(false)
  const [OpenCreaditsWindow, setOpenCreaditsWindow] = useState(false)
  const [OpenConfigWindow, setOpenConfigWindow] = useState(false)
  const [OpenSupportWindow, setSupportOpen] = useState(false)
  const [WinboxColor, setWinboxColor] = useState<string>()

  return (
    <div className="bg-main">
      <>
        <Head>
          <title>WorkSpace Plus - WorkStation</title>
        </Head>
      </>
      <div>
        <div className='flex flex-col space-y-2 items-center w-20 h-screen bg-zinc-900 shadow-2xl p-2 py-3 z-50'>
          <div className='navItem'>
            <BiHomeAlt2 size={36} className='text-white' />
          </div>

          <button onClick={() => { setOpenOsWindow(true) }} className={OpenOsWindow ? 'navItemActive' : 'navItem'}>
            <RiSuitcaseLine size={36} className='text-white' />
          </button>

          <button onClick={() => { setSupportOpen(true) }} className={OpenSupportWindow ? 'navItemActive' : 'navItem'}>
            <MdSupportAgent size={36} className='text-white' />
          </button>



          <button onClick={() => { setOpenConfigWindow(true) }} className={OpenConfigWindow ? 'navItemActive mt-auto' : 'navItem mt-auto'}>
            <IoSettingsOutline size={36} className='text-white' />
          </button>




          <a onClick={() => { setOpenConfigWindow(true) }}>
            <i className=""></i>
          </a>
        </div>


        {/* All Window Content */}
        {OpenOsWindow && (
          <WinBox
            title={'Serviços'}
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
            left={80}
            hide={false}
            splitscreen={true}
            background={WinboxColor}
            className={''}
            onclose={() => {
              // destroying actions while `onclose` must be wrapped within `setTimeout`
              setTimeout(() => {
                setOpenOsWindow(false);
              });
            }}
          >
            <ServiceList services={services} totalPages={totalPages} />
          </WinBox>
        )}

        {OpenSupportWindow && (
          <WinBox
            title={'Suporte'}
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
            left={80}
            hide={false}
            background={WinboxColor}
            className={''}
            onclose={() => {
              // destroying actions while `onclose` must be wrapped within `setTimeout`
              setTimeout(() => {
                setSupportOpen(false);
              });
            }}
          >
            <SupportMenu/>
          </WinBox>
        )}

        {OpenCreaditsWindow && (
          <WinBox
            title={'WorkFlow Plus | Creditos'}
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
            left={80}
            hide={false}
            background={WinboxColor}
            className={''}
            onclose={() => {
              // destroying actions while `onclose` must be wrapped within `setTimeout`
              setTimeout(() => {
                setOpenCreaditsWindow(false);
              });
            }}
          >
            <h1>Creditos</h1>
          </WinBox>
        )}

        {OpenConfigWindow && (
          <WinBox
            title={'Configurações'}
            noMin={true}
            noMax={true}
            noFull={true}
            noResize={true}
            noClose={false}
            width={400}
            height={500}
            x="center"
            y="center"
            top={0}
            right={0}
            bottom={0}
            background={WinboxColor}
            left={80}
            hide={false}
            className={''}
            onclose={() => {
              // destroying actions while `onclose` must be wrapped within `setTimeout`
              setTimeout(() => {
                setOpenConfigWindow(false);
              });
            }}
          >
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 p-2">
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="saveinterface" />
                    <label className="fs-5 form-check-label" htmlFor="saveinterface">Salvar informações de interface</label>
                  </div>
                </div>
                <div className="col-12 p-2">
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="fs-5 form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                  </div>
                </div>
                <div className="col-12 p-2">
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="fs-5 form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                  </div>
                </div>
                <div className="col-12 p-2">
                  <div className="form-check form-switch">
                    <input type="color" role="switch" id="flexSwitchCheckDefault"
                      onChange={({ target }) => setWinboxColor(target.value)}
                    />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                  </div>
                </div>
              </div>

            </div>
          </WinBox>
        )}


      </div>
    </div>
  )
}


export default Home

// essa função é executada no servidor e retorna as propriedades iniciais para a página
export async function getServerSideProps() {
  const { data } = await api.get('/services');
  return {
    props: {
      services: data.data,
      totalPages: data.totalPages,
    },
  };
}

