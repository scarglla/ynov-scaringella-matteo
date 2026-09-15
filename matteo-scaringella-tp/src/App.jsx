import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import Directory from './pages/Directory';
import UserDetail from './pages/UserDetail';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const handleLogout = () => setCurrentUser(null);
  return (
    <BrowserRouter>
      <header style={{ padding: '20px', borderBottom: '1px solid #ccc', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>TP React - Matteo Scaringella</h1>
          <nav style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
            <Link to="/">Accueil</Link>
            <Link to="/users">Annuaire</Link>
          </nav>
        </div>
        <div>
          {currentUser ? (
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <Link to="/profile">Mon Profil</Link>
              <button onClick={handleLogout}>Se déconnecter</button>
            </div>
          ) : (
            <Link to="/login">Se connecter</Link>
          )}
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/users" element={<Directory />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path="/profile" element={<MyProfile currentUser={currentUser} />} />
          <Route path="*" element={<h2>Erreur 404 : Page introuvable</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;