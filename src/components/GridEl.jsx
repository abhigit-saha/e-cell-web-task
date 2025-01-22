import PropTypes from "prop-types";
function GridEl({ red, index }) {
  return (
    <div
      className={`aspect-square w-full rounded-lg bg-blue-900 ${
        red == 1 && "bg-red-600"
      } ${index == 8 && "bg-red-800"}`}
    />
  );
}
GridEl.propTypes = {
  red: PropTypes.number.isRequired, // Define the expected type of the 'red' prop
  index: PropTypes.number.isRequired, // Define the expected type of the 'index' prop
};

export default GridEl;
