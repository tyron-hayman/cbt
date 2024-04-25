"use client";
import { useFormStatus } from "react-dom";

const PromptArea = ({ title = "Ask a question here.....", change }: any) => {
  const { pending } = useFormStatus();
  return (
    <>
    <input
        className="ai_prompt_textarea rounded-full"
        name="ai_prompt_textarea"
        placeholder={title}
        aria-disabled={pending}
        onChange={(event) => change(event.currentTarget.value)}
    />
    </>
  );
};

export default PromptArea;