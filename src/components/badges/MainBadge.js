const MainBadge = (props) => {
  return (
    <span
      className={`text-sm py-1 px-2 bg-blue-50 font-medium text-blue-600 rounded-lg border border-blue-600 mr-2 ${props.className}`}
    >
      {props.children}
    </span>
  );
};
export default MainBadge;
