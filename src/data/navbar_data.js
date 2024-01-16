import { IoIosHome } from "react-icons/io";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";

export const navLinks = [
    {
        id : 1,
        label : 'Home',
        link : '/',
        icon : <IoIosHome/>
    },
    {
        id : 2,
        label : 'About',
        link : '/about',
        icon : <BsFillInfoSquareFill />
    },
    {
        id : 3,
        label : 'Contact',
        link : '/contact',
        icon : <BiSolidContact/>
    }
];