import React from 'react';
import './Home.scss';
import PeopleCarousel from './ManipulatingSwiper';

class Home extends React.Component {

  render() {
    return (
      <div className="Home">
        <header className="header">
            <i class="fas fa-film fa-2x"><span>     Discover</span></i>
            <nav className="main-nav">
              <div className="menu">
                <a className="">Home</a>
                <a className="">About</a>
                <a className="">News</a>
                <a className="">Discover</a>
                <button className="login">Login</button>
              </div>
            </nav>
          </header>
          <hr class="carousel-container__separator" />
          <PeopleCarousel />
      </div>
    )
  }
}


export default Home;
