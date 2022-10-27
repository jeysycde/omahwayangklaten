import { motion } from "framer-motion";
const MainButton = (props) => {
  return (
    <>
      <motion.button
        style={props.style}
        type={props.type}
        onClick={props.onClick}
        whileHover={{ scale: 1.01 }}
        disabled={props.disabled}
        className={`p-2 text-white rounded-full p-4 bg-[#92A3FD] hover:bg-[#9DCEFF] duration-200 ${props.className}`}
      >
        {props.children}
      </motion.button>
    </>
  );
};
export default MainButton;
