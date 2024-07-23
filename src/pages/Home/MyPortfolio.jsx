import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio1" id="MyPortfolio">
      <div className="portfolio--container">
          <h2 className="section--heading">Recent Projects</h2>
      </div>
      <div className="portfolio2">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolioCard"><a href={item.link}>
            <div className="portfolioImg">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolioContent">
              <div>
                <h3 className="portfolioTitle">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                 View in Github
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
