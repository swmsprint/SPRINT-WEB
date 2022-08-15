import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const LandingPage = ({ openModal }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const mainImageVariant = {
    hidden: {
      scale: 2,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="section overflow-hidden">
      <div className="w-full h-full grid grid-cols-4">
        <div className="absolute z-20 w-44" style={{ right: 0 }}></div>
        {isMobile ? null : (
          <motion.div
            className="absolute z-10 w-full h-full"
            variants={mainImageVariant}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/images/main.png"
              alt="main background"
              className="w-full h-full"
            />
          </motion.div>
        )}
        <div></div>
        <div className="col-span-2 z-20 mt-20 relative flex justify-center md:justify-start">
          <div className="text-white absolute top-1/3 ml-auto mr-auto">
            <h1 className="text-8xl">SPRINT</h1>
            <br></br>
            <button
              className="ml-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={openModal}
            >
              사전예약 하러가기
            </button>
          </div>
        </div>
        <span className="z-20 absolute" style={{ bottom: 20, left: "50%" }}>
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span>
      </div>
    </div>
  );
};

export default LandingPage;
