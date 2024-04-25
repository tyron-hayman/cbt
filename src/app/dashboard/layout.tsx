"use client"
import "../styles/dashboard/dashboard.css";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "../components/dashSidebar";
import { useSearchParams } from 'next/navigation';
import Ai from "../components/ai";

export default function DashboardPage({ children } : any) {
  const { user }: any = useAuthContext();
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);
    return (
      <>
        <div id="loginPageWrapper">
          <Sidebar/>
          <div className="dashboard-content-wrap">
            {children}
          </div>
        </div>
      </>
    );
  
}
