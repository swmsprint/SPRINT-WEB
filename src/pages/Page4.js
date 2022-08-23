import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import is from "sharp/lib/is";

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
          x: window.screen.width * 0.3 - 10,
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
          x: window.screen.width * 0.25,
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
        <motion.div className="col-span-3 z-20 mt-28 md:mt-40 relative">
          <div className="w-1/3 h-full float-left"></div>
          <motion.img
            src="/images/Phone4.png"
            alt="second people"
            className="absolute h-1/2 md:h-5/6"
            style={{
              bottom: window.screen.height * 0.1,
              left: 10,
              opacity: 0,
            }}
            variants={variants}
            initial="initial"
            animate="animate"
          />
          <div className="w-2/3 flex justify-between">
            <div className="md:mt-8 ml-0 mr-auto md:ml-auto md:mr-0 text-white">
              <h1 className="text-3xl md:text-6xl">
                매일매일
                <br />
                꾸준하게
              </h1>
              <p className="text-base md:text-2xl md:mt-10">
                한눈에 살펴보는
                <br />
                세밀한 러닝통계
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page4;
