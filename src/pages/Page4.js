import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Page4 = ({ page }) => {
  const upVariants = {
    initial: {
      opacity: 0,
      x: 0,
    },
    animate: {
      opacity: 1,
      x: window.screen.width * 0.1,
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
        <motion.div className="col-span-2 z-20 mt-40 relative">
          <motion.img
            src="/images/phone.png"
            alt="second people"
            className="absolute h-4/5"
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
            <div className="mt-8 ml-auto mr-0 text-white">
              <h1 className="text-8xl">내용을</h1>
              <h1 className="text-8xl">채워줘요</h1>
              <p className="text-4xl">중간평가가 코앞</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page4;
