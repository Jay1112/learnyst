import LogIn from "../../components/LogIn/LogIn";
import NavWrapper from "../../components/NavWrapper/NavWrapper";

function LogInPage(){
    const productAreaHeight = "h-[calc(100vh-70px)]";
    // const styleObj = {
    //     backgroundImage: `url(${ DayBg })`,
    //     backgroundSize : '100% 100%', 
    //     backgroundRepeat : 'no-repeat'
    // }
    return (
        <NavWrapper>
            <div className={`w-full ${productAreaHeight} flex items-center justify-center`}>
                <LogIn/>
            </div>
        </NavWrapper>
    );
}

export default LogInPage;