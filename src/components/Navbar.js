import React from 'react';

function Navbar({ setPage }) {
  return (
    <nav>
      <button onClick={() => setPage('People')}>People</button>
      <button onClick={() => setPage('Planets')}>Planets</button>
    </nav>
  );
}

export default Navbar;
