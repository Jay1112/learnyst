import useLogOut from "../../hooks/useLogout";
import NavWrapper from "../../components/NavWrapper/NavWrapper";

function HomePage(){
    const { doLogout } = useLogOut();
    const productAreaHeight = "h-[calc(100vh-70px)]";

    return (
        <NavWrapper>
            <div className={`${productAreaHeight}`}>

            Home Page
            <button onClick={doLogout}>Sign out</button>
            </div>
        </NavWrapper>
    );
}

export default HomePage;