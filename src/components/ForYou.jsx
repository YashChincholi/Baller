import { Element } from "react-scroll";
import { faq } from "../constants/index";

import clsx from "clsx";
import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const FaqItem = ({ item }) => {
  const [activeId, setActiveId] = useState(null);

  const active = activeId === item.id;

  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => {
          setActiveId(activeId === item.id ? null : item.id);
        }}
      >
        <div className="flex-1">
          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "max-lg:text-p1"
            )}
          >
            {item.question}
          </div>
        </div>

        <div
          className={clsx(
            "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4",
            active && "before:bg-p1 after:rotate-0 after:bg-p1"
          )}
        >
          <div className="g4 size-11/12 rounded-full shadow-300" />
        </div>
      </div>

      <SlideDown>
        {activeId === item.id && (
          <div className="body-3 px-7 py-3.5">{item.answer}</div>
        )}
      </SlideDown>

      <div
        className={clsx(
          "g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500 absolute",
          active && "opacity-100"
        )}
      >
        <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
      </div>
    </div>
  );
};

const ForYou = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section id="foryou">
      <Element name="faq" className="relative">
        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <img src="/faq-logo.svg" alt="logo" className="size-1/2" />
            </div>

            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index} />
              ))}
            </div>

            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={halfLength + index} />
              ))}
            </div>
          </div>

          <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default ForYou;
