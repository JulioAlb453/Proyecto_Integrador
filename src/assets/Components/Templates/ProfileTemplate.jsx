// src/components/templates/ProfileTemplate.js
import React from 'react';
import ProfileInfo from '../Organism/ProfileInfo';
import ActionButtons from '../Organism/ActionButtons';
import './ProfileTemplate.css'
function ProfileTemplate() {
  return (
    <div className="perfil-content">
      <div className="perfil-header">
        <h1>PERFIL</h1>
      </div>
      <ProfileInfo />
      <ActionButtons />
    </div>
  );
}

export default ProfileTemplate;
