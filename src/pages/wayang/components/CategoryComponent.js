import MainButton from "../../../components/buttons/MainButton";
import { useHistory } from "react-router-dom";
import SimpleTitle from "../../../components/texts/SimpleTitle";

const CategoryComponent = ({ title, description, image, onClick }) => {
  const history = useHistory();

  return (
    <div className={"mt-4 p-8 rounded-3xl bg-[#EAF0FF]"}>
      <div className={"grid grid-cols-2 gap-4"}>
        <div>
          <SimpleTitle fontSize={"text-base"}>{title}</SimpleTitle>
          <p className={"text-gray-500 text-xs"}>{description}</p>
          <div className={"mt-4"}>
            <MainButton onClick={onClick}>View More</MainButton>
          </div>
        </div>
        <div className={"ml-auto w-24 h-24"}>
          <img
            className={"rounded-full h-full w-full object-cover"}
            src={image}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};
export default CategoryComponent;
