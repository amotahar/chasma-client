import { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import fireBaseInitFun from "../../fireBase/fireBaseInit";

fireBaseInitFun();

const useFireBase = () => { const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const singInGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        singInGoogle,
        logOut
    }
}

export default useFireBase;




// import { useState } from "react";
// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { useEffect } from "react";
// import fireBaseInitFun from "../../fireBase/fireBaseInit";

// fireBaseInitFun();

// const useFireBase = () => {
// const [loading,setLoading]=useState(true);
//   const [user, setUser] = useState({});
//   const auth = getAuth();
//   const googleProvider = new GoogleAuthProvider();

//   // Google SingIn

//   const singInGoogle = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//     // .then(result=>{
//     //     console.log(result);
//     // })
//   };

//   // User Profile



//   const logOut = () => {
//     signOut(auth).then(() => {});
//     window.location.reload();

//   };

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       }
//     });
//   }, [auth]);


//   const saveUser = (email, dispalyName)=>{

//   }

//   return {
//     user,
//     singInGoogle,
//     logOut,
//     loading,
//   };
// };

// export default useFireBase;
