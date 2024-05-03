"use client";
import "../../styles/dashboard/dashboard.css";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import face from "../../assets/face.jpg";

export default function JournalPage() {
  const { user }: any = useAuthContext();

  return (
    <div className="dashboard-content-journal">
      <h1 className="text-8xl font-extrabold leading-none tracking-tight text-gray-900">
        Journal
      </h1>
      <h2 className="text-1xl font-light text-gray-500 dark:text-gray-400">
        Document your progress, note your tiggers or keep track of how you feel. This is your space, your journal.
      </h2>
      <div className="journal-timeline-wrap">
      </div>
    </div>
  );
}
