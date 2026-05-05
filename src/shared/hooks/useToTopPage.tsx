import { useEffect } from "react";

export const useToTopPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
};
