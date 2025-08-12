import React from 'react';

const CV = ({ generalInfo, education, practical }) => {
  return (
    <div className="cv-output">
      <section>
        <h3>{generalInfo.name}</h3>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>
      </section>

      <section>
        <h4>Educational Experience</h4>
        {education.map((edu, index) => (
          <div key={index}>
            <p>{edu.title} at {edu.school}</p>
            <p>Date of Study: {edu.date}</p>
          </div>
        ))}
      </section>

      <section>
        <h4>Practical Experience</h4>
        {practical.map((exp, index) => (
          <div key={index}>
            <p>{exp.position} at {exp.company}</p>
            <p>Responsibilities: {exp.responsibilities}</p>
            <p>Dates: {exp.from} - {exp.until}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CV;