import PropTypes from "prop-types";
import './styles.css'

const SectionTitle = ({ heading }) => {
  return (
    <>
      <div data-aos="fade-up" className="seven text-gray-400 my-10">
        <h1>{heading}</h1>
      </div>
    </>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  heading: PropTypes.string,
};
