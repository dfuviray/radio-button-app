import "./container.css";

export const Container = (props) => {
  const { children } = props;
  return (
    <section className="section-wrapper">
      <div className="wrapper">{children}</div>
    </section>
  );
};
