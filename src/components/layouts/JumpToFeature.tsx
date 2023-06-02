"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCaretUp } from "react-icons/fa";

export function JumpToFeature() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [showButton, setShowButton] = useState<boolean>(true);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowButton(true);

    const handleHide = setTimeout(async () => {
      setShowButton(false);
    }, 2000);

    return () => clearTimeout(handleHide);
  }, [scrollPosition]);

  return (
    <Link
      href="#features"
      className="flex fixed bottom-4 md:bottom-12 right-4 md:right-12 z-50 justify-center items-center w-16 h-16 rounded-full bg-black text-white transition-all duration-500"
      style={{ opacity: showButton ? "100" : "0", visibility: showButton ? "visible" : "hidden" }}
    >
      <div className="flex flex-col items-center -translate-y-1.5">
        <FaCaretUp size={24} /> <span className="text-xs">Features</span>
      </div>
    </Link>
  );
}
