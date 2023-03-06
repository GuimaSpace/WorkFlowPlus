import { NextPage } from "next";
import dynamic from "next/dynamic";
const WinBox = dynamic(() => import('react-winbox'), { ssr: false });
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import Style from './style.module.scss'
import ServiceList from '../ServiceList/index'


const NavBar: NextPage = () => {
    /* useState do WinboxJs */
    const ref = useRef();
    /* Variaveis de janelas WinBox */
    const [OpenOsWindow, setOpenOsWindow] = useState(false)
    const [OpenCreaditsWindow, setOpenCreaditsWindow] = useState(false)


    return (
        <div>

            <div className={Style.NavBody}>
                <a onClick={() => { setOpenOsWindow(true) }}>
                    <i className="bi bi-window"></i>
                </a>
                <a onClick={() => { setOpenCreaditsWindow(true) }}>
                    <i className="bi bi-person-fill"></i>
                </a>
            </div>


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
                    top={50}
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
                    <ServiceList />
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
                    top={50}
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
                    <h1>Creditos</h1>
                </WinBox>
            )}
        </div>
    )
}

export default NavBar