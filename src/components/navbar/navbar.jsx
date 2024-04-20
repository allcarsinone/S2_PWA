import Link from "next/link";
import Image from "next/image";
import Links from "./links/links";

const Navbar = () => {

    return (
        <div>
            <Image src="/static/Logo.png" width={100} height={100} alt="Logo"/>
            <div>
                <Links/>
            </div>
        </div>
    )
}

export default Navbar