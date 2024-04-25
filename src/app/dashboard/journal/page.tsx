"use client";
import "../../styles/dashboard/dashboard.css";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function JournalPage() {
  const { user }: any = useAuthContext();


  return (
    <>
      <h1>Journal</h1>
    </>
  );
}