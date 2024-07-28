import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.intro : "loading..."}</p>
              <h3>Our Mission</h3>
              <p>{props.data ? props.data.mission : "loading..."}</p>
              <h3>Brief History</h3>
              <p>{props.data ? props.data.history : "loading..."}</p>
              <h3>Focus areas</h3>
              <p>{props.data ? props.data.focusAreas : "loading..."}</p>
              <h3>Main Achievements</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.mainAchievements.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              {/*  <div className="col-lg-6 col-sm-6 col-xs-12">*/}
              {/*    <ul>*/}
              {/*      {props.data*/}
              {/*        ? props.data.Why2.map((d, i) => (*/}
              {/*            <li key={`${d}-${i}`}> {d}</li>*/}
              {/*          ))*/}
              {/*        : "loading"}*/}
              {/*    </ul>*/}
              {/*  </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
