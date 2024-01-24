import { navLinks } from '../../data/navbar_data';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { useSelector } from 'react-redux';

function DesktopNavbar(){
    const auth = useSelector((state)=>state.auth);

    return (
        <nav className="bg-[var(--color-bg)] flex w-full items-stretch justify-center py-4 app-box-shadow sticky top-0 z-10">
            <p className="flex-1 md:flex-none text-3xl md:text-2xl tracking-wider ff-monster font-semibold mx-4 text-word">
                <Link to='/'>Learnyst</Link>
            </p>
            <div className="flex-1 hidden md:flex items-stretch justify-center">
                <ul className="w-full flex items-center justify-start px-2">
                    {
                        navLinks.map((item)=>{
                            return (
                                <li className='mx-4' key={item.id}>
                                    <Link to={item.link} className='ff-roboto tracking-normal text-word' >{item.label}</Link>
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
                <div className='bg-[var(--color-fg)] text-[var(--color-bg)] rounded-full flex items-center justify-center mx-2 mr-4'>
                    <ProfileMenu />
                </div>
            }
        </nav>
    );
}

export default DesktopNavbar;