import Layout from "../../components/layouts/Layout";
import { useHistory, useParams } from "react-router-dom";
import SimpleTitle from "../../components/texts/SimpleTitle";
import DisplayJasaShortcut from "./components/DisplayJasaShortcut";
import axios from "axios";
import { useEffect, useState } from "react";

const DetailJasa = () => {
  const { slug } = useParams();
  const [data, setData] = useState([]);

  const getPostId = (slug) => {
    switch (slug) {
      case "fasilitas":
        return 41;
      case "sarana-prasarana":
        return 42;
      case "produk-kerajinan":
        return 36;
      case "produk-jasa":
        return 34;
      default:
        return;
    }
  };

  useEffect(() => {
    axios
      .get(
        "https://omahwayangklaten.or.id/wp-json/wp/v2/posts/?categories=" +
          getPostId(slug)
      )
      .then((res) => {
        console.log(res)
        setData(res.data);
        localStorage.setItem("data", JSON.stringify( res.data));
      }).catch(() => {
        let datas = localStorage.getItem("data")
        setData(JSON.parse(datas))
      })
  }, [slug]);

  return (
    <Layout navbar={true} title={slug.replace("-", " ")}>
      <div className={"mt-12"}>
        <SimpleTitle className={"capitalize"}>
          {slug.replace("-", " ")} yang kami sediakan
        </SimpleTitle>
        <div className={"mt-2 grid grid-cols-2 gap-4 mb-24"}>
          {data.map((item, key) => (
            <div
              key={key}
              dangerouslySetInnerHTML={{ __html: item.content.rendered }}
            />
          ))}
          {/*<DisplayJasaShortcut title={slug} />*/}
        </div>
      </div>
    </Layout>
  );
};
export default DetailJasa;
