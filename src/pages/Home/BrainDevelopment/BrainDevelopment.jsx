import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const BrainDevelopment = () => {
  return (
    <>
      <SectionTitle heading="Kids Development"></SectionTitle>
      <div className="flex justify-center my-10 gap-4">
        <div>
          <img
            src="https://cdn.chalkpencil.com/wp-content/uploads/2022/01/STEAM-1-1.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="flex gap-5">
            <div>
              <img
                src="https://cdn.chalkpencil.com/wp-content/uploads/2022/01/ARTS-5-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cdn.chalkpencil.com/wp-content/uploads/2022/01/CRAFTS-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="mt-5">
            <img
              src="https://cdn.chalkpencil.com/wp-content/uploads/2022/01/Wooden.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrainDevelopment;
