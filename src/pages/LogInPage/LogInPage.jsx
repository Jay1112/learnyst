import LogIn from "../../components/LogIn/LogIn";
import NavWrapper from "../../components/NavWrapper/NavWrapper";
import { AppConstatnts } from "../../constants/constants";

function LogInPage(){
    return (
        <NavWrapper>
            <div className={`w-full h-[calc(100vh-70px)] flex items-center justify-center`}>
                <LogIn/>
            </div>
        </NavWrapper>
    );
}

export default LogInPage;