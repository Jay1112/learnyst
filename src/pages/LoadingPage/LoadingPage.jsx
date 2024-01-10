import Spinner from "../../components/ui/Spinner/Spinner";

function LoadingPage(){
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Spinner classString="w-12 h-12 text-gray-200"/>
        </div>
    );
}

export default LoadingPage;