import MainIcon from "../badges/MainIcon";
import SimpleTitle from "../texts/SimpleTitle";
import { useHistory } from "react-router-dom";

const SimpleNavbar = ({ title, setShowSidebar }) => {
  const history = useHistory();

  return (
    <div className={"flex justify-between mt-8"}>
      <div className={"ml-4"} onClick={() => history.goBack()}>
        <MainIcon padding={"px-4 py-2"}>
          <i className="fa-solid fa-angle-left"></i>
        </MainIcon>
      </div>
      <div>
        <SimpleTitle className={"uppercase"} fontSize={"text-base"}>
          {title}
        </SimpleTitle>
      </div>
      <div className={"mr-4"}>
        <MainIcon
          padding={"px-3 py-2"}
          onClick={() => {
            setShowSidebar(true);
          }}
        >
          <i className="fa-solid fa-ellipsis"></i>
        </MainIcon>
      </div>
    </div>
  );
};
export default SimpleNavbar;
