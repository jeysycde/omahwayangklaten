import RoundedButton from "../../components/buttons/RoundedButton";
import { useHistory } from "react-router-dom";
import banner from "../../assets/banners/start-3.png";

const StartThree = () => {
  const history = useHistory();

  const nextPage = () => {
    history.push("/home");
  };

  return (
    <div>
      <div>
        <div className={"md:flex md:justify-center"}>
          <img className={"md:w-1/4"} src={banner} alt="/" />
        </div>
        <div className={"my-4 mx-4 text-left md:text-center"}>
          <h1 className={"font-semibold text-2xl"}>Kembangkan diri anda</h1>
          <p>
            Mengupayakan pelestarian , revitalisasi, pengembangan, dan
            Pemberdayaan nilai-nilai seni budaya dengan kegiatan yang di
            laksanakan
          </p>
        </div>
        <div className={"m-4 mt-8 text-right md:text-center"}>
          <RoundedButton onClick={nextPage} className={"text-xl"}>
            {" "}
            >{" "}
          </RoundedButton>
        </div>
      </div>
    </div>
  );
};

export default StartThree;
