"use client";

import { useRef, useState } from "react";
import { FaCaretDown, FaPlus, FaMinus } from "react-icons/fa";

export function Section9() {
  return (
    <section className="flex w-full justify-center mt-10">
      <div className="flex flex-col w-full max-w-7xl gap-8 px-4 md:px-0 py-6">
        <h2 className="text-2xl lg:text-3xl text-center font-extrabold tracking-wide">
          Frequently Asked Question
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            {[...Array(3)].map((_, idx) => {
              return <FAQ key={idx} title="Apa Itu Fleet?" body={"text ".repeat(60)} />;
            })}
          </div>
          <div className="flex flex-col gap-3 md:pt-6">
            {[...Array(4)].map((_, idx) => {
              return <FAQ key={idx} title="Apa Itu Fleet?" body={"text ".repeat(30)} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ title, body }: { title: string; body: string }) {
  const [toggle, setToggle] = useState<boolean>(true);

  const menuLabel = useRef<any>();

  return (
    <div className="flex flex-col relative w-full py-2 px-4 rounded-xl bg-gray-200 md:bg-transparent">
      <button
        ref={menuLabel}
        className="flex gap-1 w-full py-1.5 justify-between items-center"
        onClick={() => setToggle(!toggle)}
      >
        <h3 className="text-lg">{title}</h3>
        <div
          className={`text-custom-yellow transition-all duration-500 ${
            toggle ? "-rotate-180" : "rotate-0"
          }`}
        >
          {toggle ? <FaPlus /> : <FaMinus />}
        </div>
      </button>
      <div
        className={`flex flex-col overflow-hidden transition-all duration-300 ${
          toggle ? "max-h-48 border-b border-custom-yellow md:border-black mb-2" : "max-h-0"
        }`}
      >
        <p className="w-full py-1.5 shadow-sm">{body}</p>
      </div>
    </div>
  );
}
