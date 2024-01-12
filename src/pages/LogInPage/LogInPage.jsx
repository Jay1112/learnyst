import LogIn from "../../components/LogIn/LogI";
import NavWrapper from "../../components/NavWrapper/NavWrapper";

function LogInPage(){
    const productAreaHeight = "h-[calc(100vh-70px)]";
    return (
        <NavWrapper>
            <div className={`w-full ${productAreaHeight} flex items-center justify-center`}>
                <LogIn/>
            </div>
        </NavWrapper>
    );
}

export default LogInPage;