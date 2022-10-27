import homepage from "../../assets/home.jpeg";
const SimpleDisplay = (props) => {
  return (
    <div className={"w-full h-56"}>
      <img
        className={"w-full h-full object-cover rounded-3xl"}
        src={homepage}
        alt=""
      />
    </div>
  );
};
export default SimpleDisplay;
