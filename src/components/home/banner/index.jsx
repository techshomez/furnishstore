import "./banner.scss";

const Banner = () => {
  return (
    <section className="banner">
      <h1>
        Furnish your dream <br />
        with our furniture!
      </h1>
      <article>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
        doloribus iste vero magnam hic fugiat, recusandae, aliquam in corrupti.
      </article>
      <div className="banner__cta">
        <button>Buy Now</button>
        <button>Explore</button>
      </div>
    </section>
  );
};

export default Banner;
