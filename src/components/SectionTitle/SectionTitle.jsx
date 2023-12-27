import PropTypes from "prop-types";
import './styles.css'

const SectionTitle = ({ heading }) => {
  return (
    <>
      <div className="seven my-10">
        <h1>{heading}</h1>
      </div>
    </>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  heading: PropTypes.string,
};
