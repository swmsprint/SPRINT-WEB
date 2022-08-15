import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Page1 = ({ page }) => {
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
    if (page === "Page1") {
      setVariants(upVariants);
    }
  }, [page]);
  return (
    <div className="section overflow-hidden">
      <div className="w-full h-full grid grid-cols-4">
        <div></div>
        <motion.div className="col-span-2 z-20 mt-40 relative">
          <div className="w-full flex justify-between">
            <div className="mt-8 ml-0 mr-auto text-white">
              <h1 className="text-8xl">내용을</h1>
              <h1 className="text-8xl">채워줘요</h1>
              <p className="text-4xl">스프린트 화이팅</p>
            </div>
          </div>
          <motion.img
            src="/images/phone.png"
            alt="phone"
            className="absolute h-4/5"
            style={{ bottom: -window.screen.height * 0.3, right: 0 }}
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
export default Page1;
