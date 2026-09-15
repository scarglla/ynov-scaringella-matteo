import React from 'react';
import { useParams } from 'react-router-dom';
import usersData from '../data/users.json';

function UserDetail() {
  const { id } = useParams();
  const user = usersData.users.find(u => u.id === parseInt(id));
  if (!user) {
    return <h2>Utilisateur introuvable</h2>;
  }
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img src={user.image} alt={user.username} width="150" style={{ borderRadius: '50%', backgroundColor: '#f0f0f0' }} />
      <h2>Profil de : {user.username}</h2>
    </div>
  );
}

export default UserDetail;