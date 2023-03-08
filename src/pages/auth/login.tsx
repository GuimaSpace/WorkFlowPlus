import { AiOutlineCodepenCircle } from 'react-icons/ai'
import Head from 'next/head'

export default function Login() {
    return (
        <div className='flex flex-row items-center justify-center w-screen h-screen py-32 space-x-10'>
            <div>
                <img src='/auth.svg' className='sm:w-[38rem] ' />
            </div>
            <form className="flex flex-col items-center w-[35rem] h-[40rem] p-14 space-y-6">
                <AiOutlineCodepenCircle size={120} />
                <span className='font-bold text-5xl'>Login</span>
                <div className='w-full'>
                    <input type='text' placeholder='email' className='formInput' />
                </div>
                <div className='w-full'>
                    <input type='text' placeholder='password' className='formInput' />
                </div>
                <button className='w-full h-12 bg-gradient-to-r from-sky-400 to-sky-500 rounded-lg shadow-lg font-bold text-lg'>login</button>
                <span className='text-sm text-zinc-600'>Não possui uma conta? Clique <a href='/auth/register' className='text-sky-500 hover:text-sky-600 visited:text-sky-500'>aqui</a></span>
            </form>
        </div>
    )
}