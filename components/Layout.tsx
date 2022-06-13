import {Header, Footer, Main} from './'

const Layout = ({children}: { children: any }) => (
    <>
        <Header/>
        <Main>{children}</Main>
        <Footer/>
    </>
)

export default Layout;