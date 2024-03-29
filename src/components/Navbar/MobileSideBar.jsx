import { navLinks } from '../../data/navbar_data';
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { useSelector } from 'react-redux';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import Logout from '../LogOut/Logout';
import { FiLogOut } from "react-icons/fi";
import clsx from 'clsx';

function MenuIcon({ isMenuOpened, isLoggedIn }){
    return (
        <div className='h-[40px] w-[40px] text-2xl flex items-center justify-center'>
            { isMenuOpened && <IoMdClose/>}
            { !isMenuOpened && <RiMenu3Fill/>  }
        </div>
    );
}

function MobileSideBar(){
    const [isMenuOpened,setMenuOpen] = useState(false);
    const auth = useSelector((state)=>state.auth);

    function toggleMenu(){
        setMenuOpen(!isMenuOpened);
    }

    return (
        <>
            <nav className="bg-[var(--color-bg)] flex w-full items-stretch justify-center py-4 app-box-shadow sticky top-0 z-10">
                <p className="flex-1 md:flex-none text-3xl md:text-2xl tracking-wider ff-monster font-semibold mx-4 text-word">
                    <Link to='/'>Learnyst</Link>
                </p>
                <div className='bg-[var(--color-fg)] text-[var(--color-bg)] rounded-md flex items-center justify-center mr-2'>
                    <ThemeSwitcher />
                </div>
                {
                    <div className={clsx('bg-[var(--color-fg)]','text-[var(--color-bg)]', auth.isLoggedIn ? 'rounded-full' : 'rounded-md','flex','items-center','justify-center')} onClick={toggleMenu}> 
                        { isMenuOpened ? <MenuIcon isMenuOpened={isMenuOpened} /> :  auth.isLoggedIn ? <ProfileMenu /> : <MenuIcon isMenuOpened={isMenuOpened}/> }
                    </div>
                }
                <div className='bg-[var(--color-fg)] text-[var(--color-bg)] rounded-md flex items-center justify-center relative mr-4'>
                    {
                        isMenuOpened && 
                        <div className='absolute bg-[var(--color-bg)]  right-0  top-[calc(120%)] z-10 border-[var(--color-fg) border-2 border-gray-200 rounded-lg shadow-sm'>
                            <div className="flex-1 text-[var(--color-fg)]">
                                    {
                                        navLinks.map((item)=>{
                                            return (
                                                <p className='w-full flex items-center justify-center text-lg font-normal ff-monster active:text-[var(--color-bg)] active:bg-[var(--color-fg)] text-left' key={item.id}>
                                                    <span className='p-2'>{ item.icon }</span>
                                                    <Link to={item.link} className='tracking-normal flex-1 text-left p-2' >{item.label}</Link>
                                                </p>
                                            )
                                        })
                                    }
                                    {
                                        auth.isLoggedIn &&
                                        <Logout title={'Logout'} 
                                            icon={<FiLogOut/>} 
                                            classStyle={'w-full flex items-center justify-center text-lg font-normal ff-monster active:text-[var(--color-bg)] active:bg-[var(--color-fg)] text-left'}
                                            iconStyle={'p-2'}
                                            titleStyle={'tracking-normal flex-1 text-left p-2'} />
                                    }
                            </div>
                        </div>
                    }
                </div>
            </nav>
        </>
    );
}

export default MobileSideBar;