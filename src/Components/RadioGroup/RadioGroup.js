import "./radioGroup.css";

export const RadioGroup = (props) => {
  const { data, groupName, onChange } = props;

  return (
    <div className="radio-wrapper">
      <p className="radio-title">{groupName}</p>
      {data.map((d) => {
        const { id, value } = d;
        return (
          <div key={id}>
            <input
              id={id}
              type="radio"
              name={groupName}
              value={value}
              onChange={(e) => onChange(e.target.id)}
            />
            <label htmlFor={id}>{value}</label>
          </div>
        );
      })}
    </div>
  );
};
