import React, { useState } from 'react'
import './BtnAddProject.scss'
import NewPositionForm from '@/forms/NewPosition/NewPositionForm';
export default function BtnAddProject() {
  const [viewForm, setViewForm] = useState(false);

  const handleAddBtn = () => {
    setViewForm(true);
  };
  return (
    <>
      <div className="addBtn">
        <button onClick={handleAddBtn}>+</button>
      </div>

      {viewForm && (
        <div className="formContainer">
          <NewPositionForm  />
        </div>
      )}
    </>
  );
}
