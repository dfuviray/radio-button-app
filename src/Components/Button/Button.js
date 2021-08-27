import "./button.css";
export const Button = (props) => {
  const { children, ...res } = props;
  return (
    <button {...res} className="button">
      {children}
    </button>
  );
};
