import React from 'react';
import '../styles/EducationalExperience.css';

const EducationalExperience = ({ education, setEducation, isEditing, onSubmit, onEdit }) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newEducation = [...education];
    newEducation[index][name] = value;
    setEducation(newEducation);
  };

  const handleAdd = () => {
    setEducation([...education, { school: '', title: '', date: '' }]);
  };

  const handleDelete = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  return (
    <div className="education-container">
      <h3>Educational Experience</h3>
      {isEditing ? (
        <div>
          {education.map((edu, index) => (
            <div key={index} className="education-form-entry">
              <label>
                School Name:
                <input type="text" name="school" value={edu.school} onChange={(e) => handleChange(e, index)} />
              </label>
              <label>
                Title of Study:
                <input type="text" name="title" value={edu.title} onChange={(e) => handleChange(e, index)} />
              </label>
              <label>
                Date of Study:
                <input type="text" name="date" value={edu.date} onChange={(e) => handleChange(e, index)} />
              </label>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
          <button onClick={handleAdd}>Add</button>
          <button onClick={onSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          {education.map((edu, index) => (
            <div key={index} className="display-info">
              <p>School: {edu.school}</p>
              <p>Title: {edu.title}</p>
              <p>Date: {edu.date}</p>
            </div>
          ))}
          <button onClick={onEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EducationalExperience;