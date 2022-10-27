import { Toaster } from "react-hot-toast";
import BottomNavbar from "../navbars/BottomNavbar";
import SimpleNavbar from "../navbars/SimpleNavbar";
import Sidebar from "../sidebars/Sidebar";
import { useState } from "react";

const Layout = ({
  children,
  className,
  navbar,
  title = null,
  bottom = true,
}) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/*<Header />*/}
      <Sidebar
        handleClose={() => {
          setShowSidebar(false);
        }}
        showSidebar={showSidebar}
      />
      {navbar ? (
        <SimpleNavbar
          setShowSidebar={(res) => {
            setShowSidebar(res);
          }}
          title={title}
        />
      ) : null}
      <Toaster position="top-center" reverseOrder={false} />
      <div className={`${className} md:mt-12 mt-4 mx-4`}>{children}</div>
      {bottom ? (
        <BottomNavbar
          showSidebar={(res) => {
            setShowSidebar(res);
          }}
        />
      ) : null}
      {/*<Footer />*/}
    </>
  );
};
export default Layout;
