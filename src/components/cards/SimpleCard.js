import MainButton from "../buttons/MainButton";

const SimpleCard = ({ title, name, description, onClick, buttonLabel }) => {
  return (
    <div className="rounded-3xl shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-medium text-center mb-2 text-[#92A3FD]">
          {name}
        </div>
        <div className="font-bold text-2xl text-center mb-2">{title}</div>
        <p className="text-gray-700 text-base md:text-center">{description}</p>
      </div>
      <div className={"mt-4 p-4 text-center"}>
        <MainButton onClick={onClick} className={"w-1/2 md:w-72"}>
          {buttonLabel}
        </MainButton>
      </div>
    </div>
  );
};
export default SimpleCard;
