import React from "react";
import Button from "../ui/Button/Button";
import { useSelector } from "react-redux";

function ProfileMenu(){
    const state = useSelector((state)=>state);

    return (
        <div className="flex items-center justify-center">
            <Button>
                { state.auth.user && <img className="rounded-full" src={state.auth.user.profileImage} width={40} height={40} alt="Profile Icon" />}
            </Button>
        </div>
    );
}

export default ProfileMenu;