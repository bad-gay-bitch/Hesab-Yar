import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "motion/react";

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  format = (val: number) => val.toString(),
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number; // delay in s
  decimalPlaces?: number;
  format?: (val: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const [displayValue, setDisplayValue] = useState(format(0));

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        animate(motionValue, direction === "down" ? 0 : value, {
          duration: 1, // 1 second duration
          ease: "easeOut",
        });
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    return motionValue.on("change", (latest) => {
      setDisplayValue(format(latest));
    });
  }, [motionValue, format]);

  return (
    <span className={className} ref={ref}>
      {displayValue}
    </span>
  );
}
