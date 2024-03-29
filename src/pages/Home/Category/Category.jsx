import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import "aos/dist/aos.css";
const Category = () => {
  
  const pigments = 'pigments'; 
  const canvas = 'canvas'; 
  const brushes = 'brushes'; 
  const crafting = 'crafting'; 
  const sketchbooks = 'sketchbooks';
  const sculpture = 'sculpture'; 

  return (
    <div className="my-10">
      <SectionTitle heading="Categories"></SectionTitle>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        <div
          data-aos="fade-up"
          className="card  card-compack  p-2 bg-base-100 shadow-xl"
        >
          <figure>
            <img
              src="https://i.ibb.co/nB2z957/mixed-orange-blue-paint-with-brush.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pigmentssssssssssssssssssssssssss</h2>
            <p>Explore vibrant colors for diverse artistic techniques.</p>
            <div className="card-actions justify-center">
              <Link to={`/order/${pigments}`}>
                <button className="btn bg-[#FFD1D1] hover:bg-[#FFE3E1] text-black">
                  View all
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="card  card-compack  px-2 bg-base-100 shadow-xl"
        >
          <figure>
            <img
              src="https://i.ibb.co/LrzYwPT/various-brushes.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Brushes</h2>
            <p>Precision and finesse with a range of high-quality brushes.</p>
            <div className="card-actions justify-center">
              <Link to={`/order/${brushes}`}>
                <button className="btn bg-[#FFD1D1] hover:bg-[#FFE3E1] text-black">
                  View all
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="card  card-compack  px-2 bg-base-100 shadow-xl"
        >
          <figure>
            <img
              src="https://i.ibb.co/L5mGpnY/top-view-notebook-with-watercolor-macarons.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sketchbooks</h2>
            <p>Premium sketchbooks for versatile and inspiring drawing.</p>
            <div className="card-actions justify-center">
              <Link to={`/order/${sketchbooks}`}>
                <button className="btn bg-[#FFD1D1] hover:bg-[#FFE3E1] text-black">
                  View all
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="card  card-compack  px-2 bg-base-100 shadow-xl"
        >
          <figure>
            <img
              src="https://i.ibb.co/LxXtSQc/colorful-different-scrapbook-card-with-decorative-elements.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Crafting</h2>
            <p>Dive into DIY projects with diverse crafting materials.</p>
            <div className="card-actions justify-center">
              <Link to={`/order/${crafting}`}>
                <button className="btn bg-[#FFD1D1] hover:bg-[#FFE3E1] text-black">
                  View all
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="card  card-compack  px-2 bg-base-100 shadow-xl"
        >
          <figure>
            <img
              src="https://i.ibb.co/1qnJtNZ/blank-white-frame-with-pink-border-colored-pencils-glass-wooden-desk.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Canvas</h2>
            <p>Elevate your art with quality canvases.</p>
            <div className="card-actions justify-center">
              <Link to={`/order/${canvas}`}>
                <button className="btn bg-[#FFD1D1] hover:bg-[#FFE3E1] text-black">
                  View all
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="card  card-compack  px-2 bg-base-100 shadow-xl"
        >
          <figure>
            <img
              src="https://i.ibb.co/Qm4bPSd/beautiful-roman-figure-carving.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sculpture</h2>
            <p>Shape and mold with tools for 3D creations.</p>
            <div className="card-actions justify-center">
              <Link to={`/order/${sculpture}`}>
                <button className="btn bg-[#FFD1D1] hover:bg-[#FFE3E1] text-black">
                  View all
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
