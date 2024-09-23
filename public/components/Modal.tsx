import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import AiIcon from "../icon/16.png";
import PromptModal from "./PromptModal";
import "../../style.css";

const Modal = () => {
  console.log("modal rerendered");

  const [showIcon, setShowIcon] = useState<boolean>(false);
  console.log(showIcon, "showicon inital state");

  const [showModal, setShowModal] = useState<boolean>(false);
  console.log(showModal, "showModal inital state");

  console.log("aaya hai");
  const customStyle = {
    position: "absolute",
    bottom: "35rem",
    left: "38rem",
    background: "red",
    zIndex: "999",
    padding: "20px",
  };
  // Button Component
  const InjectedButton: React.FC = () => {
    const handleClick = () => {
      browser.runtime.sendMessage({ action: "manual_activation" });
    };

    return (
      <button
        onClick={handleClick}
        style={{ position: "absolute", top: 0, right: 0 }}
      >
        Activate Extension
      </button>
    );
  };

  useEffect(() => {
    document.addEventListener("click", async (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      console.log(target);
      const textBox = document.querySelector(".msg-form__contenteditable");

      if (
        target.matches(".msg-form__contenteditable") ||
        target.matches(".ai-icon-img")
      ) {
        setShowIcon(true);
        const container = document.createElement("div");
        container.className = "ai-icon";
        container.setAttribute(
          "style",
          "position:absolute; bottom:0; right:6rem; z-index: 10000;"
        );
        const imgElement = document.createElement("img");
        imgElement.className = "ai-icon-img";
        imgElement.src = AiIcon;
        imgElement.alt = "ai-icon";
        imgElement.setAttribute(
          "style",
          "width: 32px; height: 32px; cursor:pointer;"
        );
        imgElement.addEventListener("click", () => {
          setShowModal(true);
          console.log("image is clicked");
        });
        container.appendChild(imgElement);
        textBox?.appendChild(container);
      } else {
        // setIsFocused(false);
        setShowModal(false);
        const container = textBox?.querySelector(".ai-icon");
        container?.remove();
      }
    });
  }, []);

  // if (textarea) {
  //   textarea.setAttribute("tabindex", "0");
  //   textarea.addEventListener("focus", () => {
  //     if (!document.getElementById("injected-button")) {
  //       const wrapper = document.createElement("div");
  //       wrapper.style.position = "relative";
  //       wrapper.id = "injected-button";
  //       textarea.parentElement?.appendChild(wrapper);

  //       const root = createRoot(wrapper);
  //       root.render(<InjectedButton />);
  //     }
  //   });

  //   textarea.addEventListener("blur", () => {
  //     const existingBtn = document.getElementById("injected-button");
  //     if (existingBtn) {
  //       existingBtn.remove();
  //     }
  //   });
  // }
  console.log("THIS IS LOGGING: ", showIcon);
  console.log(showModal);

  // return showIcon ? (
  //   <div className="absolute top-[7rem] left-[38rem] bg-white rounded-full p-2 cursor-pointer">
  //     <button
  //       onClick={() => setShowModal(true)}
  //       className="text-xl text-blue-600 shadow-sm"
  //     >Activate</button>
  //    <PromptModal isOpen={showModal} setIsOpen={setShowModal} />
  // </div>
  // ) : null

  return showModal ? (
    <div
      className=" custom-class"
      style={{
        position: "absolute",
        bottom: "35rem",
        left: "38rem",
        background: "white",
        zIndex: "999",
        padding: "20px",
        borderRadius: "9999px",
        cursor: "pointer",
      }}
    >
      {/* <div className="absolute top-[7rem] left-[38rem] bg-red rounded-full p-2 cursor-pointer custom-class"> */}
      <PromptModal isOpen={showModal} setIsOpen={setShowModal} />
    </div>
  ) : null;
};

export default Modal;
