import useLogOut from "../../hooks/useLogout";
import NavWrapper from "../../components/NavWrapper/NavWrapper";
import { AppConstatnts } from "../../constants/constants";

function HomePage(){
    const { doLogout } = useLogOut();

    return (
        <NavWrapper>
            <div className={`${AppConstatnts.NAVBAR_HEIGH}`}>

            Home Page
            <button onClick={doLogout}>Sign out</button>
            </div>
        </NavWrapper>
    );
}

export default HomePage;