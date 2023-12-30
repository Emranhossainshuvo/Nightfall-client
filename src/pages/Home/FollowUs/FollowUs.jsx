const FollowUs = () => {
  return (
    <div data-aos="fade-up" className="my-10 text-center">
      <div className="my-5">
        <h1 className="text-2xl font-medium">Connect with us</h1>
        <hr />
      </div>
      <div className="flex justify-around">
        <div>
          <h1>Follow us on social media</h1>
          <div className="flex">
            <img src="https://i.ibb.co/KhzPNSQ/icons8-facebook-50.png" alt="" />
            <img
              src="https://i.ibb.co/VBGZHN0/icons8-instagram-50.png"
              alt=""
            />
            <img src="https://i.ibb.co/257wKk3/icons8-twitter-50.png" alt="" />
            <img src="https://i.ibb.co/kyj51JY/icons8-linkedin-50.png" alt="" />
          </div>
        </div>
        <div>
          <h3>Join our mailing list.</h3>
          <p>
            Subscribe for updates about our events, artists and new works for
            sale.
          </p>
          <div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="h-12 w-24 text-white bg-black">SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
