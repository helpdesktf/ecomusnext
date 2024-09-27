"use client";

import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
const images = [
  {
    src: "/images/shop/products/hmgoepprod24.jpg",
    alt: "",
    width: 713,
    height: 891,
  },
  {
    src: "/images/shop/products/hmgoepprod25.jpg",
    alt: "",
    width: 713,
    height: 891,
  },
  {
    src: "/images/shop/products/hmgoepprod26.jpg",
    alt: "",
    width: 713,
    height: 891,
  },
  {
    src: "/images/shop/products/hmgoepprod27.jpg",
    alt: "",
    width: 713,
    height: 891,
  },
  {
    src: "/images/shop/products/hmgoepprod28.jpg",
    alt: "",
    width: 713,
    height: 891,
  },
  {
    src: "/images/shop/products/hmgoepprod29.jpg",
    alt: "",
    width: 713,
    height: 891,
  },
  {
    src: "/images/shop/products/hmgoepprod30.jpg",
    alt: "",
    width: 713,
    height: 891,
  },
];

const products = [
  {
    href: "/images/shop/products/hmgoepprod24.jpg",
    dataPswpWidth: "770px",
    dataPswpHeight: "1075px",
    imgSrc: "/images/shop/products/hmgoepprod24.jpg",
    imgAlt: "",
    imgZoom: "/images/shop/products/hmgoepprod24.jpg",
    imgWidth: 713,
    imgHeight: 891,
  },
  {
    href: "/images/shop/products/hmgoepprod25.jpg",
    dataPswpWidth: "770px",
    dataPswpHeight: "1075px",
    imgSrc: "/images/shop/products/hmgoepprod25.jpg",
    imgAlt: "",
    imgZoom: "/images/shop/products/hmgoepprod25.jpg",
    imgWidth: 713,
    imgHeight: 891,
  },
  {
    href: "/images/shop/products/hmgoepprod26.jpg",
    dataPswpWidth: "770px",
    dataPswpHeight: "1075px",
    imgSrc: "/images/shop/products/hmgoepprod26.jpg",
    imgAlt: "",
    imgZoom: "/images/shop/products/hmgoepprod2.jpg",
    imgWidth: 713,
    imgHeight: 1070,
  },
  {
    href: "/images/shop/products/hmgoepprod27.jpg",
    dataPswpWidth: "770px",
    dataPswpHeight: "1075px",
    imgSrc: "/images/shop/products/hmgoepprod27.jpg",
    imgAlt: "",
    imgZoom: "/images/shop/products/hmgoepprod27.jpg",
    imgWidth: 713,
    imgHeight: 891,
  },
  {
    href: "/images/shop/products/hmgoepprod28.jpg",
    dataPswpWidth: "770px",
    dataPswpHeight: "1075px",
    imgSrc: "/images/shop/products/hmgoepprod28.jpg",
    imgAlt: "",
    imgZoom: "/images/shop/products/hmgoepprod28.jpg",
    imgWidth: 713,
    imgHeight: 891,
  },
  {
    href: "/images/shop/products/hmgoepprod29.jpg",
    dataPswpWidth: "770px",
    dataPswpHeight: "1075px",
    imgSrc: "/images/shop/products/hmgoepprod29.jpg",
    imgAlt: "",
    imgZoom: "/images/shop/products/hmgoepprod29.jpg",
    imgWidth: 713,
    imgHeight: 891,
  },
  {
    href: "/images/shop/products/hmgoepprod30.jpg",
    dataPswpWidth: "770px",
    dataPswpHeight: "1075px",
    imgSrc: "/images/shop/products/hmgoepprod30.jpg",
    imgAlt: "",
    imgZoom: "/images/shop/products/hmgoepprod30.jpg",
    imgWidth: 713,
    imgHeight: 891,
  },
];

export default function Slider6() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <>
        <Swiper
          className="swiper tf-product-media-thumbs other-image-zoom"
          direction="vertical"
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          spaceBetween={10}
          slidesPerView={5}
          breakpoints={{
            0: {
              direction: "horizontal",
            },
            1150: {
              direction: "vertical",
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide className="swiper-slide stagger-item" key={index}>
              <div className="item">
                <Image
                  className="lazyload"
                  data-src={image.src}
                  alt={image.alt}
                  src={image.src}
                  width={image.width}
                  height={image.height}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          className="swiper tf-product-media-main"
          id="gallery-swiper-started"
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs, Navigation]}
        >
          {products.map((product, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <a
                href={product.href}
                target="_blank"
                className="item"
                data-pswp-width={product.dataPswpWidth}
                data-pswp-height={product.dataPswpHeight}
              >
                <Image
                  className="tf-image-zoom lazyload"
                  data-zoom={product.imgZoom}
                  data-src={product.imgSrc}
                  alt={product.imgAlt}
                  src={product.imgSrc}
                  width={product.imgWidth}
                  height={product.imgHeight}
                />
              </a>
            </SwiperSlide>
          ))}

          <div className="swiper-button-next button-style-arrow thumbs-next" />
          <div className="swiper-button-prev button-style-arrow thumbs-prev" />
        </Swiper>
      </>
    </>
  );
}
