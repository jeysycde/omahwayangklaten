const MainIcon = ({ children, padding = "p-3", onClick }) => {
  return (
    <span
      onClick={onClick}
      className={`${padding} bg-gray-100 mx-1 rounded-lg`}
    >
      {children}
    </span>
  );
};
export default MainIcon;
