import React, { useState } from "react";
import { auth } from "../config/firebase";
import { useDispatch } from 'react-redux';
import {
    signOut
} from "firebase/auth";
import { AuthActions } from "../redux/constants/AuthConstants";

function useLogOut(){
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const doLogout = async () => {
        try {
            const res = await signOut(auth);
            const resp = await res.json();
            dispatch({ type : AuthActions.SET_LOGOUT });
            setLoading(false);
        }catch(err){
            setError('Sign-Out Failed');
            setLoading(false);
        }
    };

    return { loading, error, doLogout };
}

export default useLogOut;