import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./style.css";
const Varities = () => {
  return (
    <>
      <SectionTitle heading={"BEST SELLING"}></SectionTitle>
      <div data-aos="fade-up" className="flex justify-center gap-5 my-10">
        <div className="text-lg font-normal brdr p-2 hover:bg-[#FFE3E1] hover:cursor-pointer">
          <p>Painting</p>
        </div>
        <div className="text-lg font-normal brdr p-2 hover:bg-[#FFE3E1] hover:cursor-pointer">
          <p>Abstract art</p>
        </div>
        <div className="text-lg font-normal brdr p-2 hover:bg-[#FFE3E1] hover:cursor-pointer">
          <p>Oil painting</p>
        </div>
        <div className="text-lg font-normal brdr p-2 hover:bg-[#FFE3E1] hover:cursor-pointer">
          <p>Landscape</p>
        </div>
        <div className="text-lg font-normal brdr p-2 hover:bg-[#FFE3E1] hover:cursor-pointer">
          <p>Under $500</p>
        </div>
        <div className="text-lg font-normal brdr p-2 hover:bg-[#FFE3E1] hover:cursor-pointer">
          <p>Large works</p>
        </div>
        <div className=" brdr p-2 hover:bg-[#FFE3E1] hover:cursor-pointer">
          <p className="text-lg font-normal">New this week</p>
        </div>
        <div className="text-lg font-normal brdr p-2 hover:bg-[#FFE3E1] hover:cursor-pointer">
          Curated collections
        </div>
        <div className="text-lg font-normal brdr p-2 hover:bg-[#FFE3E1] hover:cursor-pointer">
          <p>Featured</p>
        </div>
        <div className="text-lg font-normal brdr p-2 hover:bg-[#FFE3E1] hover:cursor-pointer">
          <p>Sculpture</p>
        </div>
      </div>
    </>
  );
};

export default Varities;
