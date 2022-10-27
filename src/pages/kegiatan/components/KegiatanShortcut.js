import MainIcon from "../../../components/badges/MainIcon";
import { useHistory } from "react-router-dom";
import subkegiatan from "../../../assets/banners/subkegiatan.png";

const KegiatanShortcut = ({ title, author, location, date }) => {
  const history = useHistory();

  const seeDetailActivity = (slug) => {
    history.push(`kegiatan/${slug}`);
  };

  return (
    <div className="p-2 h-max w-full rounded-3xl shadow-md mx-1">
      <div className="flex justify-between gap-2">
        <div className={"w-20 h-20 my-auto"}>
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={subkegiatan}
            alt="Images"
          />
        </div>
        <div className={"py-2 text-left"}>
          <p className="text-base font-semibold">{title}</p>
          <div className={"text-left mt-2"}>
            <p className="text-xs">{author}</p>
            <p className="text-xs">
              <span className={"font-semibold"}>{date}</span> | {location}
            </p>
          </div>
        </div>
        <div
          className={"mt-2"}
          onClick={() => {
            seeDetailActivity("seni-tari");
          }}
        >
          <MainIcon padding={"px-2 py-1"}>
            <i className={"fa-solid fa-arrow-right"}></i>
          </MainIcon>
        </div>
      </div>
    </div>
  );
};
export default KegiatanShortcut;
