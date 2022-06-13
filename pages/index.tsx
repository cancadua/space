import type { NextPage } from 'next'
import {Header, Main, Footer, Layout} from "../components";
import {ReactElement} from "react";

const Home = () => {
  return (
    <div className='text-white'>
        home

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
