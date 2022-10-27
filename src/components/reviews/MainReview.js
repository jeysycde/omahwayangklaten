const MainReview = ({ description, author, image }) => {
  return (
    <>
      <div className="p-4 h-42 w-80 rounded-3xl shadow-md mx-1">
        <div className="flex gap-2">
          <div className={"w-48 h-24"}>
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={image}
              alt="Image"
            />
          </div>
          <div className={"py-2"}>
            <p className="text-xs">{description}</p>
            <div className={"text-right mt-6"}>
              <h1 className="text-base">{author}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainReview;
