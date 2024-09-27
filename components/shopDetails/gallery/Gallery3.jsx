"use client";
import Image from "next/image";
import { useEffect } from "react";
import Drift from "drift-zoom";
import { Gallery, Item } from "react-photoswipe-gallery";

const productImages = [
  {
    id: "image-color-brown",

    src: "/images/shop/products/hmgoepprod.jpg",
    width: 713,
    height: 1070,
  },
  {
    id: "image-color-light-purple",

    src: "/images/shop/products/hmgoepprod2.jpg",
    width: 713,
    height: 1070,
  },
  {
    id: "image-color-light-green",

    src: "/images/shop/products/hmgoepprod3.jpg",
    width: 713,
    height: 1070,
  },
  {
    id: "image-color-light-green",

    src: "/images/shop/products/hmgoepprod4.jpg",
    width: 768,
    height: 1152,
  },
];

export default function Gallery3() {
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
  }, []);
  return (
    <>
      <Gallery>
        <div className="mb_10">
          <Item
            original="/images/shop/products/p-d1.png"
            thumbnail="/images/shop/products/p-d1.png"
            width={713}
            height={1070}
          >
            {({ ref, open }) => (
              <a className="item" onClick={open}>
                <Image
                  ref={ref}
                  className="tf-image-zoom lazyload"
                  data-zoom="/images/shop/products/hmgoepprod31.jpg"
                  data-src="/images/shop/products/hmgoepprod31.jpg"
                  alt=""
                  src="/images/shop/products/hmgoepprod31.jpg"
                  width={713}
                  height={1070}
                />
              </a>
            )}
          </Item>
        </div>
        <div className="">
          <div
            className="d-grid grid-template-columns-2 gap-10"
            id="gallery-started"
          >
            {productImages.map((image, index) => (
              <Item
                original={image.src}
                thumbnail={image.src}
                width={image.width}
                height={image.height}
                key={index}
              >
                {({ ref, open }) => (
                  <a className="item" onClick={open}>
                    <Image
                      className="radius-10 tf-image-zoom lazyload"
                      id={image.id}
                      ref={ref}
                      alt=""
                      data-zoom={image.src}
                      width={image.width}
                      height={image.height}
                      src={image.src} // Optional fallback for non-lazy loading
                    />
                  </a>
                )}
              </Item>
            ))}
          </div>
        </div>
      </Gallery>
    </>
  );
}
