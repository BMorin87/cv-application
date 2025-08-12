import React from 'react';
import '../styles/PracticalExperience.css';

const PracticalExperience = ({ practical, setPractical, isEditing, onSubmit, onEdit }) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newPractical = [...practical];
    newPractical[index][name] = value;
    setPractical(newPractical);
  };

  const handleAdd = () => {
    setPractical([...practical, { company: '', position: '', responsibilities: '', from: '', until: '' }]);
  };

  const handleDelete = (index) => {
    setPractical(practical.filter((_, i) => i !== index));
  };

  return (
    <div className="practical-container">
      <h3>Practical Experience</h3>
      {isEditing ? (
        <div>
          {practical.map((exp, index) => (
            <div key={index} className="practical-form-entry">
              <label>
                Company Name:
                <input type="text" name="company" value={exp.company} onChange={(e) => handleChange(e, index)} />
              </label>
              <label>
                Position Title:
                <input type="text" name="position" value={exp.position} onChange={(e) => handleChange(e, index)} />
              </label>
              <label>
                Main Responsibilities:
                <textarea name="responsibilities" value={exp.responsibilities} onChange={(e) => handleChange(e, index)}></textarea>
              </label>
              <label>
                Date From:
                <input type="text" name="from" value={exp.from} onChange={(e) => handleChange(e, index)} />
              </label>
              <label>
                Date Until:
                <input type="text" name="until" value={exp.until} onChange={(e) => handleChange(e, index)} />
              </label>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
          <button onClick={handleAdd}>Add</button>
          <button onClick={onSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          {practical.map((exp, index) => (
            <div key={index} className="display-info">
              <p>Company: {exp.company}</p>
              <p>Position: {exp.position}</p>
              <p>Responsibilities: {exp.responsibilities}</p>
              <p>Dates: {exp.from} - {exp.until}</p>
            </div>
          ))}
          <button onClick={onEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PracticalExperience;