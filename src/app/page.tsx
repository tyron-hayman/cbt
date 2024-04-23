"use client";
import SiteHeader from "./components/header";
import SiteFooter from "./components/footer";
import RegistrationForm from "./components/registerForm";
import face from "./assets/face.jpg";
import "./styles/landing/landing.css";
import Link from "next/link";
import { motion, animate } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  content: string;
}

const prodList: any[] = [
  {
    name: "AI",
    content:
      "AI assistant to help you understand the thoughts and feelings you are experiencing."
  },
  {
    name: "Diary",
    content:
      "A diary to that you may use to document and track your moods and progress."
  },
];

export default function Home() {
  const [regVis, setRegVis] = useState<boolean>(false);

  const initialContent = {
    opacity : 0,
    y : 100,
  };
  const contentVariants = {
    visible: () => ({
      opacity: 1,
      y : 0,
      z : 0,
      transition: { delay: 0.35, duration : 0.5, ease: "easeInOut" },
    }),
    not_visible: () => ({
      opacity: 0,
      y : 100,
      z : 10,
      transition: { duration : 0.35, ease: "easeInOut" },
    }),
  };

  const landingBG = {
    background: `url(${face.src}) center center no-repeat`,
  };

  const handleClickStarted = (event : React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setRegVis(true);
    return false;
  }

  return (
    <>
      <SiteHeader />
      <div id="landingWrapper">
        <div className="landingContentLeft">
          <div className="landingContent">
            <motion.div style={{ zIndex : 2, position : "relative" }} initial={{ opacity : 1, x : 0}} animate={!regVis ? "visible" : "not_visible"} variants={contentVariants}>
            <h1>
              <span>You</span> deserve peace.
            </h1>
            <p>...and we can help you track your progress.</p>
            <Link href="" className="mainbtn-lg rounded-full" onClick={(event) => handleClickStarted(event)}>
              Get Started
            </Link>
            </motion.div>
            <motion.div className="registrationWrapLanding" initial={initialContent} animate={regVis ? "visible" : "not_visible"} variants={contentVariants}>
              <h1>Register</h1>
              <RegistrationForm />
            </motion.div>
          </div>
        </div>
        <div style={landingBG} className="landingContentRight">
          <div className="landingProductListWrap">
            {prodList.map((pro, i) => {
              return (
                <ProductItem
                  key={`pro${i}`}
                  name={pro.name}
                  content={pro.content}
                  id={i}
                />
              );
            })}
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}

const ProductItem = ({ id, name, content }: Product) => {
  const initial = {
    opacity : 0,
    x : '-10%',
    y : 200
  };
  const variants = {
    visible: (custom: number) => ({
      opacity: 1,
      x : '-10%',
      y : 0,
      transition: { delay: custom * 0.35, duration : 0.75, ease : "easeOut" },
    }),
  };

  return (
    <motion.div
      className="landingProductItem shadow-md"
      custom={id}
      initial={initial}
      animate="visible"
      variants={variants}
    >
      <div className="landingProductIcon"><FontAwesomeIcon icon={faCheck} width={30} height={30} /></div>
      <p>{content}</p>
    </motion.div>
  );
};
