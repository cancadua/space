import type { NextPage } from 'next'
import {Header, Main, Footer, Layout} from "../components";
import {ReactElement} from "react";
import Link from "next/link";

const Home = () => {
  return (
      <div className='flex flex-wrap flex-row gap-12 m-12 h-min border-solid border-3 border-blue-500
      w-2/5 justify-center items-center bg-white rounded-xl p-4'>
          <div className='flex w-full h-min justify-center'>
              <h1 className='text-5xl'>🌟 Welcome 🌟</h1>
          </div>
            <div className='flex flex-wrap justify-center items-center flex-col'>

                <Link href={'/register'} passHref>
                    <a className='flex text-xl h-min'>Not on Space yet? Register!</a>
                </Link>

                <Link href={'/login'} passHref>
                    <a className='flex text-xl h-min'>Already on Space? Log in!</a>
                </Link>

            </div>

      </div>
  )
}

Home.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}


export default Home
