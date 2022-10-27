import facebook from "../../assets/banners/socials/fb.png";
import yt from "../../assets/banners/socials/yt.png";
import ig from "../../assets/banners/socials/ig.png";
import email from "../../assets/banners/socials/email.png";

const SocialIcon = () => {
  return (
    <div aria-label={"Kontak"} className={"mt-12 mb-24"}>
      <div className={"grid grid-cols-2 md:grid-cols-4 gap-2"}>
        <div>
          <img  onClick={() => window.open( 'https://id-id.facebook.com/omahwayang.klaten')} src={facebook} alt="Facebook" />
        </div>
        <div>
          <img onClick={() => window.open( 'https://www.youtube.com/channel/UCpMv4Mna0H7PMnOgIw3e9Vw')} src={yt} alt="Youtube" />
        </div>
        <div>
          <img onClick={() => window.open( 'https://www.instagram.com/omahwayangklaten/?hl=id')} src={ig} alt="Instagram" />
        </div>
        <div>
          <img onClick={() => window.open( 'https://mail.google.com/mail/u/0/.com')} src={email} alt="Email" />
        </div>
      </div>
    </div>
  );
};
export default SocialIcon;