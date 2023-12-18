import Banner from "../Components/Home/Banner";
import Brands from "../Components/Home/Brands";
import Intro from "../Components/Home/Intro";
import Explore from "../Components/Home/Explore";
import Stories from "../Components/Home/Stories";
const Home = () => {
  return (
    <div>
      <Banner />
      <div className="otherContents" style={{ position: "relative" }}>
        <section>
          <Intro />
        </section>
        <section
          style={{
            position: "sticky",
            top: "0",
            zIndex: "-1",
          }}
        >
          <Explore />
        </section>
        <section style={{ height: "max-content" }}>
          <Stories />
        </section>
        <section style={{ height: "max-content" }}>
          <Brands />
        </section>
      </div>
    </div>
  );
};

export default Home;
