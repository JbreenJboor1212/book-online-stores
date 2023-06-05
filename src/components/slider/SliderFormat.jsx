const SliderFormat = (props) => {
  const { x } = props;
  return (
    <div className="slide first-slide">
      <div className="slide-img-wrapper">
        <img src={x} alt="" />
      </div>
      <div className="slide-info-wrapper">
        <h1 className="slide-info-title">Book Store</h1>
        <p className="slide-info-desc">
          It's not just reading , lt's living the adventure.
        </p>
      </div>
    </div>
  );
};

export default SliderFormat;
