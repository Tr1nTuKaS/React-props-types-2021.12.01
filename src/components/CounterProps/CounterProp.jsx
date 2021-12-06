import PropTypes, { oneOfType } from "prop-types";
import { useState } from "react";

function CounterProp(props) {
  const [localCounterVal, setLocalCounterVal] = useState(props.initVal);

  return (
    <div>
      <h2>Counter name:{props.name} </h2>
      <h3>Counter initial: {localCounterVal + 5}</h3>
      <h2>{props.specialVal}</h2>
      <h2 style={{ color: props.selectVal }}> {props.selectVal}</h2>
      <h4>
        {props.favNumbers.map((n) => (
          <span key={n}>{n + 2} -- </span>
        ))}
      </h4>
      <h4> </h4>
    </div>
  );
}
//default props
CounterProp.defaultProps = {
  name: "Usual",
};

//check props
CounterProp.prototype = {
  name: PropTypes.string.isRequired,
  initVal: PropTypes.isRequired,
  specialVal: PropTypes.node.isRequired,
  selectVal: PropTypes.oneOf(["red", "green", "blue"]),
  favNumbenrs: PropTypes.arrayOf(PropTypes.number),
  arrayOfNumbersOrStrings: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
};
export default CounterProp;

// function Button({name='blue'}) {
//     return (
//         <button>{name}</button>
//      );
// }

// export default Button;
