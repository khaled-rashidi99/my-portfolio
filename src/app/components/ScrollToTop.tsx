"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "./ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 flex items-center justify-center rounded-full text-white opacity-80 transition-all duration-300 hover:scale-110 max-sm:h-8 max-sm:w-8 sm:h-12 sm:w-12"
          aria-label="Scroll to top"
          variant={"gradient"}
          size={"icon"}
        >
          <FaArrowUp />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
