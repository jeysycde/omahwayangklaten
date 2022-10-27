import RoundedButton from "../../components/buttons/RoundedButton";
import { useHistory } from "react-router-dom";
import banner from "../../assets/banners/start-2.png";

const StartTwo = () => {
  const history = useHistory();

  const nextPage = () => {
    history.push("/three");
  };

  return (
    <div>
      <div>
        <div className={"md:flex md:justify-center"}>
          <img className={"md:w-1/4"} src={banner} alt="/" />
        </div>
        <div className={"my-4 mx-4 text-left md:text-center"}>
          <h1 className={"font-semibold text-2xl"}>Belajar bersama kami</h1>
          <p>
            Menyelenggarakan pendidikan dan pendokumentasian karya seni
            tradisonal
          </p>
        </div>
        <div className={"m-4 mt-8 text-right md:text-center"}>
          <RoundedButton onClick={nextPage} className={"text-xl"}>
            {" "}
            &gt;{" "}
          </RoundedButton>
        </div>
      </div>
    </div>
  );
};

export default StartTwo;
