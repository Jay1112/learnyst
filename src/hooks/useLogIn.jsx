import { useState } from "react";
import { auth, googleProvider, db } from "../config/firebase";
import useUser from "./useUser";
import {
    query,
    getDocs,
    collection,
    where,
} from "firebase/firestore";
import {
    signInWithPopup,
} from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

function useLogIn(){
    const [isLoading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const navigate = useNavigate();
    const { createUser } = useUser();

    const signInWithGoogle = async () => {
        setLoading(true);
        try {
            const res = await signInWithPopup(auth, googleProvider);
            const user = res.user;
            const q = query(collection(db, "users"), where("uid", "==", user.uid));
            const data = await getDocs(q);
            if (data.docs.length === 0) {
                const userData = {
                    uid: user.uid,
                    name: user.displayName,
                    authProvider: "google",
                    email: user.email,
                    profileImage: user.photoURL
                };
                createUser(userData);
            }
            navigate('/');
            setLoading(false);
            toast.success('Successfully Logged In!');
        } catch (err) {
            setError({ message : err.message });
            setLoading(false);
            toast.error(err.message);
        }
    };

    return { isLoading, error, signInWithGoogle }
}

export default useLogIn;