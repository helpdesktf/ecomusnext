"use client";
import Drift from "drift-zoom";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperSlidesThumbs = [
  {
    imgSrc: "/images/shop/products/hmgoepprod31.jpg",
    alt: "",
    width: 713,
    height: 1070,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod.jpg",
    alt: "img-compare",
    width: 713,
    height: 1070,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod2.jpg",
    alt: "img-compare",
    width: 713,
    height: 1070,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod3.jpg",
    alt: "img-compare",
    width: 713,
    height: 1070,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod4.jpg",
    alt: "img-compare",
    width: 768,
    height: 1152,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod5.jpg",
    alt: "img-compare",
    width: 713,
    height: 1070,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod6.jpg",
    alt: "img-compare",
    width: 768,
    height: 1152,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod7.jpg",
    alt: "img-compare",
    width: 713,
    height: 1070,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod8.jpg",
    alt: "img-compare",
    width: 713,
    height: 1070,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod9.jpg",
    alt: "img-compare",
    width: 768,
    height: 1152,
  },
];

const swiperSlides = [
  {
    imgSrc: "/images/shop/products/hmgoepprod31.jpg",
    href: "/images/shop/products/p-d1.png",
    width: 770,
    height: 1075,
    dataZoom: "/images/shop/products/hmgoepprod31.jpg",
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod.jpg",
    href: "/images/shop/products/hmgoepprod.jpg",
    width: 713,
    height: 1070,
    dataZoom: "/images/shop/products/hmgoepprod.jpg",
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod2.jpg",
    href: "/images/shop/products/hmgoepprod2.jpg",
    width: 713,
    height: 1070,
    dataZoom: "/images/shop/products/hmgoepprod2.jpg",
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod3.jpg",
    href: "/images/shop/products/hmgoepprod3.jpg",
    width: 713,
    height: 1070,
    dataZoom: "/images/shop/products/hmgoepprod3.jpg",
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod4.jpg",
    href: "/images/shop/products/hmgoepprod4.jpg",
    width: 768,
    height: 1152,
    dataZoom: "/images/shop/products/hmgoepprod4.jpg",
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod5.jpg",
    href: "/images/shop/products/hmgoepprod5.jpg",
    width: 713,
    height: 1070,
    dataZoom: "/images/shop/products/hmgoepprod5.jpg",
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod6.jpg",
    href: "/images/shop/products/hmgoepprod6.jpg",
    width: 768,
    height: 1152,
    dataZoom: "/images/shop/products/hmgoepprod6.jpg",
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod7.jpg",
    href: "/images/shop/products/hmgoepprod7.jpg",
    width: 713,
    height: 1070,
    dataZoom: "/images/shop/products/hmgoepprod7.jpg",
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod8.jpg",
    href: "/images/shop/products/hmgoepprod8.jpg",
    width: 713,
    height: 1070,
    dataZoom: "/images/shop/products/hmgoepprod8.jpg",
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod9.jpg",
    href: "/images/shop/products/hmgoepprod9.jpg",
    width: 768,
    height: 1152,
    dataZoom: "/images/shop/products/hmgoepprod9.jpg",
  },
];

export default function Slider1ZoomMagnifier() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    // Function to initialize Drift
    const imageZoom = () => {
      const driftAll = document.querySelectorAll(".tf-image-zoom-magnifier");

      driftAll.forEach((el) => {
        new Drift(el, {
          zoomFactor: 2,
          inlinePane: true,
          containInline: false,
          inlinePane: 35,
          paneClass: "drift-pane",
        });
      });
    };

    // Call the function
    imageZoom();
    document.body.classList.add("zoom-magnifier-containing");
    // Optionally, clean up if necessary
    return () => {
      document.body.classList.remove("zoom-magnifier-containing");
      // Clean up logic if required
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <Swiper
        direction="vertical"
        spaceBetween={10}
        slidesPerView={6}
        className="tf-product-media-thumbs other-image-zoom"
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        breakpoints={{
          0: {
            direction: "horizontal",
          },
          1150: {
            direction: "vertical",
          },
        }}
      >
        {swiperSlidesThumbs.map((slide, index) => (
          <SwiperSlide key={index} className="stagger-item">
            <div className="item">
              <Image
                className="lazyload"
                data-src={slide.imgSrc}
                alt={slide.alt}
                src={slide.imgSrc} // Optional fallback for non-lazy loading
                width={slide.width}
                height={slide.height}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Gallery>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="tf-product-media-main tf-product-zoom-inner"
          id="gallery-swiper-started"
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs, Navigation]}
        >
          {swiperSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Item
                original={slide.imgSrc}
                thumbnail={slide.imgSrc}
                width={slide.width}
                height={slide.height}
              >
                {({ ref, open }) => (
                  <a
                    className="item"
                    data-pswp-width={slide.width}
                    data-pswp-height={slide.height}
                    onClick={open}
                  >
                    <Image
                      className="tf-image-zoom-magnifier ls-is-cached lazyloaded"
                      data-zoom={slide.dataZoom}
                      data-src={slide.imgSrc}
                      ref={ref}
                      alt=""
                      width={slide.width}
                      height={slide.height}
                      src={slide.imgSrc} // Optional fallback for non-lazy loading
                    />
                  </a>
                )}
              </Item>
            </SwiperSlide>
          ))}

          {/* Navigation buttons */}
          <div className="swiper-button-next button-style-arrow thumbs-next"></div>
          <div className="swiper-button-prev button-style-arrow thumbs-prev"></div>
        </Swiper>
      </Gallery>
    </>
  );
}
