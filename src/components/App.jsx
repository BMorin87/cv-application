import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExperience from './EducationalExperience';
import PracticalExperience from './PracticalExperience';
import CV from './CV';
import '../styles/App.css';

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [education, setEducation] = useState([
    { school: '', title: '', date: '' }
  ]);

  const [practical, setPractical] = useState([
    { company: '', position: '', responsibilities: '', from: '', until: '' }
  ]);

  const [editing, setEditing] = useState({
    general: true,
    education: true,
    practical: true,
  });

  const handleSubmit = (section) => {
    setEditing((prev) => ({ ...prev, [section]: false }));
  };

  const handleEdit = (section) => {
    setEditing((prev) => ({ ...prev, [section]: true }));
  };

  return (
    <div className="app-container">
      <h1>CV Builder</h1>
      <div className="sections-container">
        <GeneralInfo
          info={generalInfo}
          setInfo={setGeneralInfo}
          isEditing={editing.general}
          onSubmit={() => handleSubmit('general')}
          onEdit={() => handleEdit('general')}
        />
        <EducationalExperience
          education={education}
          setEducation={setEducation}
          isEditing={editing.education}
          onSubmit={() => handleSubmit('education')}
          onEdit={() => handleEdit('education')}
        />
        <PracticalExperience
          practical={practical}
          setPractical={setPractical}
          isEditing={editing.practical}
          onSubmit={() => handleSubmit('practical')}
          onEdit={() => handleEdit('practical')}
        />
      </div>
      <div className="cv-preview-container">
        <h2>CV Preview</h2>
        <CV
          generalInfo={generalInfo}
          education={education}
          practical={practical}
        />
      </div>
    </div>
  );
};

export default App;
