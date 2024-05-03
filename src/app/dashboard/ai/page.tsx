"use client";
import "../../styles/dashboard/dashboard.css";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Ai from "../../components/ai";

export default function AiPage() {
  const { user }: any = useAuthContext();

 
  return (
    <>
      <Ai currentuser={user} />
    </>
  );
}