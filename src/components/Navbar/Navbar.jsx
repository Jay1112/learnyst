import DesktopNavbar from './DesktopNavbar';
import MobileSideBar from './MobileSideBar';
function Navbar(){
    return (
        <>
            <div className='hidden md:block w-full'>
                <DesktopNavbar />
            </div>
            <div className='block md:hidden w-full'>
                <MobileSideBar />
            </div>
        </>
    );
}

export default Navbar;