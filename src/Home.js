import React from 'react';
import './Home.scss';


class Home extends React.Component {
  render(){
    return (
      <div>
          <header className="header">
            <ul className="right-index">
              <li className="">Home</li>
              <li className="">About</li>
              <li className="">News</li>
              <li className="">Discover</li>
              <button className="">Login or Register</button>
            </ul>
            <div className="left-index">
              <h4 className="">Independent Community for Movie Enthusiasts</h4>
              <img className=""/>
            </div>
          </header>
      </div>
    )
  }
}


export default Home;
