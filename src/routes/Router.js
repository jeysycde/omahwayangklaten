import { Route } from "react-router-dom";
import Home from "../pages/home/Home";
import StartOne from "../pages/onboarding/StartOne";
import StartTwo from "../pages/onboarding/StartTwo";
import StartThree from "../pages/onboarding/StartThree";
import KalenderKegiatan from "../pages/kegiatan/KalenderKegiatan";
import SubKegiatan from "../pages/kegiatan/SubKegiatan";
import ListJasa from "../pages/jasa/ListJasa";
import DetailJasa from "../pages/jasa/DetailJasa";
import Galeri from "../pages/galeri/Galeri";
import About from "../pages/about/About";
import Wayang from "../pages/wayang/Wayang";
import DetailKategoriWayang from "../pages/wayang/DetailKategoriWayang";
import Diklat from "../pages/jasa/Diklat";

const Router = () => {
  return (
    <>
      <Route path={"/"} component={StartOne} exact />
      <Route path={"/two"} component={StartTwo} exact />
      <Route path={"/three"} component={StartThree} exact />

      <Route path={"/home"} component={Home} exact />

      <Route path={"/kegiatan"} component={KalenderKegiatan} exact />
      <Route path={"/kegiatan/:slug"} component={SubKegiatan} exact />

      <Route path={"/jasa"} component={ListJasa} exact />
      <Route path={"/jasa/:slug"} component={DetailJasa} exact />
      <Route path={"/jasa/diklat/detail"} component={Diklat} exact />

      <Route path={"/galeri"} component={Galeri} exact />

      <Route path={"/about"} component={About} exact />

      <Route path={"/wayang"} component={Wayang} exact />
      <Route
        path={"/wayang/:category"}
        component={DetailKategoriWayang}
        exact
      />
    </>
  );
};
export default Router;
