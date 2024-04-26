import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import PromptArea from "./elements/promptArea";
import runChat from "../config/gemini";
import { useState } from "react";
import { motion, animate } from "framer-motion";
import face from "../assets/face.jpg";

export default function Ai() {
  const [prompt, setPrompt] = useState<string>("");
  const [gemResponse, setGemResponse] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const askGemini = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    gemResponse.push({ gem: prompt, class: "user" });

    try {
      const response = await runChat(prompt);
      gemResponse.push({ gem: response, class: "gem" });
      setGemResponse(gemResponse);
      setLoading(false);
      setPrompt("");
    } catch (error) {
      alert(
        "Oops, this is embarrassing. Please try again in a few minutes...."
      );
      setLoading(false);
    } finally {
      document
        .getElementsByClassName("ai-response-box-wrap")[0]
        .scrollTo(
          0,
          document.getElementsByClassName("ai-response-box-wrap")[0]
            .scrollHeight
        );
    }
  };

  return (
    <div className="dashboard-content-ai">
      <div className="ai-response-wrap">
        <div className="ai-response-box-wrap">
          <div className="ai-response-box">
            <div className="ai-repsonse-box-intro">
              <h1 className="gradient-text">Hello</h1>
              <h2>Mental health is so important, how can I help you today?</h2>
            </div>
            {gemResponse
              ? gemResponse.map((gem, i) => {
                  console.log(gem);
                  let gemArr: any[] = gem.gem.split("**");
                  let boldArr: any[] = [];
                  for (let gemI = 0; gemI < gemArr.length; gemI++) {
                    if (gemI === 0 || gemI % 2 !== 1) {
                      boldArr.push(gemArr[gemI]);
                    } else {
                      boldArr.push("<strong>" + gemArr[gemI] + "</strong>");
                    }
                  }
                  let gemBold = boldArr.join("").toString();
                  let gemFormated = gemBold.split("*").join("");
                  return (
                    <GemResponse key={`gem${i}`} gemClass={gem.class}>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: gemFormated.toString(),
                        }}
                      ></p>
                    </GemResponse>
                  );
                })
              : null}
            {loading ? <GemLoader /> : null}
          </div>
        </div>
        <div className="ai-prompt-wrap bg-gradient-to-t from-white from-80%">
          <form onSubmit={(event) => askGemini(event)}>
            <input
              className="ai_prompt_textarea rounded-full"
              name="ai_prompt_textarea"
              placeholder="Ask any question....."
              disabled={loading}
              onChange={(event) => setPrompt(event.currentTarget.value)}
              value={prompt}
            />
          </form>
          <p className="ai-disclamer">
            We use Google's Gemini as our A.I. companion. Gemini may display
            inaccurate info, including about people, so double-check its
            responses. Do not use this tool for harmful or dangerous acts.
          </p>
        </div>
      </div>
    </div>
  );
}

const GemLoader = () => {
  const initial = {
    opacity: 0,
    y: 200,
  };
  const variants = {
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    }),
  };
  return (
    <motion.div
      className={`gemLoader rounded-2xl`}
      initial={initial}
      animate="visible"
      variants={variants}
    >
      <FontAwesomeIcon icon={faEllipsis} />
    </motion.div>
  );
};

const GemResponse = ({ children, gemClass = "" }: any) => {
  let proImageStyle: any;
  const initial = {
    opacity: 0,
    y: 200,
  };
  const variants = {
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    }),
  };

  if (gemClass == "user") {
    proImageStyle = { background: `url(${face.src}) center center no-repeat` };
  } else {
    proImageStyle = { background: `url(${face.src}) center center no-repeat` };
  }

  return (
    <motion.div
      className={`gemResponseWrap rounded-2xl ${gemClass}`}
      initial={initial}
      animate="visible"
      variants={variants}
    >
      <div
        className={`gemProfileImage ${gemClass}_image rounded-full`}
        style={proImageStyle}
      ></div>
      {children}
    </motion.div>
  );
};
