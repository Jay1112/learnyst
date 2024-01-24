import useLogOut from "../../hooks/useLogout";
import Button from "../ui/Button/Button";

function Logout({
    title,
    titleStyle,
    icon,
    iconStyle,
    classStyle,
}){
    const { doLogout, loading } = useLogOut();

    return (
        <Button classStyle={classStyle} buttonCallBack={doLogout} disabled={loading}>
            { icon && <p className={iconStyle}>{icon}</p>}
            <p className={ icon ? `flex-1 ${titleStyle}`: `flex-auto  ${titleStyle}` }>{ title }</p>
        </Button>
    );
}

export default Logout;