import { motion } from "framer-motion";
const RoundedButton = (props) => {
  return (
    <>
      <motion.button
        style={props.style}
        type={props.type}
        onClick={props.onClick}
        whileHover={{ scale: 1.01 }}
        disabled={props.disabled}
        className={`p-2 text-white bg-[#92A3FD] hover:bg-[#9DCEFF] w-16 h-16 rounded-full duration-200 ${props.className}`}
      >
        {props.children}
      </motion.button>
    </>
  );
};
export default RoundedButton;
