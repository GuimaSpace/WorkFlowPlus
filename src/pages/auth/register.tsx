import { Head } from 'next/document'
import { AiOutlineCodepenCircle } from 'react-icons/ai'

export default function Register() {
    return (
        <div className='flex flex-row items-center justify-center w-screen h-screen py-32 space-x-10'>
            <div>
                <img src='/auth.svg' className='sm:w-[38rem] ' />
            </div>
            <form className="flex flex-col justify-center items-center w-[35rem] h-[50rem] p-14 space-y-4">
                <AiOutlineCodepenCircle size={120} />
                <span className='font-bold text-5xl'>Register</span>
                <div className='w-full'>
                    <input type='text' placeholder='Nome' className='formInput' />
                </div>
                <div className='w-full'>
                    <input type='text' placeholder='Sobrenome' className='formInput' />
                </div>
                <div className='w-full'>
                    <input type='email' placeholder='email' className='formInput' />
                </div>
                <div className='w-full'>
                    <input type='password' placeholder='Senha' className='formInput' />
                </div>
                <div className='w-full'>
                    <input type='password' placeholder='Confirme senha' className='formInput' />
                </div>
                <button className='w-full h-12 bg-gradient-to-r from-sky-400 to-sky-500 rounded-lg shadow-lg font-bold text-lg'>register</button>
                <span className='text-sm text-zinc-600'>Já possui uma conta? Clique <a href='/auth/login' className='text-sky-500 hover:text-sky-600 visited:text-sky-500'>aqui</a></span>
            </form>
        </div>
    )
}