import { signOut } from "firebase/auth";

const ValidateEmail = (email: any) => {
  const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};

const DoSignOut = async (event : React.MouseEvent<HTMLAnchorElement, MouseEvent>, auth : any) => {
    event.preventDefault();
    try {
        const isSignedOut = await signOut(auth)
    } catch (error ) {
        console.log(error);
    }
}

export { ValidateEmail, DoSignOut };
