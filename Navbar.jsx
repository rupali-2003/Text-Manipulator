import React, { useState } from 'react'

const Navbar = ({ title, menu }) => {
  let [mode, setMode] = useState('light');

  const handleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#333'; 
      document.body.style.color = '#fff'; 
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff'; 
      document.body.style.color = '#000'; 
    }
  };

  return (
    <>
      <nav className={`navbar bg-${mode} navbar-expand-lg`}>
        <div className="container-fluid">
          <a className={`navbar-brand ${mode === 'dark' ? 'text-light' : 'text-dark'}`} href="#">{title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link ${mode === 'dark' ? 'text-light' : 'text-dark'} active`} aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${mode === 'dark' ? 'text-light' : 'text-dark'}`} href="#">{menu}</a>
              </li>
              <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle ${mode === 'dark' ? 'text-light' : 'text-dark'}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className={`dropdown-menu ${mode === 'dark' ? 'bg-dark text-light' : ''}`}>
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className={`nav-link disabled ${mode === 'dark' ? 'text-light' : 'text-dark'}`} aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className="m-2 form-check form-switch">
          <input className="form-check-input" onClick={handleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
