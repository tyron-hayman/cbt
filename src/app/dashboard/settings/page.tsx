"use client";
import "../../styles/dashboard/dashboard.css";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import GlobalBanner from "@/app/components/globalBanner";
import { updateProfile, updateEmail, updatePassword } from "firebase/auth";

export default function SettingsPage() {
  const { user }: any = useAuthContext();
  const [displayName, setDisplayName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPass, setUserPass] = useState<string>("");
  const [userPassConf, setUserPassConf] = useState<string>("");
  const [bannerVis, setBannerVis] = useState<string>("hidden");
  const [bannerContent, setBannerContent] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {

    if ( user != null ) {
      setDisplayName(user.displayName || "");
      setUserEmail(user.email || "");
      setUserPass(user.password || "");
      setUserPassConf(user.password || "");
    }

  }, [user]);

  const updateUserSettings = async (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setLoader(true);
    const errorMsg : string = "There was an error updating your settings, please try again later...";

    if ( displayName == "" || userEmail == "" ) {
      showBanner("Please fill all required fields");
      setLoader(false);
      return false;
    }

    if ( userPassConf !== userPass ) {
      showBanner("Your password confirmation does not match, please try agian... ");
      setLoader(false);
      return false;
    }

    try {
      const updateUser = await updateProfile(user, {
        displayName: displayName
      });
    } catch {
      showBanner(errorMsg);
      setLoader(false);
      return;
    }

    try {
      const updateUserEmail = await updateEmail(user, userEmail);
    } catch {
      showBanner(errorMsg);
      setLoader(false);
      return;
    }

    if ( userPass != "" && userPassConf != "" ) {
      try {
        const updateUserPass = await updatePassword(user, userPass);
      } catch (error) {
        showBanner("There was an error attempted to update your password");
        setLoader(false);
        console.log(error);
        return;
      }
    }

    setLoader(false);
    return false;
  }

  const showBanner = (content : string) => {
    setBannerContent(content);
    setBannerVis("show");
    setTimeout(() => {
      setBannerVis("hidden");
    }, 4000)
  }

  console.log(user)

  return (
    <>
    <GlobalBanner hidden={bannerVis} content={bannerContent} />
    <div className="dashboard-content-settings">
      <h1 className="mb-10 text-8xl font-extrabold leading-none tracking-tight text-gray-900">
        Settings
      </h1>
      <div className="db-settings-form">
        <form className="db-settingsForm">
          <input type="text" className="fire_uid" name="fire_uid" value={user.uid} readOnly/>
          <div className="grid gap-6 mb-6 md:grid-cols-1">
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Display Name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                placeholder="John"
                value={displayName}
                onChange={(event) => setDisplayName(event.currentTarget.value)}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              placeholder="john.doe@company.com"
              value={userEmail}
              onChange={(event) => setUserEmail(event.currentTarget.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              placeholder="•••••••••"
              required
              value={userPass}
              onChange={(event) => setUserPass(event.currentTarget.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirm_password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              placeholder="•••••••••"
              value={userPassConf}
              onChange={(event) => setUserPassConf(event.currentTarget.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            onClick={(event) => updateUserSettings(event)}
            disabled={loader}
          >
            {loader ? (
              "Updating...."
            ) : (
              "Save"
            )}
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
