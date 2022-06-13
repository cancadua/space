import Star from "./Star";
import Link from "next/link";

const Header = () => {
    return (
        <div>
            <header className="top-0 p-2 fixed w-full bg-black flex h-12 border-gray-400 border-b-2 justify-around content-center items-center flex-nowrap flex-row border-solid">

                <Link href={'/'}>
                    <button className="text-l text-gray-200 font-bold bg-blue-600 h-full w-1/8 transition duration-1000 hover:bg-blue-400 hover:text-white rounded-xl border-solid border-2 border-yellow-600">
                        Spaceboard
                    </button>
                </Link>


                <Link href={'/register'}>
                    <button className="text-l text-gray-200 font-bold bg-blue-600 h-full w-1/8 transition duration-1000 hover:bg-blue-400 hover:text-white rounded-xl border-solid border-2 border-yellow-600">
                        Register
                    </button>
                </Link>

                <button className="text-l text-gray-200 font-bold bg-blue-600 h-full w-1/8 transition duration-1000 hover:bg-blue-400 hover:text-white rounded-xl border-solid border-2 border-yellow-600">
                    Messages
                </button>

                <button className="text-l text-gray-200 font-bold bg-blue-600 h-full w-1/8 transition duration-1000 hover:bg-blue-500 hover:text-white rounded-xl border-solid border-2 border-yellow-600">
                    Profile
                </button>

                <button className='h-full w-auto flex items-center'>
                    <Star className='h-4/5 w-auto flex'>hey</Star>

                </button>

            </header>
        </div>
    )
}

export default Header;
