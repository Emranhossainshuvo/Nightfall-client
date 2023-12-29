import PropTypes from "prop-types";
import ProductItem from "../../shared/ProductItem/ProductItem";
import Cover from "../../shared/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ProductsCategory = ({ items, title, coverImg, heading }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title={title}></Cover>}
      <SectionTitle heading={heading}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <ProductItem key={item._id} item={item}></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default ProductsCategory;

ProductsCategory.propTypes = {
  items: PropTypes.object,
  title: PropTypes.string,
  coverImg: PropTypes.img,
  heading: PropTypes.string
};
