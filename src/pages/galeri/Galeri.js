import Layout from "../../components/layouts/Layout";
import SimpleTitle from "../../components/texts/SimpleTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import AlertModal from "../../components/modals/AlertModal";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

const Galeri = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-wayang.herokuapp.com/api/gallery/category/list")
      .then((response) => {
        setData(response.data.data);
        localStorage.setItem("galeri", JSON.stringify(response.data.data));
      }).catch(() => {
        let datas = localStorage.getItem("galeri")
        setData(JSON.parse(datas))
      })
  }, []);

  return (
    <Layout navbar={true} title={"Galeri"}>
      <AlertModal
        showModal={showCarousel}
        handleClose={() => {
          setShowCarousel(false);
        }}
      >
        <Carousel>
          <div>
            <img
              className={"rounded-xl"}
              src={process.env.PUBLIC_URL + "/banners/example.webp"}
              alt=""
            />
          </div>
          <div>
            <img
              className={"rounded-xl"}
              src={process.env.PUBLIC_URL + "/banners/example.webp"}
              alt=""
            />
          </div>
        </Carousel>
      </AlertModal>
      <div className={"mt-12 mb-24"}>
        <SimpleTitle>Gallery Kegiatan Omah Wayang</SimpleTitle>
        <div className={"mt-4"}>
          {data.map((item, key) => (
            <div key={key} className={"p-4 bg-white shadow-lg rounded-lg"}>
              <SimpleTitle className={"text-blue-400"} fontSize={"text-xs"}>
                Kumpulan Foto Kegiatan{" "}
              </SimpleTitle>
              <SimpleTitle fontSize={"text-sm my-2"}>{item.title}</SimpleTitle>
              <div className={"grid grid-cols-3 gap-4"}>
                {item.galleries.map((item, key) => (
                  <div
                    key={key}
                    onClick={() => {
                      // setShowCarousel(true);
                    }}
                  >
                    <img
                      className={"rounded-xl object-cover h-24"}
                      src={item.photo}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Galeri;
