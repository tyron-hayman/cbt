import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function GlobalLoader({ fixed = false } : any) {
  let positionType : string = "";
  if ( fixed ) {
    positionType = "fixed";
  }
  return (
    <div className={`global-loader-wrapper ${fixed}`}>
      <div className="global-loader rounded-full"></div>
    </div>
  );
}