import Link from "next/link";
import { auth } from "../clients/firebase";
import { useState } from "react";
import { DoSignOut } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGears,
  faCommentDots,
  faFeather,
  faHouse,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import brain from "../assets/brain.jpg";

const sbLinks = [
  { title: "Dashboard", url: "", alt: "Dashboard", icon: faHouse },
  { title: "Ask AI", url: "ai", alt: "AI tool", icon: faCommentDots },
  { title: "Journal", url: "journal", alt: "Journal", icon: faFeather },
];

const sbFooterLinks = [{ title: "Settings", url: "settings", icon: faGears }];

export default function Sidebar() {
  const [sideBarClass, setSidebarClass] = useState<string>("");
  const logoStyle = { background: `url(${brain.src}) center center no-repeat` };

  const menuToggle = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (sideBarClass == "") {
      setSidebarClass("close");
    } else {
      setSidebarClass("");
    }
  };

  return (
    <div id="dashboard-sidebar" className={`transition-all ${sideBarClass}`}>
      <div className="sb-header">
        <Link
          href="#"
          className="sb-menu-toggle"
          onClick={(event) => menuToggle(event)}
        >
          <FontAwesomeIcon icon={faBars} />
        </Link>
      </div>
      <div className="sb-nav">
        <ul>
          {sbLinks.map((nav_item, i) => {
            return (
              <li key={`navitem${i}`} className="nav-items">
                <Link href={`/dashboard/${nav_item.url}`}>
                  <FontAwesomeIcon icon={nav_item.icon} />
                  <span>{nav_item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sb-nav-footer">
        <ul>
          {sbFooterLinks.map((nav_item_footer, i) => {
            return (
              <li key={`navitem${i}`} className="nav-items">
                <Link href={`/dashboard/${nav_item_footer.url}`}>
                  <FontAwesomeIcon icon={nav_item_footer.icon} />
                  <span>{nav_item_footer.title}</span>
                </Link>
              </li>
            );
          })}
          <li className="nav-items">
            <Link href="#" onClick={(event) => DoSignOut(event, auth)}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <span>Sign Out</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
