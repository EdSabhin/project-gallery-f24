import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      console.log(
        "Window width:",
        window.innerWidth,
        "isMobile:",
        window.innerWidth <= 640
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
