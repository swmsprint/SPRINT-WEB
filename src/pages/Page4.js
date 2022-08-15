import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Page4 = ({ page }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const upVariants = isMobile
    ? {
        initial: {
          opacity: 0,
          x: 0,
        },
        animate: {
          opacity: 1,
          x: window.screen.width * 0.35,
          transition: {
            delay: 0.3,
            duration: 1,
          },
        },
      }
    : {
        initial: {
          opacity: 0,
          x: 0,
        },
        animate: {
          opacity: 1,
          x: window.screen.width * 0.05,
          transition: {
            delay: 0.3,
            duration: 1,
          },
        },
      };
  const [variants, setVariants] = useState(null);
  useEffect(() => {
    if (page === "Page4") {
      setVariants(upVariants);
    }
  }, [page]);
  return (
    <div className="section overflow-hidden">
      <div className="w-full h-full grid grid-cols-4">
        <div></div>
        <motion.div className="col-span-2 z-20 mt-28 md:mt-40 relative">
          <motion.img
            src="/images/phone.png"
            alt="second people"
            className="absolute w-5/6 md:w-1/3"
            style={{
              bottom: window.screen.height * 0.1,
              right: "80%",
              opacity: 0,
            }}
            variants={variants}
            initial="initial"
            animate="animate"
          />
          <div className="w-full flex justify-between">
            <div className="md:mt-8 ml-0 mr-auto md:ml-auto md:mr-0 text-white">
              <h1 className="text-3xl md:text-8xl">
                스프린트의
                <br />
                장점
              </h1>
              <p className="text-base md:text-3xl md:mt-10">그리고 보충설명</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page4;
