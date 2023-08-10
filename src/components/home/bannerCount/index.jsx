import "./count.scss";

const BannerCount = () => {
  return (
    <section className="count">
      <div className="count__items">
        <div className="item__list">
          <span>950+</span>
          <small>
            Furniture and <br />
            home equipment
          </small>
        </div>
        <div className="item__list">
          <span>320+</span>
          <small>
            Fresh interior <br />
            design theme
          </small>
        </div>
        <div className="item__list">
          <span>462+</span>
          <small>
            Happy client <br />
            more of this
          </small>
        </div>
      </div>
    </section>
  );
};

export default BannerCount;
