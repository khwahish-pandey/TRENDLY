import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nation">
                  Nation
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  World
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/au">
                      Australia
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/br">
                      Brazil
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/cn">
                     China
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/eg">
                      Egypt
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/fr">
                     France
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/de">
                    Germany
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/gr">
                     Greece
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/hk">
                      Hong Kong
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/in">
                      India
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/ie">
                    Italy
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/jp">
                      Japan
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/no">
                      Norway	
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/pk">
                      Pakistan	
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/pe">
                     Philippines	
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/ru">
                      Russia
                    </a>
                  </li>
                
                  <li>
                    <a class="dropdown-item" href="/sg">
                      Singapore
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/se">
                     Sweden	
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/ch">
                     Switzerland
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/tw">
                      Taiwan	
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/ua">
                     Ukraine
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/gb">
                     United Kingdom
                    </a>
                  </li>
                 
                  <li>
                    <a class="dropdown-item" href="#">
                     United States
                    </a>
                  </li>
                 
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
