"use server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./clients/firebase";
import { revalidatePath } from "next/cache";

export const firebaseLogin = async (formData: FormData) => {
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
