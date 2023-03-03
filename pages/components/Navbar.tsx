import { useState } from 'react'
const WinBox = dynamic(() => import('react-winbox'), { ssr: false });

export default function Navbar() {
    const [openWindow, setOpenWindow] = useState<boolean>(false)

    function windowHandler() {
        setOpenWindow(true)
    }

    return (
        <div className="flex flex-col w-screen h-12 bg-zinc-700">
            <button onClick={() => { windowHandler }}>Ordem de Serviço</button>
            {
                openWindow && (
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
                        onclose={() => { setOpenWindow(false) }} >
                    </WinBox>
                )
            }
        </div>
    )
}
