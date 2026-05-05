import { useLayoutEffect } from "react";
import gsap from "gsap";

export function useGsapAnimation<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  config: gsap.TweenVars,
) {
  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        repeat: -1,
        ease: "linear",
        ...config,
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, config]);
}
