import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function PageTransition({ children }) {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const transition = location.state?.transition || "fade";

  useEffect(() => {
    setVisible(false);

    const timer = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => cancelAnimationFrame(timer);
  }, [location.pathname]);

  const isSlideUp = transition === "up";

  return (
    <div
      style={{
        opacity: isSlideUp ? 1 : visible ? 1 : 0,
        transform: isSlideUp
          ? visible
            ? "translateY(0)"
            : "translateY(100vh)"
          : "translateY(0)",
        transition: isSlideUp
          ? "transform 700ms cubic-bezier(0.76, 0, 0.24, 1)"
          : "opacity 700ms ease-in-out",
      }}
    >
      {children}
    </div>
  );
}

export default PageTransition;
