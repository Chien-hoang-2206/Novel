import React, { useState } from "react";
import "./globals.css";
import "./Homemodule.css";
import "./chatGpt.css";
import axios from "axios";
import TypingAnimation from "../../../components/TypingAnimation/TypingAnimation";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
// import styles from '@/styles/Home.module.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

function ChatGpt() {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const ChatLogHisSession = sessionStorage.getItem('chatLogHistory');
  // console.log(ChatLogHisSession);
  // setChatLog(ChatLogHisSession);
  const [isLoading, setIsLoading] = useState(false);
  const WelcomMes = "Chào bạn, tôi là trợ lý ảo, tôi có thể giúp gì cho bạn ?";

  const handleSubmit = (event) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);
    setInputValue("");
  };

  const sendMessage = (message) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const API_KEY = "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"; // Replace with your OpenAI API key

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    const data = {
      model: "gpt-3.5-turbo-0301",
      messages: [{ role: "user", content: message }],
    };

    setIsLoading(true);

    axios
      .post(url, data, { headers: headers })
      .then((response) => {
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: response.data.choices[0].message.content },
        ]);
        sessionStorage.setItem('chatLogHistory', chatLog);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  console.log(chatLog);
  return (
    <div className="container-ChatGPT fade-in ">
      <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-left pading-left-1 font-bold ">
        <h4 style={{ paddingLeft: "20px" }}> ChatBox</h4>
      </h1>
      <div className="container-chat">
        <div className="message ">
          <div className="flex flex-col space-y-1">
            <SimpleBar autoHide={true} className="message-box-chat">
              <div
                className={"message-bot"}
                style={{paddingLeft:"10px"}}
              >
                  <div
                    className="message-i"
                    style={{background: "rgba(255, 199, 0, 0.25)"}}
                  >
                     {WelcomMes}
                </div>
              </div>

              {chatLog &&  chatLog.map((message, index) => (
                <div
                  key={index}
                  className={` ${
                    message.type === "user" ? "message-user" : "message-bot"
                  }`}
                >
                  <div className="rounded-lg p-2 text-gray max-w-sm">
                    <div
                      className="message-i"
                      style={{
                        background:
                          message.type === "user"
                            ? " rgba(255, 137, 51, 0.25)"
                            : "rgba(255, 199, 0, 0.25)",
                      }}
                    >
                      {message.message}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div key={chatLog.length} className="flex justify-start">
                  <div className="bg-gray-800 rounded-lg p-4 text-black max-w-sm">
                    <TypingAnimation />
                  </div>
                </div>
              )}
            </SimpleBar>
          </div>

          {/* input
           */}
        </div>
        <form className="box-typing" onSubmit={handleSubmit}>
          <div class="input-container">
            <textarea
              type="text"
              className="input-field"
              style={{ width: "76%", border: "none", outline: "none" }}
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="send-btn   text-black font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300"
            // className=" bg-purple-500 rounded-lg px-4 py-0 text-black font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300"
            style={{ background: "transparent", border: "none" }}
          >
            <i
              class="fa-sharp fa-solid fa-paper-plane"
              style={{ color: "#3972d5" }}
            ></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatGpt;
