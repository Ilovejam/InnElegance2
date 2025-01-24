"use client";

import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({ data, colstyle }) => {
  return (
    <>
      {data.map((listing, index) => (
        <div
          className={` ${
            colstyle ? "col-sm-12 col-lg-6" : "col-sm-6 col-lg-4"
          }  `}
          key={listing.id}
        >
          <div
            className={
              colstyle
                ? "listing-style1 listCustom listing-type"
                : "listing-style1"
            }
          >
            <div className="list-thumb">
              <Image
                width={382}
                height={248}
                className="w-100 cover"
                style={{ height: "230px" }}
                src={listing.image}
                alt={listing.title || "listing"}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="sale-sticker-wrap">
                {!listing.forRent && (
                  <div className="list-tag fz12">
                    <span className="flaticon-electricity me-2" />
                    FEATURED
                  </div>
                )}
              </div>

              <div className="list-price">
                {listing.price} / <span>mo</span>
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                <Link href={`/single-v2/${listing.id}`}>{listing.title}</Link>
              </h6>
              <p className="list-text">{listing.location}</p>
              <div className="list-meta d-flex align-items-center">
                <a href="#">
                  <span className="flaticon-bed" /> {listing.bed} Yatak Odası
                </a>
                <a href="#">
                  <span className="flaticon-shower" /> {listing.bath} Banyo
                </a>
                <a href="#">
                  <span className="flaticon-user" /> {Math.round(listing.bed * 1.5)} Kişi
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
