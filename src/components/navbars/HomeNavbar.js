import MainIcon from "../badges/MainIcon";

const HomeNavbar = () => {
  return (
    <div className={"flex justify-between mt-12"}>
      <div>
        <div>
          <span className={"font-light text-lg"}>Hey there,</span>
        </div>
        <div>
          <h1 className={"font-semibold text-xl"}>Welcome back</h1>
        </div>
      </div>
      <div className={"my-auto"}></div>
    </div>
  );
};

export default HomeNavbar;
