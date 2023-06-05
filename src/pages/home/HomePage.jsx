import BookSlider from "../../components/BookSlider/BookSlider";
import HeadingTitle from "../../components/BookSlider/HeadnigTitle";
import Services from "../../components/services/Services";
import Slider from "../../components/slider/Slider";
import { books } from "../../data/books";

const HomePage = () => {
  return (
    <div className="home">
      <Slider />
      <Services />
      <HeadingTitle title="Most gifted" />
      <BookSlider data={books} />
      <HeadingTitle title="Best seller" />
      <BookSlider data={books} />
      <HeadingTitle title="Most wished for" />
      <BookSlider data={books} />
    </div>
  );
};

export default HomePage;
