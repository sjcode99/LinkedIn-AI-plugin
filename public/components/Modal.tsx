import React, { useState } from "react";
import AiIcon from "../icon/ai-icon.svg";
import PromptModal from "./PromptModal";
import "../../style.css";

const Modal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("click", async (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const textBox = document.querySelector(".msg-form__contenteditable");

      if (
        target.matches(".msg-form__contenteditable") ||
        target.matches(".ai-icon-img")
      ) {
        const container = document.createElement("div");
        container.className = "ai-icon";
        container.setAttribute(
          "style",
          "position:absolute; bottom:0; right:1rem; z-index: 10000;"
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

  return showModal ? (
    <div className="absolute bottom-[35rem] left-[38rem] bg-white z-[999] p-5 rounded-full cursor-pointer">
      <PromptModal isOpen={showModal} setIsOpen={setShowModal} />
    </div>
  ) : null;
};

export default Modal;
