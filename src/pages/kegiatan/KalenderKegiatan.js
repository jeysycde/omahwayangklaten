import Layout from "../../components/layouts/Layout";
import SimpleTitle from "../../components/texts/SimpleTitle";
import KegiatanShortcut from "./components/KegiatanShortcut";
import { useEffect, useState } from "react";
import axios from "axios";

const KalenderKegiatan = () => {
  const [kegiatanTerbaru, setKegiatanTerbaru] = useState([]);

  useEffect(() => {
    axios
      .get("https://omahwayangklaten.or.id/wp-json/wp/v2/posts/?categories=31")
      .then((res) => {
        setKegiatanTerbaru(res.data);
        localStorage.setItem("kalenderkegiatan", JSON.stringify( res.data));
      }).catch(() => {
        let datas = localStorage.getItem("kalenderkegiatan")
        setKegiatanTerbaru(JSON.parse(datas))
      })
  }, []);

  return (
    <Layout navbar={true} title={"Kalender Kegiatan"}>
      <div className={"mt-12"} aria-label={"kegiatan terbaru"}>
        <SimpleTitle className={"uppercase"}>Kegiatan Terbaru</SimpleTitle>
      </div>
      <div className={"mt-4"}>
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-2"}>
          {kegiatanTerbaru.map((item, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: item.content.rendered }}
            />
          ))}
        </div>

        {/*{content}*/}
        <div className={"mt-12 mb-32 grid grid-cols-1 md:grid-cols-3 gap-2"}>
          <KegiatanShortcut
            title={"Seni Tari Tradisi"}
            location={"Omah Wayang Klaten"}
            author={"Omah Wayang Klaten"}
            date={"11:00"}
          />
        </div>
      </div>
    </Layout>
  );
};
export default KalenderKegiatan;
