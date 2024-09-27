import React from "react";

export default function AccountAddress() {
  return (
    <div className="my-account-content account-address">
      <div className="">
        <div>
          <h6 className="mb_20">Default</h6>
          <p>themesflat</p>
          <p>1234 Fashion Street, Suite 567</p>
          <p>New York</p>
          <p>info@fashionshop.com</p>
          <p className="mb_10">(212) 555-1234</p>
          <div className="d-flex gap-10">
            <a
              href="#"
              className="tf-btn btn-fill animate-hover-btn rounded-0 justify-content-center"
            >
              <span>Edit</span>
            </a>
            <a
              href="#"
              className="tf-btn btn-outline animate-hover-btn rounded-0 justify-content-center"
            >
              <span>Delete</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
