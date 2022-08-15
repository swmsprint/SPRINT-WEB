import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Page2 = ({ page }) => {
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
          x: -window.screen.width * 0.4,
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
          x: -window.screen.width * 0.1,
          transition: {
            delay: 0.3,
            duration: 1,
          },
        },
      };
  const [variants, setVariants] = useState(null);
  useEffect(() => {
    if (page === "Page2") {
      setVariants(upVariants);
    }
  }, [page]);
  return (
    <div className="section overflow-hidden">
      <div className="w-full h-full grid grid-cols-4">
        <div></div>
        <motion.div className="col-span-2 z-20 mt-40 relative">
          <div className="w-full flex justify-between">
            <div className="md:mt-8 ml-0 mr-auto text-black">
              <h1 className="text-3xl md:text-8xl">
                스프린트의
                <br />
                장점
              </h1>
              <p className="text-base md:text-3xl md:mt-10">그리고 보충설명</p>
            </div>
          </div>
          <motion.img
            src="/images/phone.png"
            alt="phone"
            className="absolute w-54 md:w-85"
            style={{
              bottom: window.screen.height * 0.1,
              left: "80%",
              opacity: 0,
            }}
            variants={variants}
            initial="initial"
            animate="animate"
          />
        </motion.div>
      </div>
      <span className="z-20 absolute" style={{ bottom: 20, left: "50%" }}>
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
      </span>
    </div>
  );
};
export default Page2;
