import React from "react";

const trendingData = [
  {
    img: "main/New folder/AQUA 7W TO 80W.jpeg",
    hoverImg: "main/New folder/AQUA IP65.jpeg",
    title: "AQUA IP65 ",
    desc: " ",
  },
  {
    img: "main/New folder/SPIKE SP10 SP20.jpeg",
    hoverImg: "main/New folder/WhatsApp Image 2022-09-05 at 2.59.40 AM.jpeg",
    title: "SPIKE",
    desc: " ",
  },
  {
    img: "main/New folder/WhatsApp Image 2024-02-14 at 4.19.30 AM.jpeg",
    hoverImg: "src/components/home/main/slider-banner/banner3.jpg",
    title: " mash fix",
    desc: "Short description for item 3",
  },
];

const waveGrid = () => {
  return (
    <section id="trending" className="trending-section">
      <div className="containerm">
        <div className="title-section">
          <h2 className="section-title">Trending Now</h2>
        </div>
        <div className="trending-items">
          {trendingData.map((item, index) => (
            <div className="trending-item" key={index}>
              <div className="image-wrapper">
                <img
                  src={item.img}
                  alt={item.title}
                  className="trending-img default-img"
                />
                <img
                  src={item.hoverImg}
                  alt={item.title}
                  className="trending-img hover-img"
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default waveGrid;
