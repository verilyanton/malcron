import React from "react";

export const Events = (props) => {
  return (
    <div id="events">
      <div className="container">
        <div className="section-title text-center">
          <h2>Gender Equality Plan</h2>
    <h3>1. Introduction</h3>
      <p>
        The Association for Study of Chronic Diseases Moldova aims to improve the understanding and management of chronic diseases in Moldova through research, advocacy, and education. [cite: 1, 2] Recognizing that gender influences health outcomes, the organization is committed to promoting gender equality in its operations and initiatives. [cite: 2]
      </p>

      <h3>2. Goals and Objectives</h3>
      <h4>Goal 1: Promote gender balance in leadership positions.</h4>
      <p>Objective: Achieve a minimum of 40% representation of each gender in senior management roles within three years. [cite: 3, 4] </p>

      <h4>Goal 2: Foster an inclusive workplace culture.</h4>
      <p>Objective: Implement training programs on gender sensitivity and unconscious bias for all employees annually. [cite: 5]</p>

      <h4>Goal 3: Enhance gender disaggregated data collection and analysis.</h4>
      <p>Objective: Develop a system to record and analyze data on gender representation across all levels of the organization. [cite: 6]</p>

      <h3>3. Current Status Assessment</h3>
      <p>
        Data Collection: Use surveys, interviews, and focus groups to assess the current status of gender equality within the organization. [cite: 7]
      </p>
      <p>
        Analysis: Identify existing gender gaps, barriers, and challenges faced by employees. [cite: 8]
      </p>

      <h3>4. Strategies and Actions</h3>
      <h4>Recruitment and Hiring:</h4>
      <ul>
        <li>Implement gender-blind recruitment processes to minimize bias. [cite: 9]</li>
        <li>Promote job openings in diverse platforms that reach various gender communities. [cite: 10]</li>
      </ul>

      <h4>Training and Development:</h4>
      <ul>
        <li>Develop mentorship programs for underrepresented genders. [cite: 10, 11]</li>
        <li>Provide professional development and leadership training opportunities specifically targeted to women and non-binary staff. [cite: 11]</li>
      </ul>

      <h4>Workplace Policies:</h4>
      <ul>
        <li>Review and revise existing policies to promote flexible work arrangements (remote work, part-time options, etc.). [cite: 12]</li>
        <li>Establish clear anti-harassment and discrimination policies including reporting mechanisms. [cite: 13]</li>
      </ul>

      <h4>Awareness and Sensitization:</h4>
      <ul>
        <li>Organize workshops and campaigns to raise awareness about gender equality and its importance in research and NGO work. [cite: 13]</li>
      </ul>

      <h3>5. Monitoring and Evaluation</h3>
      <ul>
        <li>Establish Metrics: Define KPIs (Key Performance Indicators) to measure the effectiveness of implemented strategies (e.g., gender representation percentages, training participation rates). [cite: 14]</li>
        <li>Regular Reporting: Create a schedule for regular reviews and reports on progress toward gender equality targets. [cite: 15]</li>
        <li>Feedback Mechanisms: Implement anonymous surveys to gather feedback from employees on gender equality initiatives. [cite: 16]</li>
      </ul>

      <h3>6. Governance and Responsibility</h3>
      <ul>
        <li>Gender Equality Committee: Form a committee responsible for overseeing the implementation of the GEP, composed of diverse members from different levels of the organization. [cite: 17]</li>
        <li>Accountability Measures: Assign clear responsibilities and ensure accountability for achieving gender equality objectives. [cite: 18]</li>
      </ul>

      <h3>7. Funding and Resources</h3>
      <ul>
        <li>Budget Allocation: Identify resources necessary for implementing the GEP, allocating specific budgets for training, outreach, and monitoring. [cite: 19]</li>
        <li>Partnerships: Explore partnerships with external organizations or experts to support the implementation of gender equality initiatives. [cite: 20]</li>
      </ul>

      <h3>8. Conclusion</h3>
      <p>
        Reiterate the organization’s commitment to gender equality and the positive impact it strives to achieve for its staff and stakeholders. [cite: 21]
      </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      {/*<img src={d.img} alt="" />{" "}*/}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
