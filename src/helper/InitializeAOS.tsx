import { useEffect, type FC } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InitializeAOS: FC = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return null;
};

export default InitializeAOS;
