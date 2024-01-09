import { navLinks } from '../../data/navbar_data';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
function Navbar(){
    return (
        <div className="flex items-stretch justify-center py-4 app-box-shadow">
            <p className="text-3xl md:text-2xl tracking-wide ff-monster font-semibold mx-4 text-word">Learnyst</p>
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
            <div className='bg-[var(--color-fg)] text-[var(--color-bg)] rounded-md flex items-center justify-center mx-4'>
                <ThemeSwitcher />
            </div>
        </div>
    );
}

export default Navbar;