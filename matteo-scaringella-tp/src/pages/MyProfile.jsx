import React from 'react';
import { Navigate } from 'react-router-dom';

function MyProfile({ currentUser }) {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Mon Profil</h2>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <img src={currentUser.image} alt={currentUser.username} width="150" />
        <h3>{currentUser.firstName} {currentUser.lastName} ({currentUser.username})</h3>
        <p><strong>Email :</strong> {currentUser.email}</p>
        <p><strong>Téléphone :</strong> {currentUser.phone}</p>
        <p><strong>Âge :</strong> {currentUser.age} ans</p>
        <p><strong>Rôle :</strong> {currentUser.role}</p>
        <h4>Adresse :</h4>
        <p>{currentUser.address.address}, {currentUser.address.city}, {currentUser.address.country}</p>
        <h4>Entreprise :</h4>
        <p>{currentUser.company.title} chez {currentUser.company.name}</p>
      </div>
    </div>
  );
}

export default MyProfile;