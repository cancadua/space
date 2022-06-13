import type { ReactElement } from 'react'
import {Layout} from "../components";
import Link from "next/link";

const restore = () => {
    return (

        <div className='flex flex-wrap flex-row gap-12 m-12 h-min
            border-solid border-3 border-blue-500 w-2/5 justify-center bg-white rounded-xl p-4'>
            <div className='flex w-full h-min justify-center'>
                <h1 className='text-5xl'>🌟 Restore 🌟</h1>
            </div>

            <form className='flex w-full flex-wrap flex-col gap-3 items-center'>
                <h1>Type your account email!</h1>
                <input placeholder={'Email'} className='p-1 h-min border-2 border-solid border-yellow-600 rounded-lg'/>
            </form>

            <div className='justify-between flex w-full'>
                <Link href={'/register'} passHref>
                    <a className='flex text-sm h-min'>Not on Space yet? Register!</a>
                </Link>
            </div>
        </div>

    )
}

restore.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default restore;