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
      <div className="flex justify-between items-center fixed w-3/4 md:w-1/2 z-50 mt-16">
        <div className="relative">
          <img
            src="/images/header_logo.png"
            alt="header logo"
            className="inline py-2 h-10 md:h-14 "
          />
          <span className="text-white text-2xl md:text-4xl font-white font-Anton align-middle ">
            {" "}
            SPRINT
          </span>
        </div>
        <AnimatePresence>
          {page == "LandingPage" ? null : (
            <motion.button
              variants={exitVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-blue-500 hover:bg-blue-700 w-24 md:w-40 py-2 px-4 rounded-full"
              style={{ right: 0, top: 90 }}
              onClick={openModal} // ToDo: 사전예약 모달창 띄우기
            >
              <p className="text-white break-normal font-bold text-sm md:text-l">
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
