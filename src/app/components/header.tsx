import Image from "next/image";
import Link from "next/link";
import { auth } from "../clients/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { DoSignOut } from "../utils/utils";

export default function SiteHeader() {
  const [currUser, setCurrUser] = useState<any>([])

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrUser(user)
    }
    console.log(user);
  });

  return (
    <div id="global-header">
      <div className="global-logo">
        <h3 className="rounded-lg">LossAlamos</h3>
      </div>
      <div className="main-nav">
        <ul>
          <li>
            {currUser ? (
            <Link className="loginBtn" href="/about">Login</Link>
            ) : (
              <Link className="loginBtn" href="#" onClick={(event) => DoSignOut(event, auth)}>Sign Out</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
