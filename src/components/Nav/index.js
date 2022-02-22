import React from 'react';
function Nav() {
  return (
    <header className="container bg-img">
        <div className="row">
      <div className="col-4">
        <a href="/">
          <h2>Lotfey</h2>
        </a>
      </div>
      <nav className="col-8">
        <ul>
          <li>
            <a href="#about"> About me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Nav;
