import { useHistory } from "react-router-dom";

const BottomNavbar = ({ showSidebar }) => {
  const history = useHistory();
  const pathname = window.location.pathname;

  const isActive = (params, className = null) => {
    return pathname === params ? (
      <hr
        className={`h-2 md:w-14 md:mx-auto rounded-full bg-[#92A3FD] ${className}`}
      ></hr>
    ) : null;
  };

  const clickMenu = (params) => {
    return history.push(params);
  };

  return (
    <div
      className={"fixed w-full bg-white p-4 bottom-0 rounded-t-3xl shadow-lg"}
    >
      <div className={"grid grid-cols-5 gap-2"}>
        <div
          aria-label={"jasa"}
          className={"text-center"}
          onClick={() => {
            clickMenu("/jasa");
          }}
        >
          <i className={"fa-solid fa-grip text-xl text-gray-400"}></i>
          <p className={"mt-1 uppercase text-xs text-gray-400"}>Jasa</p>
          {isActive("/jasa")}
        </div>
        <div
          aria-label={"kegiatan"}
          className={"text-center mr-auto"}
          onClick={() => {
            clickMenu("/kegiatan");
          }}
        >
          <i className={"fa-solid fa-calendar-days text-xl text-gray-400"}></i>
          <p className={"mt-1 uppercase text-xs text-gray-400"}>Kegiatan</p>
          {isActive("/kegiatan")}
        </div>
        <div
          aria-label={"home"}
          className={"text-center md:mx-auto relative ml-1"}
          onClick={() => {
            clickMenu("/home");
          }}
        >
          <div className={"absolute -mt-8"}>
            <div className={"py-4 px-5 bg-[#92A3FD] rounded-full mb-1 shadow"}>
              <i className={"fa-solid fa-home text-xl text-white"}></i>
            </div>
            <p className={"mb-1 uppercase text-xs text-gray-400 mt-auto"}>
              Beranda
            </p>
            {isActive("/home", "mb-4")}
          </div>
        </div>
        <div
          aria-label={"galeri"}
          className={"text-center ml-auto"}
          onClick={() => {
            clickMenu("/galeri");
          }}
        >
          <i className={"fa-solid fa-image text-xl text-gray-400"}></i>
          <p className={"mt-1 uppercase text-xs text-gray-400"}>Galeri</p>
          {isActive("/galeri")}
        </div>
        <div
          aria-label={"menu"}
          className={"text-center"}
          onClick={() => {
            showSidebar(true);
          }}
        >
          <i className={"fa-solid fa-ellipsis text-xl text-gray-400"}></i>
          <p className={"mt-1 uppercase text-xs text-gray-400"}>Menu</p>
          {isActive("/menu")}
        </div>
      </div>
    </div>
  );
};
export default BottomNavbar;
