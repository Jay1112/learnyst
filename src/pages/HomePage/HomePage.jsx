import useLogOut from "../../hooks/useLogout";

function HomePage(){
    const { doLogout } = useLogOut();

    return (
        <>
            Home Page
            <button onClick={doLogout}>Sign out</button>
        </>
    );
}

export default HomePage;