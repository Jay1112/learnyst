import { navLinks } from '../../data/navbar_data';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { useSelector } from 'react-redux';
import Logout from '../LogOut/Logout';
import { FiLogOut } from "react-icons/fi";

function DesktopNavbar(){
    const auth = useSelector((state)=>state.auth);

    return (
        <nav className="bg-[var(--color-bg)] flex w-full items-stretch justify-center py-4 app-box-shadow sticky top-0 z-10">
            <p className="flex-1 md:flex-none text-3xl md:text-2xl tracking-wider ff-monster font-semibold mx-4 text-word flex items-center justify-center">
                <Link to='/'>Learnyst</Link>
            </p>
            <div className="flex-1 hidden md:flex items-stretch justify-center">
                <ul className="w-full flex items-center justify-start px-2 ">
                    {
                        navLinks.map((item)=>{
                            return (
                                <li className='mx-4' key={item.id}>
                                    <Link to={item.link} className='ff-roboto tracking-normal text-word ' >{item.label}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='bg-[var(--color-fg)] text-[var(--color-bg)] rounded-md flex items-center justify-center mx-2'>
                <ThemeSwitcher />
            </div>
            {
                auth.isLoggedIn &&
                <div className='bg-[var(--color-fg)] text-[var(--color-bg)] rounded-md flex items-center justify-center mx-1'>
                    <Logout title={''} 
                            icon={<FiLogOut/>} 
                            classStyle={'w-full flex items-center justify-center text-lg font-normal ff-monster active:text-[var(--color-bg)] active:bg-[var(--color-fg)] text-left px-2.5'}
                            titleStyle={'tracking-normal flex-1 text-left'} />
                </div>
            }
            {
                auth.isLoggedIn &&
                <div className='bg-[var(--color-fg)] text-[var(--color-bg)] rounded-full flex items-center justify-center mx-1'>
                    <ProfileMenu />
                </div>
            }
        </nav>
    );
}

export default DesktopNavbar;