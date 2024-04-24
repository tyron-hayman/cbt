import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../clients/firebase";
import { ValidateEmail } from "../utils/utils";
import { useState } from "react";
import GlobalLoader from "./loader";

export default function RegistrationForm() {
  const [regEmail, setRegEmail] = useState<string>("");
  const [regPass, setRegPass] = useState<string>("");
  const [regPassConf, setRegPassConf] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [registered, setRegistered] = useState<boolean>(false);

  const setCheckEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value;
    let valid = ValidateEmail(value);
    if (valid) {
      setRegEmail(value);
      event.currentTarget.classList.remove("error");
      event.currentTarget.classList.add("valid");
    } else {
      event.currentTarget.classList.add("error");
    }
  };

  const checkPassMatch = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value;
    if (value == regPass) {
      setRegPassConf(value);
      console.log("match");
      event.currentTarget.classList.remove("error");
      event.currentTarget.classList.add("valid");
    } else {
      event.currentTarget.classList.add("error");
    }
  };

  const handleRegSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    let valid = ValidateEmail(regEmail);
    if (regEmail != "" && regPassConf != "" && valid) {
      setLoader(true);
      try {
        const signup = await createUserWithEmailAndPassword(
          auth,
          regEmail,
          regPassConf
        );
        if (signup) {
          setRegistered(true);
          setLoader(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("please check fields and try again");
      setLoader(false);
      setRegistered(false);
    }
    return false;
  };

  return (
    <>
      {!loader ? (
        <div className="registration-form-wrap">
          {!registered ? (
            <form className="registration-form">
              <div className="formInputs">
                <input
                  type="email"
                  name="emailRegInput"
                  placeholder="Email *"
                  className="rounded-lg border-gray-100 border-2"
                  onChange={(event) => setCheckEmail(event)}
                />
              </div>
              <div className="formInputs">
                <input
                  type="password"
                  name="emailRegInput"
                  placeholder="Password *"
                  className="rounded-lg border-gray-100 border-2"
                  onChange={(event) => setRegPass(event.currentTarget.value)}
                />
              </div>
              <div className="formInputs">
                <input
                  type="passwordConf"
                  name="emailRegInput"
                  placeholder="Password Confirmation *"
                  className="rounded-lg border-gray-100 border-2"
                  onChange={(event) => checkPassMatch(event)}
                />
              </div>
              <div className="formInputs">
                <button
                  className="rounded-full"
                  onClick={(event) => handleRegSubmit(event)}
                >
                  Register
                </button>
              </div>
            </form>
          ) : (
            <p>
              Registration successful, how exciting! Let's begin our journey
              together
            </p>
          )}
        </div>
      ) : (
        <GlobalLoader />
      )}
    </>
  );
}
