import Layout from "../../components/layouts/Layout";
import SimpleTitle from "../../components/texts/SimpleTitle";
import { useParams } from "react-router-dom";
import MainButton from "../../components/buttons/MainButton";
import { useEffect, useState } from "react";
import axios from "axios";

const SubKegiatan = () => {
  const { slug } = useParams();
  const [kegiatan, setKegiatan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    title: "",
    image: "",
    description: "",
  });
  let query = document;
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://omahwayangklaten.or.id/wp-json/wp/v2/posts/5966")
      .then((res) => {
        console.log(res)
        setKegiatan(res.data.content.rendered);
        query = query.querySelectorAll(".elementor-widget-container");

        setData({
          image: query[0].children[0].currentSrc,
          title: query[1].children[0].innerHTML,
          description: query[1].children[1].innerHTML,
          urlButton: query[2].children[0].children[0].href,
        });

        query[2].children[0].children[0].className = "hidden";
      });
  }, [kegiatan]);

  return (
    <Layout navbar={true} title={data.title}>
      <div dangerouslySetInnerHTML={{ __html: kegiatan }} />
      {/*<div className={"mt-8 text-center"}>*/}
      {/*  <img*/}
      {/*    className={"rounded-3xl h-48 w-full mx-auto object-cover"}*/}
      {/*    src={data.image}*/}
      {/*    alt=""*/}
      {/*  />*/}
      {/*</div>*/}
      <div className={"mt-4 md:text-center text-left mb-28"}>
        {/*<SimpleTitle>{data.title}</SimpleTitle>*/}
        {/*<p className={"mt-2"}>{data.description}</p>*/}
        {/*<h4 className={"font-semibold"}>8 Oktober 2021</h4>*/}
        <div className={"mt-12 text-center"}>
          <MainButton
            onClick={() => window.open( 'https://docs.google.com/forms/d/1B9IvrBKiJcrqjMHjmonFe5Q0Wy6ldsXFzkTyiNHaUdY/edit')}
          >
            Link Pendaftaran
          </MainButton>
        </div>
      </div>
    </Layout>
  );
};
export default SubKegiatan;
