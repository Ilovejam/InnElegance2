import products from "@/data/listings";
import Link from "next/link";

const ProductSingle = () => {
  return (
    <>
      {products.slice(0, 1).map((product) => (
        <div className="listing-style1 mini-style bounce-y" key={product.id}>
          <div className="list-content">
            <h6 className="list-title">
              <Link  href={`/single-v2/${product.id}`}>{product.title}</Link>
            </h6>
            <p className="list-text">{product.location}</p>
            <div className="list-meta d-flex align-items-center">
              <a href="#">
                <span className="flaticon-bed" />
                {product.bed}oda
              </a>
              <a href="#">
                <span className="flaticon-shower" />
                {product.bath}banyo
              </a>
              <a href="#">
                <span className="flaticon-expand" />
                {product.sqft} sqft
              </a>
            </div>
            <Link  href={`/single-v2/${product.id}`} className="btn mt15 fz15">
              Villayı Gör
              <i className="fal fa-arrow-right-long" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductSingle;
