import Button from "../ui/Button/Button";
import GoogleLogo from '../../assets/google.png';
import useLogIn from "../../hooks/useLogIn";

function LogIn(){
    const { isLoading, signInWithGoogle } = useLogIn();

    return (
        <div className="w-full md:w-1/4 flex items-center justify-center px-4 md:px-0">
           <div className="w-full">
                <Button 
                    disabled={isLoading}
                    buttonCallBack={signInWithGoogle}
                    classStyle={'w-full flex items-center justify-center bg-[var(--color-fg)] p-4 rounded-full hover:bg-[var(--color-bg)] text-[var(--color-bg)] hover:text-[var(--color-fg)] border-2 border-transparent hover:border-rose-500 cursor-pointer'}
                >
                    <img  src={GoogleLogo} width={30} height={30} alt="google login" className="mx-2" />
                    <p className="flex-1 text-2xl ff-poppins font-semibold mx-2">Sign in With Google</p>
                </Button>
           </div>
        </div>
    );
}

export default LogIn;