const SimpleTitle = ({ children, className, fontSize = "text-lg" }) => {
  return (
    <div>
      <div>
        <h1 className={`font-semibold ${className + " " + fontSize}`}>
          {children}
        </h1>
      </div>
    </div>
  );
};
export default SimpleTitle;
