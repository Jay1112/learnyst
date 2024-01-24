import React, { useState } from "react";
import { auth } from "../config/firebase";
import { useDispatch } from 'react-redux';
import {
    signOut
} from "firebase/auth";
import { AuthActions } from "../redux/constants/AuthConstants";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

function useLogOut(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const doLogout = async () => {
        try {
            await signOut(auth);
            dispatch({ type : AuthActions.SET_LOGOUT });
            navigate('/');
            setLoading(false);
            toast.success('Successfully Logged Out!');
        }catch(err){
            setError('Sign-Out Failed');
            setLoading(false);
            toast.error(err.message);
        }
    };

    return { loading, error, doLogout };
}

export default useLogOut;