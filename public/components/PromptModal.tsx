import React, { useState } from "react";
import InsertIcon from "@/assets/insert-icon.svg";
import RegenerateIcon from "@/assets/regenerate-icon.svg";
import GenerateIcon from "@/assets/generate-icon.svg";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");
  const [regenerateInput, setRegenerateInput] = useState<string>("");

  const DUMMY_RESPONSE = `Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.`;

  function closeModal() {
    setIsOpen(false);
  }

  const handleOverlayClick = () => {
    isOpen ? closeModal() : null;
  };

  const handleInsert = () => {
    closeModal();

    const textarea = document.querySelector(
      ".msg-form__contenteditable"
    ) as HTMLTextAreaElement;

    const textarea_msg = document.querySelector(".msg-form__placeholder");
    textarea_msg?.setAttribute("style", "display: none");

    textarea.ariaLabel = "";
    textarea.children[0].innerHTML = DUMMY_RESPONSE;
    setIsGenerated(false);
    setUserInput("");
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center align-center inset-0 bg-black/25"
          onClick={handleOverlayClick}
        >
          {!isGenerated ? (
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center justify-center self-center bg-gray-50 p-5 w-[45rem] h-fit rounded-lg z-[9999]"
            >
              <input
                type="text"
                name="prompt"
                placeholder="Your prompt"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="w-full focus:ring-slate-300 focus:border-slate-300 border border-slate-300 placeholder:text-gray-400 mb-6 text-gray-500 rounded-lg font-medium text-xl p-4"
              />
              <button
                onClick={() => {
                  setIsGenerated(true);
                }}
                disabled={!userInput}
                className={`flex items-center justify-around self-end bg-blue-500 text-white p-3 w-40 rounded-lg ${
                  userInput.length > 0
                    ? "cursor-pointer"
                    : "cursor-not-allowed pointer-events-none"
                }  `}
              >
                <p className="text-xl font-medium flex items-center gap-2">
                  <span>
                    <img src={GenerateIcon} alt="generate-icon" />
                  </span>
                  Generate
                </p>
              </button>
            </div>
          ) : (
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center justify-center self-center bg-gray-50 p-5 w-[45rem] h-fit rounded-lg gap-5"
            >
              {/* chats */}
              <div className="flex flex-col gap-6 text-xl">
                {/* user inputed value */}
                <p className="p-3 text-slate-500 bg-slate-200 rounded-lg self-end w-[70%]">
                  {userInput}
                </p>
                {/* reply from chatgpt */}
                <p className="p-3 text-slate-500 bg-blue-200 rounded-lg self-start w-[70%]">
                  {DUMMY_RESPONSE}
                </p>
              </div>
              <div className="flex items-center gap-5 self-end">
                <button
                  onClick={() => handleInsert()}
                  className="flex items-center justify-around self-end bg-white text-gray-500 p-3 w-32 rounded-lg border border-gray-500 cursor-pointer"
                >
                  <p className="text-xl font-medium flex items-center gap-2">
                    <span>
                      <img src={InsertIcon} alt="insert-icon" />
                    </span>
                    Insert
                  </p>
                </button>
                <button className="flex items-center justify-around self-end bg-blue-500 text-white p-3 w-40 rounded-lg cursor-pointer">
                  <p className="text-xl font-medium flex items-center gap-2">
                    <span>
                      <img src={RegenerateIcon} alt="regenerate-icon" />
                    </span>
                    Regenerate
                  </p>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Modal;
