import { useEffect, useState } from "react";

function PageTransition({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 700ms ease-in-out",
      }}
    >
      {children}
    </div>
  );
}

export default PageTransition;
