import MainButton from "../../components/buttons/MainButton";
import { useHistory } from "react-router-dom";
import banner from "../../assets/banners/start-1.png";

const StartOne = () => {
  const history = useHistory();

  const getStared = () => {
    history.push("/two");
  };

  return (
    <div>
      <div>
        <div className={"md:flex md:justify-center"}>
          <img className={"md:w-1/4"} src={banner} alt="/" />
        </div>
        <div className={"my-4 mx-4 text-center"}>
          <h1 className={"font-semibold text-2xl"}>Selamat Datang</h1>
          <p>Omah Wayang Klaten Mobile Web Apps</p>
        </div>
      </div>
      <div className={"mt-12 mb-4 mx-2 text-center"}>
        <MainButton
          onClick={getStared}
          className={"w-full md:w-72 rounded-full p-4"}
        >
          Get Started
        </MainButton>
      </div>
    </div>
  );
};

export default StartOne;
