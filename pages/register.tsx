import type { ReactElement } from 'react'
import {Layout} from "../components";
import Link from "next/link";

const register = () => {
    return (
            <div className='flex flex-wrap flex-row gap-12 m-12 h-min
            border-solid border-3 border-blue-500 w-2/5 justify-center bg-white rounded-xl p-4'>
                <div className='flex w-full h-min justify-center'>
                    <h1 className='text-5xl'>🌟 Welcome 🌟</h1>
                </div>
                <form className='flex w-full flex-wrap flex-col gap-3 items-center'>
                    <h1>New to Space? Register!</h1>
                    <input placeholder={'Choose nick'} className='p-1 h-min border-2 border-solid border-yellow-600 rounded-lg'/>
                    <input placeholder={'Type your email'} className='p-1 h-min border-2 border-solid border-yellow-600 rounded-lg'/>
                    <input placeholder={'Choose password'} className='p-1 h-min border-2 border-solid border-yellow-600 rounded-lg'/>
                    <input placeholder={'Repeat password'} className='p-1 h-min border-2 border-solid border-yellow-600 rounded-lg'/>
                </form>

                <div className='justify-between flex w-full'>
                    <Link href={'/restore'} passHref>
                        <a className='flex text-sm h-min'>Forgot your password? Restore it!</a>

                    </Link>
                    <Link href={'/login'} passHref>
                        <a className='flex text-sm h-min'>Already on Space? Log in!</a>
                    </Link>
                </div>
            </div>

    )
}

register.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default register;