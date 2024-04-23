import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function GlobalLoader() {
  return (
    <div className={`global-loader-wrapper`}>
      <div className="global-loader rounded-full"></div>
    </div>
  );
}