import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const reveal = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(reveal, {
      threshold: 0.1,
      rootMargin: "100px 0px",
    });

    if (element) observer.observe(element);

    const fallback = setTimeout(() => {
      if (element && !element.classList.contains("visible")) {
        element.classList.add("visible");
      }
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};
