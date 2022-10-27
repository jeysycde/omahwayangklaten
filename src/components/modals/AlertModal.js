import { AnimatePresence, motion } from "framer-motion";
import MainButton from "../buttons/MainButton";
import Backdrop from "./Backdrop";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

const AlertModal = ({ showModal, handleClose, children, button }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal"
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            variants={dropIn}
          >
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*body*/}
              <div className="relative p-6 flex-auto text-center">
                <div>{children}</div>
                {button && (
                  <div className="mt-8 w-full text-center">
                    <MainButton
                      type="button"
                      disabled={false}
                      onClick={handleClose}
                      label={"Kembali"}
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};
export default AlertModal;
