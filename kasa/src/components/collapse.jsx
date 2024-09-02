import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef, useEffect } from "react";

export default function Collapse({
  title,
  content,
  customClass,
  customClassContent,
}) {
  const [isOpen, setIsOpen] = useState(false); // L'état pour savoir si le contenu est ouvert ou fermé
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
      console.log("test");
      console.log(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Inverse l'état actuel
    console.log("test2");
  };

  return (
    <div>
      <h2 className={` ${customClass}`} onClick={toggleCollapse}>
        {title}{" "}
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`chevron-icon ${isOpen ? "rotate" : ""}`}
        />
      </h2>
      <div
        className={` ${customClassContent}`}
        ref={contentRef}
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.3s ease",
          background: "#fbfbfb",
          borderRadius: "5px",
          marginTop: "-12px",
        }}
      >
        <p>{content}</p>
      </div>
    </div>
  );
}
