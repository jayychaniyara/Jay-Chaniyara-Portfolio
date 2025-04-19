import { useEffect, useState } from "react";

export const useTypingEffect = (text: string, speed = 50): string => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let interval: NodeJS.Timeout;

    setDisplayedText("");

    interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (index >= text.length) {
          clearInterval(interval);
          return prev;
        }
        const next = prev + text.charAt(index);
        index++;
        return next;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
};
