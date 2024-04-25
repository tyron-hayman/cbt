import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import PromptArea from "./elements/promptArea";
import runChat from "../config/gemini";
import { useState } from "react";

export default function Ai() {
  const [prompt, setPrompt] = useState<string>("");
  const [gemResponse, setGemResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const askGemini = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    console.log(prompt);
    try {
    const response = await runChat(prompt);
    setGemResponse(response.text());
    setLoading(false);
    console.log(response.text());
    } catch (error) {
      setGemResponse("Something went wront, please try again in a few moments.");
      setLoading(false);
    }
  }

  return (
    <div className="dashboard-content-ai">
      <div className="ai-response-wrap">
        <h1 className="gradient-text">Hello</h1>
        <h2>How can I help you today?</h2>
        <div className="ai-response-box">
          {gemResponse ? 
            gemResponse : null
          } 
        </div>
        <div className="ai-prompt-wrap">
          <form onSubmit={(event) => askGemini(event)}>
          <input
              className="ai_prompt_textarea rounded-full"
              name="ai_prompt_textarea"
              placeholder="Ask any question....."
              disabled={loading}
              onChange={(event) => setPrompt(event.currentTarget.value)}
          />
          </form>
          <p className="ai-disclamer">Gemini may display inaccurate info, including about people, so double-check its responses.</p>
        </div>
      </div>
    </div>
  );
}
