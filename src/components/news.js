import React from "react";

export const News = (props) => {
  return (<div id="news" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>News</h2>
          <p>
            This section will feature news related to the Association for the Study of Chronic Diseases, including:
          </p>
          <ul>
            <li>Announcements of new research grants and funding opportunities.</li>
            <li>Summaries of key findings from recent publications.</li>
            <li>Information about upcoming webinars and workshops.</li>
            <li>Profiles of leading researchers in the field.</li>
          </ul>
          <p>Check back regularly for updates.</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data ? props.data.map((d, i) => (<div
                key={`${d.title}-${i}`}
                className="col-sm-6 col-md-4 col-lg-4"
              >
                {/*<Image*/}
                {/*  title={d.title}*/}
                {/*  largeImage={d.largeImage}*/}
                {/*  smallImage={d.smallImage}*/}
                {/*/>*/}
              </div>)) : "Loading..."}
          </div>
        </div>
      </div>
    </div>);
};
