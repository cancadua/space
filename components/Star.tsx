import star from "../public/star.svg"
import Image from 'next/image'
import {HTMLAttributes} from "react";

const Star = (props: HTMLAttributes<HTMLImageElement>) => {

    return (
        <div {...props}>
            <Image src={star} alt={'STAR'}/>
        </div>
    )

}



export default Star;