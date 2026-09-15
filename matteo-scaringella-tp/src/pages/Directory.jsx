import React from 'react';
import { Link } from 'react-router-dom';
import usersData from '../data/users.json';

function Directory() {
  const users = usersData.users;
  return (
    <div className="directory-container" style={{ padding: '20px' }}>
      <h2>Annuaire des Utilisateurs</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {users.map((user) => (
          <Link to={`/user/${user.id}`} key={user.id} style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}>
            <img src={user.image} alt={user.username} width="100" style={{ borderRadius: '50%', backgroundColor: '#f0f0f0' }} />
            <p><strong>{user.username}</strong></p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Directory;