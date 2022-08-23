import { AnimatePresence, motion } from "framer-motion";

const Header = ({ page, openModal }) => {
  const exitVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.7,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.7,
      },
    },
  };

  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center fixed w-3/4 md:w-1/2 z-50 mt-8 md:mt-16">
        <div className="relative">
          <img
            src="/images/header_logo.png"
            alt="header logo"
            className="inline py-2 h-10 md:h-14 "
          />
          {page === "Page2" ? (
            <span className="text-2xl md:text-4xl text-indigo-500 font-Anton align-middle ">
              {" "}
              SPRINT
            </span>
          ) : (
            <span className="text-2xl md:text-4xl text-white font-Anton align-middle ">
              {" "}
              SPRINT
            </span>
          )}
        </div>
        <AnimatePresence>
          {page === "LandingPage" ? null : page === "Page2" ? (
            <motion.button
              variants={exitVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-indigo-500 hover:bg-indigo-700 text-white w-24 md:w-40 py-2 px-4 rounded-full"
              style={{ right: 0, top: 90 }}
              onClick={openModal} // ToDo: 사전예약 모달창 띄우기
            >
              <p className="break-normal font-bold text-sm md:text-l">
                사전예약 하러가기
              </p>
            </motion.button>
          ) : (
            <motion.button
              variants={exitVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white hover:bg-gray-300 text-indigo-500 w-24 md:w-40 py-2 px-4 rounded-full"
              style={{ right: 0, top: 90 }}
              onClick={openModal} // ToDo: 사전예약 모달창 띄우기
            >
              <p className="break-normal font-bold text-sm md:text-l">
                사전예약 하러가기
              </p>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
