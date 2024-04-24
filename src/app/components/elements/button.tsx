"use client";
import { useFormStatus } from "react-dom";

const ButtonMain = ({ title = "button" }: any) => {
  const { pending } = useFormStatus();
  return (
    <button className="rounded-full" aria-disabled={pending}>
      {pending ? "Working on it...." : title}
    </button>
  );
};

export default ButtonMain;
