import Layout from "../../components/layouts/Layout";
import SimpleTitle from "../../components/texts/SimpleTitle";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SocialIcon from "../../components/socials/SocialIcon";
import BackToHome from "../../components/navbars/BackToHome";
import pepadi from "../../assets/supports/pepadi.png";
import dewan from "../../assets/supports/dewan.jpeg";
import klaten from "../../assets/supports/klaten.png";
import pkmb from "../../assets/supports/pkbm.jpeg";
import saving from "../../assets/supports/saving.jpeg";
import amigo from "../../assets/supports/amigo.png";
import tel from "../../assets/banners/socials/tel.png";

import piagam1 from "../../assets/penghargaan/1.jpg";
import piagam2 from "../../assets/penghargaan/2.jpg";
import piagam3 from "../../assets/penghargaan/3.jpg";

const About = () => {
  return (
    <Layout bottom={false} navbar={true} title={"About Us"}>
      <div className={"mt-8"}>
        <div className={"rounded-2xl"}>
          <ReactPlayer width={"100%"} url={"https://youtu.be/BPVqUnVsRlE"} />
        </div>
        <div className={"mt-12 bg-white p-4 shadow-lg rounded-2xl"}>
          <SimpleTitle className={"text-blue-400"} fontSize={"text-xs"}>
            Sekilas mengenai sejarah biografi kami
          </SimpleTitle>
          <SimpleTitle fontSize={"text-sm my-2"}>Sejarah Kami</SimpleTitle>
          <p className={"text-xs leading-loose"}>
            Omah Wayang Klaten terbentuk atas dasar keprihatinan terhadap hidup,
            tumbuh, dan berkembangnya budaya Jawa serta keinginan untuk
            mewujudkan sebuah pusat studi seni tradisional adalah daya utama
            yang mendorong berdirinya kebon pasinaon Omah Wayang Klaten.
          </p>
          <span className={"font-semibold text-xs"}>See All</span>
        </div>
        <div className={"mt-12 grid grid-cols-2 gap-4"}>
          <div className={"p-4 shadow-md bg-white rounded-2xl"}>
            <SimpleTitle className={"uppercase"}>Visi</SimpleTitle>
            <p className={"mt-2 text-xs"}>
              Membangun manusia pembelajar, berdayaguna, dan berbudaya.
            </p>
          </div>
          <div className={"p-4 shadow-md bg-white rounded-2xl"}>
            <SimpleTitle className={"uppercase"}>Misi</SimpleTitle>
            <p className={"mt-2 text-xs whitespace-pre-line"}>
              1. Melaksanakan kegiatan pelestarian, pengembangan, pemanfaatan
              sumber daya lingkungan berbasis seni budaya. 2. Meregenerasi seni
              tradisi.
            </p>
          </div>
        </div>
        <div className={"mt-12"}>
          <Carousel
            autoFocus={true}
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            showArrows={false}
            centerMode={true}
            showIndicators={false}
          >
            <div className={"mx-2"}>
              <img className={"rounded-xl"} src={piagam1} alt="" />
            </div>
            <div className={"mx-2"}>
              <img className={"rounded-xl"} src={piagam2} alt="" />
            </div>
            <div className={"mx-2"}>
              <img className={"rounded-xl"} src={piagam3} alt="" />
            </div>
          </Carousel>
        </div>
        <div className={"mt-12 p-4 shadow-lg"}>
          <SimpleTitle>Support</SimpleTitle>
          <div className={"mt-4 grid grid-cols-3 gap-4"}>
            <div className={"w-full h-full"}>
              <img
                className={"w-full h-full rounded-full border object-cover"}
                src={pepadi}
                alt=""
              />
            </div>
            <div className={"w-full h-full"}>
              <img
                className={"rounded-full border object-cover"}
                src={klaten}
                alt=""
              />
            </div>
            <div className={"w-full h-full"}>
              <img
                className={"rounded-full border object-cover"}
                src={dewan}
                alt=""
              />
            </div>
            <div className={"w-full h-full"}>
              <img
                className={"rounded-full border object-cover"}
                src={pkmb}
                alt=""
              />
            </div>
            <div className={"w-full h-full"}>
              <img
                className={"rounded-full border object-cover"}
                src={saving}
                alt=""
              />
            </div>
            <div className={"w-full h-full"}>
              <img
                className={"rounded-full border object-cover"}
                src={amigo}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={"mt-12 bg-white p-4 shadow-lg rounded-2xl"}>
          <SimpleTitle className={"text-blue-400"} fontSize={"text-xs"}>
            Silakan ajukan pertanyaan
          </SimpleTitle>
          <SimpleTitle fontSize={"text-sm my-2"}>Contact Us</SimpleTitle>
          <p className={"text-xs leading-loose"}>
            Silakan ajukan pertanyaan mengenai Omah Wayang Klaten melalui kolom
            di bawah ini. Tak perlu segan untuk memberikan masukan, saran, serta
            kritik kepada kami. Setiap pertanyaan serta komentar yang masuk akan
            dibalas melalui kontak kami akan segera kami proses
          </p>
          <div>
            <span className={"flex gap-2 items-center mt-4"}>
              <img
                className={"rounded-full border object-cover w-12 h-12"}
                src={tel}
                alt=""
              />
              <span className={"font-semibold text-xs"}>+622723350755</span>
            </span>
          </div>
        </div>
        <SocialIcon />
        <div className={"mt-4"}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.6119508457527!2d110.58648401498603!3d-7.724716178688457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a444197d25319%3A0xa6dd7bd1b9ea8957!2sOmah%20Wayang%20Klaten!5e0!3m2!1sen!2sid!4v1664360743426!5m2!1sen!2sid"
            className={"w-full h-64 mb-32"}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <BackToHome />
    </Layout>
  );
};
export default About;
