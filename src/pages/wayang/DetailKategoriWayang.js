import Layout from "../../components/layouts/Layout";
import BackToHome from "../../components/navbars/BackToHome";
import SimpleTitle from "../../components/texts/SimpleTitle";
import { useParams } from "react-router-dom";
import MainTextInput from "../../components/forms/MainTextInput";
import MainButton from "../../components/buttons/MainButton";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailKategoriWayang = () => {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://backend-wayang.herokuapp.com/api/wayang/" + category)
      .then((response) => {
        console.log(response.data, "detail wayang")
        setCategories(response.data.data);
        localStorage.setItem("detailKategori", JSON.stringify(response.data.data));
      }).catch(() => {
        let datas = localStorage.getItem("detailKategori")
        setCategories(JSON.parse(datas))
      })
  }, [category]);

  const filteredWayang = categories.filter((wayang) => {
    return wayang.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Layout navbar={true} bottom={false} title={categories[0]?.category}>
      <div aria-label={"Search Input"} className={"mt-8 mb-12"}>
        <MainTextInput
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type={"text"}
          name={"search"}
          placeholder={"Search Nama Wayang"}
        />
      </div>
      <SimpleTitle>{categories[0]?.category}</SimpleTitle>
      <div className={"grid grid-cols-2 gap-8 mb-32"}>
        {filteredWayang.map((item, key) => (
          <div
            key={item.title}
            className={"mt-4 p-4 rounded-3xl shadow-lg bg-[#EAF0FF]"}
          >
            <img src={item.photo} alt="" />
            <div className={"mt-4 text-center"}>
              <div>{item.title}</div>
              {/* <MainButton className={"w-full"}>Baca</MainButton> */}
            </div>
          </div>
        ))}
      </div>
      <BackToHome />
    </Layout>
  );
};
export default DetailKategoriWayang;
