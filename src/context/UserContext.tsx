import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase.config";
const UserContext = createContext<any>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Object | null>(null); // will contain both auth + extra data
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Fetch user data from Firestore
        let userData:any = null;

        const userDocRef = doc(db, "users", firebaseUser.uid);
        const adminDocRef = doc(db, "admins", firebaseUser.uid);

        const userSnap = await getDoc(userDocRef);
        const adminSnap = await getDoc(adminDocRef);
        // console.log(userSnap)
        // console.log(adminSnap)
        // console.log( userDocRef)
        // console.log( adminDocRef)
        // console.log( userSnap.exists())
        // console.log( adminSnap.exists())
        if (userSnap.exists()) {
          userData = userSnap.data();
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            ...userData,
            role:"user"
          });
        } else if (adminSnap.exists()) {
          userData = adminSnap.data();
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            ...userData,
            role:"admin"
          });
        }else{
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            role:"user"
          });
        }

        
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
