import SimpleTitle from "../texts/SimpleTitle";
import SidebarLinkText from "../texts/SidebarLinkText";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Sidebar = ({ handleClose, showSidebar = false }) => {
  const [enabled, setEnabled] = useState(false);
  const history = useHistory();

  const handleRedirect = (to) => {
    return history.push(to);
  };

  return (
    showSidebar && (
      <div
        onClick={handleClose}
        className={"fixed w-full h-full top-0 bg-gray-400 bg-opacity-60 z-10"}
      >
        <div className="w-60 h-full shadow-md bg-white px-1 fixed z-20">
          <img src={process.env.PUBLIC_URL + "/banners/example.webp"} alt="" />
          <div className={"m-4"}>
            <SimpleTitle className={"text-blue-300"}>Menu</SimpleTitle>
          </div>
          <ul className="relative">
            <li className="relative">
              <SidebarLinkText
                onClick={() => {
                  handleRedirect("/home");
                }}
                text={"Beranda"}
              />
            </li>
            <li className="relative">
              <SidebarLinkText
                onClick={() => {
                  handleRedirect("/about");
                }}
                text={"About"}
              />
            </li>
            <li className="relative">
              <SidebarLinkText
                onClick={() => {
                  handleRedirect("/jasa");
                }}
                text={"Jasa"}
              />
            </li>
            <li className="relative">
              <SidebarLinkText
                onClick={() => {
                  handleRedirect("/kegiatan");
                }}
                text={"Kegiatan"}
              />
            </li>
            <li className="relative">
              <SidebarLinkText
                onClick={() => {
                  handleRedirect("/wayang");
                }}
                text={"Wayang"}
              />
            </li>
            <li className="relative">
              <SidebarLinkText
                onClick={() => {
                  handleRedirect("/galeri");
                }}
                text={"Galeri"}
              />
            </li>
          </ul>
        </div>
      </div>
    )
  );
};
export default Sidebar;
