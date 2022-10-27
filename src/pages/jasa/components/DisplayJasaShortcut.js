import SimpleTitle from "../../../components/texts/SimpleTitle";
import MainButton from "../../../components/buttons/MainButton";

const DisplayJasaShortcut = ({ title, image }) => {
  return (
    <div className={"rounded-3xl shadow-md"}>
      <div>
        <img
          className={"w-full h-32 object-cover rounded-3xl"}
          src={process.env.PUBLIC_URL + "/banners/example.webp"}
          alt=""
        />
      </div>
      <div className={"text-center p-2"}>
        <SimpleTitle>{title}</SimpleTitle>
        <div className={"mt-4"}>
          <MainButton>Hubungi Kami</MainButton>
        </div>
      </div>
    </div>
  );
};
export default DisplayJasaShortcut;
