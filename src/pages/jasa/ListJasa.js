import Layout from "../../components/layouts/Layout";
import SimpleTitle from "../../components/texts/SimpleTitle";
import SimpleDisplayNoImage from "../../components/products/SimpleDisplayNoImage";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ListJasa = () => {
  const history = useHistory();
  const DATA = [
    {
      name: "Fasilitas",
      slug: "fasilitas",
    },
    {
      name: "Sarana Prasarana",
      slug: "sarana-prasarana",
    },
    {
      name: "Produk Kerajinan",
      slug: "produk-kerajinan",
    },
    {
      name: "Produk Jasa",
      slug: "produk-jasa",
    },
    {
      name: "Diklat",
      slug: "diklat",
    },
  ];

  const getDetailJasa = (params) => {
    if (params === "diklat") return history.push("/jasa/diklat/detail");

    return history.push(`/jasa/${params}`);
  };

  return (
    <Layout navbar={true} title={"Jasa"}>
      <div className={"mt-12"} aria-label={"Jasa"}>
        <SimpleTitle className={"uppercase"}>Category</SimpleTitle>
      </div>
      <div className={"mt-4 grid grid-cols-2 gap-4"}>
        {DATA.map((item, key) => (
          <SimpleDisplayNoImage
            key={key}
            onClick={() => {
              getDetailJasa(item.slug);
            }}
            width={"w-full"}
          >
            {item.name}
          </SimpleDisplayNoImage>
        ))}
      </div>
    </Layout>
  );
};
export default ListJasa;
