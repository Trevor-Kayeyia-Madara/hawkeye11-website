import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children, direction = "up", delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const baseStyle =
    "transition-all duration-700 ease-out";

  const hiddenStyles = {
    up: "opacity-0 translate-y-12",
    left: "opacity-0 -translate-x-12",
    right: "opacity-0 translate-x-12"
  };

  const visibleStyle = "opacity-100 translate-x-0 translate-y-0";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${baseStyle} ${
        isVisible ? visibleStyle : hiddenStyles[direction]
      }`}
    >
      {children}
    </div>
  );
}
