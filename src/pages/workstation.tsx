//Modules React/Next etc.
import { NextPage, NextPageContext } from "next";
import dynamic from "next/dynamic";
const WinBox = dynamic(() => import('react-winbox'), { ssr: false });
import React, { useEffect, useRef, useState } from 'react';
import Head from "next/head";
import { BiHomeAlt2 } from 'react-icons/bi';
import { RiSuitcaseLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5'
import api from "./services/api";
import { ServiceInterface } from "@/models";

interface PageProps {
  resServices:[]
}


const Home: NextPage<PageProps> = ({ resServices }) => {
  console.log(resServices)
  /* useState do WinboxJs */
  const ref = useRef();
  /* Variaveis de janelas WinBox */
  const [OpenOsWindow, setOpenOsWindow] = useState(false)
  const [OpenCreaditsWindow, setOpenCreaditsWindow] = useState(false)
  const [OpenConfigWindow, setOpenConfigWindow] = useState(false)
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

          <button onClick={() => { setOpenConfigWindow(true) }} className={OpenConfigWindow ? 'navItemActive mt-auto' : 'navItem mt-auto'}>
            <IoSettingsOutline size={36} className='text-white' />
          </button>

          <a onClick={() => { setOpenCreaditsWindow(true) }}>
            <i className=""></i>
          </a>
          <a onClick={() => { setOpenConfigWindow(true) }}>
            <i className=""></i>
          </a>
        </div>
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
            <div>
              <table className="table table-dark table-hover">
                <thead>

                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Local</th>
                    <th scope="col">Data Criado</th>
                    <th scope="col">Requisitor</th>
                    <th scope="col">prioridade</th>
                    <th scope="col">status</th>
                    <th scope="col">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {resServices.map((service: ServiceInterface) => {
                    return (
                      <tr>
                        <th scope="row">{service.id}</th>
                        <td>{service.title}</td>
                        <td>{service.description}</td>
                        <td>{service.place}</td>
                        <td>{service.created_date}</td>
                        <td>{service.requester}</td>

                        <td><span className="text-center badge text-bg-primary">Baixa</span></td>
                        <td><span className="badge text-bg-secondary">Aguardando</span></td>
                        <td><button type="button" className="btn btn-primary">Começar</button> <button type="button" className="btn btn-success" disabled>Concluir</button></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>

            </div>
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
            width={500}
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

Home.getInitialProps = async (context: NextPageContext): Promise<PageProps> => {
  const res = await api.get('/services')
  const resServices = await res.data
  return { resServices };
};

export default Home