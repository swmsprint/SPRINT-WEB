import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Page3 = ({ page }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const upVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -window.screen.height * 0.4,
      transition: {
        delay: 0.3,
        duration: 1,
      },
    },
  };
  const [variants, setVariants] = useState(null);
  useEffect(() => {
    if (page === "Page3") {
      setVariants(upVariants);
    }
  }, [page]);
  return (
    <div className="section overflow-hidden">
      <div className="w-full h-full grid grid-cols-4">
        <div></div>
        <motion.div className="col-span-2 z-20 mt-28 md:mt-40 relative flex justify-center">
          <div className="w-full flex justify-between">
            <div className="md:mt-8 ml-0 mr-auto md:ml-auto md:mr-0 text-white">
              <h1 className="text-3xl md:text-6xl">
                뒤쳐지지
                <br />
                않도록
              </h1>
              <p className="text-base md:text-2xl md:mt-10">
                오늘의 기록부터
                <br />
                친구들의 기록까지
              </p>
            </div>
          </div>
          <motion.img
            src="/images/Phone3.png"
            alt="phone"
            className="absolute h-1/2 md:h-5/6"
            style={
              isMobile
                ? { bottom: -window.screen.height * 0.3 }
                : { bottom: -window.screen.height * 0.3, left: 10 }
            }
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

export default Page3;
