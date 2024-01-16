import { navLinks } from '../../data/navbar_data';
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import Button from '../ui/Button/Button';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
function MobileSideBar(){
    const [isMenuOpened,setMenuOpen] = useState(false);

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
                <div className='bg-[var(--color-fg)] text-[var(--color-bg)] rounded-md flex items-center justify-center relative mr-4'>
                    {/* <ThemeSwitcher /> */}
                    <Button buttonCallBack={toggleMenu} classStyle={'px-2 text-2xl'}>
                        { isMenuOpened ? <IoMdClose/> : <RiMenu3Fill /> }
                        
                    </Button>
                    {
                        isMenuOpened && 
                        <div className='absolute bg-[var(--color-bg)]  right-0  top-[calc(120%)] z-10 border-2 rounded-md border-[var(--color-fg)]'>
                            <div className="flex-1 text-[var(--color-fg)]">
                                    {
                                        navLinks.map((item)=>{
                                            return (
                                                <p className='w-full flex items-center justify-center px-4 py-2 text-lg font-normal ff-monster active:text-[var(--color-bg)] active:bg-[var(--color-fg)] text-left' key={item.id}>
                                                    { item.icon }
                                                    <Link to={item.link} className='tracking-normal flex-1 text-left ml-2 mr-4' >{item.label}</Link>
                                                </p>
                                            )
                                        })
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