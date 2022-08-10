import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Page3 = ({ page }) => {
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
        <motion.div className="col-span-2 z-20 mt-40 relative">
          <motion.img
            src="/images/phone.png"
            alt="second people"
            className="absolute h-4/5"
            style={{
              bottom: -window.screen.height * 0.3,
              right: window.screen.width * 0.3,
            }}
            variants={variants}
            initial="initial"
            animate="animate"
          />
          <div className="w-full flex justify-between">
            <div className="mt-8 ml-auto mr-0 text-black">
              <h1 className="text-8xl">내용을</h1>
              <h1 className="text-8xl">채워줘요</h1>
              <p className="text-4xl">배가 고프네요</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page3;
