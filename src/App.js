import React from 'react';
import './App.css';
import RockersList from './components/RockersList';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Топ 50 рок-музыкантов мира</h1>
      </header>
      <main className="main">
        <RockersList />
      </main>
      <footer className="footer">
        <p>© 2023 Рок-сайт. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default App;
