import SimpleImageSlider from "react-simple-image-slider";
import "./App.css";

const images = [
  {
    url: "https://media.istockphoto.com/photos/successful-shopping-a-woman-shopaholic-opening-the-car-door-to-load-a-picture-id1310991531?b=1&k=20&m=1310991531&s=170667a&w=0&h=m9mKJbDUbIt0uPcLYLNsl4Q3ZcxjDzFsIL6ejJMkEHg=",
  },
  {
    url: "https://media.istockphoto.com/photos/hand-of-a-woman-with-vegetables-and-bread-with-eco-bag-picture-id1324626156?b=1&k=20&m=1324626156&s=170667a&w=0&h=OWi7Tiru6oKtrej8mBOscKfKGQQOyTOZlZbS2NbWnRI=",
  },
  {
    url: "https://media.istockphoto.com/photos/flying-shopping-cart-with-shopping-bags-on-a-pink-background-picture-id1292443598?b=1&k=20&m=1292443598&s=170667a&w=0&h=_MM45Mxfq5PXtEEYpuMbMunr3u9YRQK8jgxQTo8UhKY=",
  },
  {
    url: "https://media.istockphoto.com/photos/man-at-the-shopping-picture-id868718238?k=20&m=868718238&s=612x612&w=0&h=w42q_p1qak9lhVhXKDw1r964uV-AmzSSzC0UsMlMARQ=",
  },
];

export const Slider = () => {
  return (
    <div>
      <h1 className="NewArrivals">New Season Arrivals</h1>
      <SimpleImageSlider
        width={1400}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={0.5}
        autoPlay={true}
      />
    </div>
  );
};
