import React from 'react';
import '../styles/GeneralInfo.css';

const GeneralInfo = ({ info, setInfo, isEditing, onSubmit, onEdit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="general-info-container">
      <h3>General Information</h3>
      {isEditing ? (
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
          <label>
            Name:
            <input type="text" name="name" value={info.name} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={info.email} onChange={handleChange} />
          </label>
          <label>
            Phone Number:
            <input type="tel" name="phone" value={info.phone} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="display-info">
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <button onClick={onEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;