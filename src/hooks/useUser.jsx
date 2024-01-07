import { useState } from "react";
import { db } from "../config/firebase";
import { doc, collection, addDoc, getDocs, deleteDoc, where, query } from "firebase/firestore"; 
import { useDispatch } from "react-redux";
import { AuthActions } from "../redux/constants/AuthConstants";

function useUser(){
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const [createLoading,setCreateLoading] = useState(false);
    const [createError,setCreateError] = useState(null);

    const createUser = async (userData) => {
        setCreateLoading(true);
        try {
            const docRef = await addDoc(collection(db, "users"),userData);
            setCreateLoading(false);
            dispatch( { type : AuthActions.SET_USER_DATA, payload : userData } );
        }catch(err){
            setCreateLoading(false);
            setCreateError({ message : err.message });
        }
    }

    const getUser = async (email) => {
        setLoading(true);
        try{
            const q = query(collection(db, "users"), where("email", "==", email));
            const data = await getDocs(q);
            let userData = null ;
            data.docs.forEach((doc) => {
                userData  = doc.data();
            });
            dispatch({ type : AuthActions.SET_USER_DATA, payload : userData });
            dispatch({ type : AuthActions.SET_LOGIN_SUCCESS });
            setLoading(false);
        }catch(error){
            setLoading(false);
            setError({ message : error.message });
        }
    }

    return { loading, error, createLoading, createError, createUser, getUser };
}

export default useUser;