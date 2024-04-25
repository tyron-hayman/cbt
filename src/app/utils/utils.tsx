import { signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../clients/firebase";
import { revalidatePath } from "next/cache";

// Email validation
const ValidateEmail = (email: any) => {
  const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};
//Sign out
const DoSignOut = async (event : React.MouseEvent<HTMLAnchorElement, MouseEvent>, auth : any) => {
    event.preventDefault();
    try {
        const isSignedOut = await signOut(auth)
    } catch (error ) {
        console.log(error);
    }
}
// Login
const FirebaseLogin = async (formData: FormData) => {
  const loginEmail = formData.get("emailLoginInput") as string;
  const loginPass = formData.get("passLoginInput") as string;
  try {
    const signIn = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPass
    );
    console.log(signIn);
    revalidatePath("/login");
  } catch (error) {
    console.log(error);
  }
};

export { ValidateEmail, DoSignOut, FirebaseLogin };
