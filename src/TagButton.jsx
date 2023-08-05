/* eslint-disable react/prop-types */
const TagButton = ({ name, handlerSetTag }) => {
  return (
    <button onClick={() => handlerSetTag(name)} className="button">
      {name.toUpperCase()}
    </button>
  );
};

export default TagButton;
