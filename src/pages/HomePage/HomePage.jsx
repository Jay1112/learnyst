import NavWrapper from "../../components/NavWrapper/NavWrapper";
import DevArea from "../../components/DevArea/DevArea";

function HomePage(){
    return (
        <NavWrapper>
            <div className={`h-[calc(100vh-70px)] flex items-start md:items-center justify-center p-2 overflow-scroll`}>
                <DevArea />
            </div>
        </NavWrapper>
    );
}

export default HomePage;