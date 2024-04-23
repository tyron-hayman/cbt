import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface FooterProps {
  fixed?: boolean;
}

export default function SiteFooter({ fixed = true }: FooterProps) {
  const footerDate = new Date();
  const footerDateYear = footerDate.getFullYear();
  return (
    <div id={`global-footer`} className={`${fixed ? "fixed" : ""}`}>
      <p>
        {footerDateYear} | Built with{" "}
        <FontAwesomeIcon icon={faHeart} width={10} height={10} /> by
        tyronhayman.me
      </p>
    </div>
  );
}
