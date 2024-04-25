"use client";
import "../../styles/dashboard/dashboard.css";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SettingsPage() {
  const { user }: any = useAuthContext();

 
  return (
    <>
      <h1>Settings</h1>
    </>
  );
}