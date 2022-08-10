import { AnimatePresence, motion } from "framer-motion";

const Header = ({ page }) => {
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
      <div className="flex justify-around w-1/4">
        <img src="/images/iconFacebook.png" alt="header facebook" />
        <img src="/images/iconInstagram.png" alt="header instagram" />
        <img src="/images/iconBlog.png" alt="header blog" />
        <img src="/images/iconYoutube.png" alt="header youtube" />
      </div>
      <AnimatePresence>
        {page == "landing" ? null : (
          <motion.p
            variants={exitVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="z-20 absolute w-56"
            style={{ right: 0, top: 90 }}
          >
            downloadbutton
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
