import Layout from "../../components/layouts/Layout";
import HomeNavbar from "../../components/navbars/HomeNavbar";
import SimpleDisplay from "../../components/products/SimpleDisplay";
import "../../index.css";
import SimpleCard from "../../components/cards/SimpleCard";
import SimpleCalendarCard from "../../components/cards/SimpleCalendarCard";
import SimpleTitle from "../../components/texts/SimpleTitle";
import SimpleDisplayNoImage from "../../components/products/SimpleDisplayNoImage";
import MainReview from "../../components/reviews/MainReview";
import { useHistory } from "react-router-dom";
import SocialIcon from "../../components/socials/SocialIcon";
import { useEffect, useState } from "react";
import axios from "axios";
import amigo from "../../assets/testi/amigo.png";
import mugi from "../../assets/testi/mugi.jpeg";
import sd from "../../assets/testi/sd.jpeg";
import sri from "../../assets/testi/sri.jpeg";
import ukdw from "../../assets/testi/ukdw.jpeg";

const Home = () => {
  const history = useHistory();
  const [kegiatan, setKegiatan] = useState([]);

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

  useEffect(() => {
    axios
      .get("https://omahwayangklaten.or.id/wp-json/wp/v2/posts/?categories=31")
      .then((res) => {
        setKegiatan(res.data);
        localStorage.setItem("home", JSON.stringify(res.data));
      }).catch(() => {
        let datas = localStorage.getItem("home")
        setKegiatan(JSON.parse(datas))
      })
  }, []);

  return (
    <Layout>
      <HomeNavbar />
      <div aria-label={"content"} className={"mt-4"}>
        <div
          aria-label={"slide-horizontal-content"}
          className={"md:text-center"}
        >
          <SimpleDisplay label={"Pelatihan"} />
        </div>
        <div aria-label={"cards"} className={"mt-8"}>
          <SimpleCard
            name={"About Us"}
            title={"Omah Wayang Klaten Mobile Website"}
            description={
              "Omah Wayang Klaten terbentuk atas dasar keprihatinan terhadap hidup, tumbuh dan berkembangnya budaya Jawa serta keinginan untuk mewujudkan sebuah pusat studi seni tradisional"
            }
            buttonLabel={"View More"}
            onClick={() => {
              history.push("/about");
            }}
          />
        </div>
        <SimpleCalendarCard />
        <div
          aria-label={"images-content"}
          className={"mt-8 grid md:grid-cols-2 grid-cols-1 gap-2"}
        >
          <div className={"grid grid-cols-1 md:grid-cols-3 gap-2"}>
            {kegiatan.map((item, index) => (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: item.content.rendered }}
              />
            ))}
          </div>
        </div>
        <div className={"mt-12"}>
          <div aria-label={"Jasa"}>
            <SimpleTitle>Jasa yang kami tawarkan </SimpleTitle>
          </div>
          <div className={"overflow-x-scroll flex flex-nowrap mt-4"}>
            {DATA.map((item, key) => (
              <SimpleDisplayNoImage
                onClick={() => {
                  getDetailJasa(item.slug);
                }}
              >
                {item.name}
              </SimpleDisplayNoImage>
            ))}
          </div>
        </div>
        <div aria-label={"Testimonial"} className={"mt-12"}>
          <div aria-label={"Jasa"}>
            <SimpleTitle>Testimonials</SimpleTitle>
          </div>
          <div className={"overflow-x-scroll flex flex-nowrap mt-4"}>
            <MainReview
              image={amigo}
              description={
                "Omah Wayang merupakan tempat pembelajaran bagi pecinta dan pemerhati budaya jawa serta menyediakan pembelajaran untuk wayang"
              }
              author={"Amigo Grup"}
            />
            <MainReview
              image={ukdw}
              description={
                "Pusat pembelajaran seni tradisi Jawa Tengah khususnya daerah Klaten yg bermanfaat untuk kelestarian budaya\n" +
                "anda dapat belajar kebudayaan"
              }
              author={"UKDW"}
            />
            <MainReview
              image={mugi}
              description={
                "Tempat untuk belajar budaya jawa, khususnya wayang dan karawitan. Banyak hal yang dapat disalurkan melalui Omah Wayang ini"
              }
              author={"Mugiono Kasido"}
            />
            <MainReview
              image={sri}
              description={
                "Kebudayaan memang haruslah dilestarikan. cocok untuk anak anak hingga orang tua yang ingin belajar tentang dunia seni."
              }
              author={"Hj. Sri Mulyani"}
            />
            <MainReview
              image={sd}
              description={
                "Sangat bagus untuk pembelajaran budaya wayang mulai dari awal sampai perkembangan. Cocok untuk pembelajaran bagi anak SD"
              }
              author={"SD Bareng N 1"}
            />
          </div>
        </div>
        <SocialIcon />
      </div>
    </Layout>
  );
};
export default Home;
