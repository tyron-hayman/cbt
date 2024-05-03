import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faBowlFood,
  faLightbulb,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import PromptArea from "./elements/promptArea";
import runChat from "../config/gemini";
import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import face from "../assets/face.jpg";
import Image from "next/image";
import prisma_client from "../clients/prismic";

export default function Ai({ currentuser }: any) {
  const [prompt, setPrompt] = useState<string>("");
  const [gemResponse, setGemResponse] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageData, setPageData] = useState<any | null>(null);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const prismicDoc = await prisma_client.getSingle("ai_chat");
    setPageData(prismicDoc.data);
    console.log(prismicDoc);
  };

  const askGemini = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const date = new Date();
    let chatwindow = document.querySelector(".ai-response-box-wrap");

    gemResponse.push({
      gem: prompt,
      class: "user",
      msg_date: date,
      username: currentuser.displayName,
    });

    try {
      const gem_date = new Date();
      const response = await runChat(prompt);
      gemResponse.push({
        gem: response,
        class: "gem",
        msg_date: gem_date,
        username: "Gemini",
      });
      setGemResponse(gemResponse);
      setLoading(false);
      setPrompt("");
      chatwindow?.scroll({
        top: chatwindow?.scrollHeight,
        left: 0,
      });
    } catch (error) {
      alert(
        "Oops, this is embarrassing. Please try again in a few minutes...."
      );
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-content-ai">
      <div className="ai-response-wrap">
        <div className="ai-response-box-wrap">
          <div className="ai-response-box">
            {pageData ? (
              <div
                className={`ai-repsonse-box-intro ${
                  gemResponse.length > 0 ? "hide" : null
                }`}
              >
                <h1 className="mb-5 text-5xl font-extrabold leading-none tracking-tight text-gray-900">
                  {pageData.main_heading}
                </h1>
                <h2 className="text-1xl font-light text-gray-500 dark:text-gray-400">
                  {pageData.subheading}
                </h2>
                <div className="ai-limits-wrap rounded-xl mt-5">
                  <h3 className="text-1xl font-light text-white">
                    We apply some limits to maintain a great experience for you
                  </h3>
                </div>
              </div>
            ) : null}
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
                    <GemResponse
                      key={`gem${i}`}
                      gemClass={gem.class}
                      date={gem.msg_date}
                      display={gem.username}
                    >
                      <p
                        className="text-md font-normal py-2 gemResponseBox rounded-xl"
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
              autoComplete="off"
            />
          </form>
          {pageData ? (
            <p className="ai-disclamer">{pageData.disclaimer}</p>
          ) : null}
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

const GemResponse = ({
  children,
  gemClass = "",
  user = "Gemini",
  date,
  display = "Gemini",
}: any) => {
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
      className={`gemResponseWrap rounded-2xl ${gemClass} flex items-start gap-2.5`}
      initial={initial}
      animate="visible"
      variants={variants}
    >
      <Image
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        src={face.src}
        width={50}
        height={50}
        alt="User Profile Image"
      />
      <div className="flex flex-col w-full leading-1.5">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold">{display}</span>
          <span className="text-sm font-normal">{date.toLocaleString()}</span>
        </div>
        {children}
      </div>
    </motion.div>
  );
};
