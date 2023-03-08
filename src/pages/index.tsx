import { FaMeteor } from 'react-icons/fa';

export default function Homepage() {
  return (
    <div className="flex flex-col p-14">
      <section className='flex flex-col h-screen items-center'>
        <div className='flex w-[95rem] h-[53rem] rounded-lg bg-sky-800 p-12 space-x-52'>
          <div className='flex flex-col mt-64'> 
            <span className='font-bold text-7xl'>Welcome to</span>
            <label className='font-bold text-8xl text-transparent bg-gradient-to-r from-sky-400 to-lime-700 bg-clip-text'>Workflow+</label>
          </div>
          <img className='w-[40rem]' src='/landpage.svg'/>
        </div>
      </section>
      <section className='flex flex-col space-y-6'>
        <div className="flex w-full h-64 justify-center items-center rounded-lg bg-gradient-to-r from-sky-400 p-10">
          <span className='font-bold text-5xl'>A quick brown fox jumps over the lazy dog</span>
        </div>
        <div className="flex w-full h-64 justify-center items-center rounded-lg bg-gradient-to-r from-transparent to-green-400 p-10">
          <span className='font-bold text-5xl'>Joe waited for the train. The train was late.</span>
        </div>
        <video data-html5-video="" preload="metadata" src="blob:https://futemax.app/9993f4d0-323b-4288-904b-024c93268b75"></video>

      </section>

    </div>
  )
}

