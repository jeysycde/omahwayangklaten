const SimpleDisplayNoImage = ({ children, width = "w-32", onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex-auto ${width} h-36 p-4 bg-[#DAE2FF] rounded-3xl mx-1`}
    >
      <div className={"justify-center flex items-center h-full"}>
        <p>{children}</p>
      </div>
    </div>
  );
};
export default SimpleDisplayNoImage;
