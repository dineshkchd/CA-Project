import ResHeader from "../ResponsiveMemu/Header";

const Hero = () => {
  return (

    <>
      <div className="desktop-view">
        <ResHeader />
        <div className="text-white">
          <p>Welcome To Purminder Kaur & Associates</p>
          <br />
          <button className="desktop-view-hero-btn">Get Advice</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
