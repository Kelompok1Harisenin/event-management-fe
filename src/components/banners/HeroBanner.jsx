import PropTypes from "prop-types";
import { useRef } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroBanner = ({ slides }) => {
  const swipeInstance = useRef(null);

  const handlePrevClick = () => {
    if (swipeInstance.current !== null) {
      swipeInstance.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swipeInstance.current !== null) {
      swipeInstance.current.slideNext();
    }
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <img src={slide.image} alt={slide.title} />
          </SwiperSlide>
        ))}

        {/* Custom Prev Button */}
        <div
          className="swiper-button-prev z-[50] absolute top-1/2 left-4 transform -translate-y-1/2 bg-white opacity-50 border rounded-full hover:opacity-80"
          onClick={handlePrevClick}
        >
          <FaAngleLeft className="w-6 h-6 md:w-12 md:h-12 text-orange-400 hover:text-orange-500" />
        </div>

        {/* Custom Next Button */}
        <div
          className="swiper-button-next z-[50] absolute top-1/2 right-4 transform -translate-y-1/2 bg-white opacity-50 border rounded-full hover:opacity-80"
          onClick={handleNextClick}
        >
          <FaAngleRight className="w-6 h-6 md:w-12 md:h-12 text-orange-400 hover:text-orange-500" />
        </div>
      </Swiper>
    </>
  );
};

HeroBanner.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HeroBanner;
