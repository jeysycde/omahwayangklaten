import MainButton from "../buttons/MainButton";
import { useHistory } from "react-router-dom";

const BackToHome = () => {
  const history = useHistory();

  return (
    <div className={"fixed w-full bottom-4 left-0 right-0 text-center"}>
      <MainButton
        onClick={() => {
          history.push("/home");
        }}
      >
        Kembali ke Dashboard
      </MainButton>
    </div>
  );
};
export default BackToHome;
