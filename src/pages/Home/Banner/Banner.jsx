import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const Banner = () => {
  return (
    <div>
      <Flicking
        align="prev"
        circular={true}
        onMoveEnd={(e) => {
          console.log(e);
        }}
      >
        <img className="w-full h-[90vh]" src="https://i.ibb.co/k5ZxVhz/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai.jpg" alt="" />
        <img className="w-full h-[90vh]" src="https://i.ibb.co/h8jZcd2/flat-tree-silhouette-isolated-white-generative-ai.jpg" alt="" />
        <img className="w-full h-[90vh]" src="https://i.ibb.co/YhyT7wZ/world-environment-earth-day-concept-generative-ai.jpg" alt="" />
        <img className="w-full h-[90vh]" src="https://i.ibb.co/FgxSLBz/abstract-design-with-colorful-patterns-nature-leaf-generated-by-ai.jpg" alt="" />
        <img className="w-full h-[90vh]" src="https://i.ibb.co/jySChYY/vibrant-colors-explode-messy-watercolor-blob-generated-by-ai.jpg" alt="" />
        <img className="w-full h-[90vh]" src="https://i.ibb.co/ZNFkvYz/31757246-7875723.jpg" alt="" />
      </Flicking>
    </div>
  );
};

export default Banner;
