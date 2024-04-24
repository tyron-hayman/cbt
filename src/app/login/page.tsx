"use client";
import "../styles/dashboard/login.css";
import { firebaseLogin } from "../actions"
import ButtonMain from "../components/elements/button";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { user } : any = useAuthContext()
    const router = useRouter()


  return (
    <>
      <div id="loginPageWrapper">
        <div className="loginPageLeft">
          <div className="loginWrap">
            {user ? <h1>LossAlamos</h1> : <h1>Welcome back</h1> }
            <div className="loginForm">
              <form action={firebaseLogin}>
                <div className="formInputs">
                  <input
                    type="email"
                    name="emailLoginInput"
                    placeholder="Email *"
                    className="rounded-lg border-gray-100 border-2"
                  />
                </div>
                <div className="formInputs">
                  <input
                    type="password"
                    name="passLoginInput"
                    placeholder="Password *"
                    className="rounded-lg border-gray-100 border-2"
                  />
                </div>
                <div className="formInputs">
                  <ButtonMain title="Login"/>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="loginPageRight"></div>
      </div>
    </>
  );
}
