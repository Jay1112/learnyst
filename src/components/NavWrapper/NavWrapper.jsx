import Navbar from "../Navbar/Navbar";

function NavWrapper({ children }){
    return (
        <div className="w-screen h-screen overflow-auto relative">
            <Navbar />
            { children }
        </div>
    );
}

export default NavWrapper;