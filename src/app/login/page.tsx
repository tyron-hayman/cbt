"use client";
import SiteHeader from "../components/header";
import SiteFooter from "../components/footer";
import face from "./assets/face.jpg";
import "../styles/dashboard/login.css";
import Link from "next/link";
import { motion, animate } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function LoginPage() {
  return (
    <>
      <div id="loginPageWrapper">
        <h1>LossAlamos <span className="rounded-full">cbt</span></h1>
      </div>
    </>
  );
}