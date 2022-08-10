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
    <div className="flex justify-between fixed w-1/2 z-50 left-1/4 mt-16">
      <img src="/images/header_logo.png" alt="header logo" className="w-1/6" />
      <AnimatePresence>
        {page == "LandingPage" ? null : (
          <motion.button
            variants={exitVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            style={{ right: 0, top: 90 }}
            onClick={openModal} // ToDo: 사전예약 모달창 띄우기
          >
            사전예약 하러가기
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
