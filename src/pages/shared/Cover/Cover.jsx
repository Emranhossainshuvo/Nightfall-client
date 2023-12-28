import PropTypes from "prop-types";

const Cover = ({ img, title }) => {
  return (
    <>
      <div  data-aos="fade-up"
        className="hero h-[900px]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay  bg-opacity-60"></div>
        <div data-aos="fade-up" className="hero-content text-center text-neutral-content">
          <div data-aos="fade-up" className="max-w-md">
            <h1 data-aos="fade-up" className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p data-aos="fade-up" className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cover;

Cover.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string
};
