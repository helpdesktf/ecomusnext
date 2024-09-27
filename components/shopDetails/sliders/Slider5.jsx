"use client";
import Image from "next/image";
import Drift from "drift-zoom";
import { useEffect, useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Gallery, Item } from "react-photoswipe-gallery";

const slidesThumbs = [
  {
    imgSrc: "/images/shop/products/hmgoepprod18.jpg",
    alt: "",
    width: 713,
    height: 713,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod19.jpg",
    alt: "",
    width: 1200,
    height: 1200,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod20.jpg",
    alt: "",
    width: 1200,
    height: 1200,
  },
  {
    imgSrc: "/images/shop/products/preview_images/img-3d-1.jpg",
    alt: "",
    width: 200,
    height: 200,
    is3D: true,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod21.jpg",
    alt: "",
    width: 1200,
    height: 1200,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod22.jpg",
    alt: "",
    width: 1080,
    height: 1080,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod23.jpg",
    alt: "",
    width: 1200,
    height: 1200,
  },
];

const slides = [
  {
    href: "/images/shop/products/hmgoepprod18.jpg",
    imgSrc: "/images/shop/products/hmgoepprod18.jpg",
    dataZoom: "/images/shop/products/hmgoepprod18.jpg",
    width: 713,
    height: 713,
    pswpWidth: "770px",
    pswpHeight: "1075px",
    isModel: false,
  },
  {
    href: "/images/shop/products/hmgoepprod19.jpg",
    imgSrc: "/images/shop/products/hmgoepprod19.jpg",
    dataZoom: "/images/shop/products/hmgoepprod19.jpg",
    width: 1200,
    height: 1200,
    pswpWidth: "770px",
    pswpHeight: "1075px",
    isModel: false,
  },
  {
    href: "/images/shop/products/hmgoepprod20.jpg",
    imgSrc: "/images/shop/products/hmgoepprod20.jpg",
    dataZoom: "/images/shop/products/hmgoepprod20.jpg",
    width: 1200,
    height: 1200,
    pswpWidth: "770px",
    pswpHeight: "1075px",
    isModel: false,
  },
  {
    isModel: true,
    modelSrc: "/images/shop/products/preview_images/dance-bag_3d.glb",
    posterSrc: "/images/shop/products/preview_images/img-3d-1.jpg",
    altText: "Alice Mini - Dusty Rose",
  },
  {
    href: "/images/shop/products/hmgoepprod21.jpg",
    imgSrc: "/images/shop/products/hmgoepprod21.jpg",
    dataZoom: "/images/shop/products/hmgoepprod21.jpg",
    width: 1200,
    height: 1200,
    pswpWidth: "770px",
    pswpHeight: "1075px",
    isModel: false,
  },
  {
    href: "/images/shop/products/hmgoepprod22.jpg",
    imgSrc: "/images/shop/products/hmgoepprod22.jpg",
    dataZoom: "/images/shop/products/hmgoepprod22.jpg",
    width: 1080,
    height: 1080,
    pswpWidth: "770px",
    pswpHeight: "1075px",
    isModel: false,
  },
  {
    href: "/images/shop/products/hmgoepprod23.jpg",
    imgSrc: "/images/shop/products/hmgoepprod23.jpg",
    dataZoom: "/images/shop/products/hmgoepprod23.jpg",
    width: 1200,
    height: 1200,
    pswpWidth: "770px",
    pswpHeight: "1075px",
    isModel: false,
  },
];

export default function Slider5() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Dynamically import @google/model-viewer
      import("@google/model-viewer").then(() => {
        // Module is imported, you can use model-viewer functionality here
      });
    }
  }, []);
  useEffect(() => {
    // Function to initialize Drift
    const imageZoom = () => {
      const driftAll = document.querySelectorAll(".tf-image-zoom");
      const pane = document.querySelector(".tf-zoom-main");

      driftAll.forEach((el) => {
        new Drift(el, {
          zoomFactor: 2,
          paneContainer: pane,
          inlinePane: false,
          handleTouch: false,
          hoverBoundingBox: true,
          containInline: true,
        });
      });
    };

    // Call the function
    imageZoom();
    const zoomElements = document.querySelectorAll(".tf-image-zoom");

    const handleMouseOver = (event) => {
      const parent = event.target.closest(".section-image-zoom");
      if (parent) {
        parent.classList.add("zoom-active");
      }
    };

    const handleMouseLeave = (event) => {
      const parent = event.target.closest(".section-image-zoom");
      if (parent) {
        parent.classList.remove("zoom-active");
      }
    };

    zoomElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners on component unmount
    return () => {
      zoomElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <Swiper
        direction="vertical"
        spaceBetween={10}
        slidesPerView={7.1}
        className="swiper tf-product-media-thumbs other-image-zoom"
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
        {slidesThumbs.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className={`item ${slide.is3D ? "position-relative" : ""}`}>
              {slide.is3D && (
                <div className="wrap-btn-viewer">
                  <i className="icon-btn3d"></i>
                </div>
              )}
              <Image
                className="lazyload"
                data-src={slide.imgSrc}
                alt={slide.alt}
                src={slide.imgSrc}
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
          className="swiper tf-product-media-main"
          id="gallery-swiper-started"
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs, Navigation]}
        >
          {slides.map((slide, index) =>
            slide.isModel ? (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="item">
                  <div className="tf-model-viewer">
                    <model-viewer
                      reveal="auto"
                      toggleable="true"
                      data-model-id="36168614805808"
                      src={slide.modelSrc}
                      camera-controls="true"
                      data-shopify-feature="1.12"
                      alt={slide.altText}
                      poster={slide.posterSrc}
                      className="tf-model-viewer-ui disabled"
                      tabindex="1"
                      data-js-focus-visible=""
                      ar-status="not-presenting"
                    ></model-viewer>
                    {/* <div className="tf-model-viewer-ui-button">
                    <div className="wrap-btn-viewer">
                      <i className="icon-btn3d"></i>
                    </div>
                  </div> */}
                  </div>
                </div>
              </SwiperSlide>
            ) : (
              <SwiperSlide className="swiper-slide" key={index}>
                <Item
                  original={slide.imgSrc}
                  thumbnail={slide.imgSrc}
                  width={slide.width}
                  height={slide.height}
                >
                  {({ ref, open }) => (
                    <a
                      href={slide.href}
                      onClick={open}
                      className="item"
                      data-pswp-width={slide.pswpWidth}
                      data-pswp-height={slide.pswpHeight}
                    >
                      <Image
                        ref={ref}
                        className="tf-image-zoom lazyload"
                        data-zoom={slide.dataZoom}
                        data-src={slide.imgSrc}
                        alt=""
                        src={slide.imgSrc}
                        width={slide.width}
                        height={slide.height}
                      />
                    </a>
                  )}
                </Item>
              </SwiperSlide>
            )
          )}
          <div className="swiper-button-next button-style-arrow thumbs-next"></div>
          <div className="swiper-button-prev button-style-arrow thumbs-prev"></div>
        </Swiper>{" "}
      </Gallery>
    </>
  );
}
