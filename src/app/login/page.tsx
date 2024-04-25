"use client";
import "../styles/dashboard/login.css";
import { FirebaseLogin } from "../utils/utils";
import ButtonMain from "../components/elements/button";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { user }: any = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user != null) router.push("/dashboard");
  }, [user]);

  return (
    <>
      <div id="loginPageWrapper">
        <div className="loginPageLeft">
          <div className="loginWrap">
            <h1>LossAlamos</h1>
            <div className="loginForm">
              <form action={FirebaseLogin}>
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
                  <ButtonMain title="Login" />
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
