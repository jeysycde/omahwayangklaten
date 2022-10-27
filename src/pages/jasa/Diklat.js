import Layout from "../../components/layouts/Layout";
import SimpleTitle from "../../components/texts/SimpleTitle";
import axios from "axios";
import { useEffect, useState } from "react";

const DetailJasa = () => {
  const [kesenian, setKesenian] = useState([]);
  const [pedalangan, setPedalangan] = useState([]);
  const [karawitan, setKarawitan] = useState([]);

  useEffect(() => {
    getKesenian();
    getPedalangan();
    getKarawitan();
  }, []);

  const getKesenian = () => {
    axios
      .get("https://omahwayangklaten.or.id/wp-json/wp/v2/posts/?categories=37")
      .then((res) => {
        setKesenian(res.data);
        localStorage.setItem("diklat", JSON.stringify(res.data));
      }).catch(() => {
        let datas = localStorage.getItem("diklat")
        setKesenian(JSON.parse(datas))
      })
  };

  const getPedalangan = () => {
    axios
      .get("https://omahwayangklaten.or.id/wp-json/wp/v2/posts/?categories=38")
      .then((res) => {
        setPedalangan(res.data);
        localStorage.setItem("pedalangan", JSON.stringify(res.data));
      }).catch(() => {
        let datas = localStorage.getItem("pedalangan")
        setPedalangan(JSON.parse(datas))
      })
  };

  const getKarawitan = () => {
    axios
      .get("https://omahwayangklaten.or.id/wp-json/wp/v2/posts/?categories=39")
      .then((res) => {
        setKarawitan(res.data);
        localStorage.setItem("karawitan", JSON.stringify(res.data));
      }).catch(() => {
        let datas = localStorage.getItem("karawitan")
        setKarawitan(JSON.parse(datas))
      })
  };

  return (
    <Layout navbar={true} title={"Diklat"}>
      <div className={"mt-12"}>
        <SimpleTitle className={"capitalize"}>
          Diklat yang kami sediakan
        </SimpleTitle>

        <div className={"mt-12"}>
          <div>
            <SimpleTitle className={"capitalize"} fontSize={"text-base"}>
              Pelatihan Kesenian
            </SimpleTitle>
            <div className={"mt-2 grid grid-cols-2 gap-4 mb-24"}>
              {kesenian.map((item, key) => (
                <div
                  key={key}
                  dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                />
              ))}
            </div>
          </div>
          <div className={"mt-12"}>
            <SimpleTitle className={"capitalize"} fontSize={"text-base"}>
              Pelatihan Pedalangan
            </SimpleTitle>
            <div className={"mt-2 grid grid-cols-2 gap-4 mb-24"}>
              {pedalangan.map((item, key) => (
                <div
                  key={key}
                  dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                />
              ))}
            </div>
          </div>
          <div className={"mt-12"}>
            <SimpleTitle className={"capitalize"} fontSize={"text-base"}>
              Pelatihan Karawitan
            </SimpleTitle>
            <div className={"mt-2 grid grid-cols-2 gap-4 mb-24"}>
              {karawitan.map((item, key) => (
                <div
                  key={key}
                  dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default DetailJasa;
