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
          x: -window.screen.width * 0.3 + 10,
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
          x: -window.screen.width * 0.25,
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
        <motion.div className="col-span-3 z-20 mt-28 md:mt-40 relative">
          <div className="w-full flex justify-between">
            <div className="md:mt-8 ml-0 mr-auto text-black">
              <h1 className="text-3xl md:text-6xl">
                하나하나
                <br />
                체계적으로
              </h1>
              <p className="text-base md:text-2xl md:mt-10">
                깔끔하고 직관적인
                <br />
                러닝 결과보고서
              </p>
            </div>
          </div>
          <motion.img
            src="/images/Phone2.png"
            alt="phone"
            className="absolute h-1/2 md:h-5/6"
            style={{
              bottom: window.screen.height * 0.1,
              right: 10,
              opacity: 0,
            }}
            variants={variants}
            initial="initial"
            animate="animate"
          />
        </motion.div>
      </div>
      <span className="z-20 absolute" style={{ bottom: 20, left: "50%" }}>
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
      </span>
    </div>
  );
};
export default Page2;
