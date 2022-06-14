const Main = (props: any) => {

    return (
        <div  className='overflow-scroll scroll-smooth flex p-12 h-screen bg-[url(../public/images/space.png)] content-center justify-center flex-wrap'
        >
            {props.children}
        </div>
    )
}

export default Main;