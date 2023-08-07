import React from "react";
import "./style.css";

class Header extends React.Component {
    render() {
      return (
        <header className="page-header">
          <div className="logo">
            <span className="page-title">FITNESS APP</span>
          </div>
          <div className="navigation">
            <nav>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/activity">Add an activity</a>
                </li>
                <li>
                  <a href="/stats">Stats</a>
                </li>
                <li>
                  <a href="/badges">Badges</a>
                </li>
              </ul>
            </nav>
          </div>   
        </header>
      );
    }
  }


export default Header;
