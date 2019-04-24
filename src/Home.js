import React from 'react';
import './Home.scss';
import Swiper from 'react-id-swiper';



class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
     images: [
        "https://occ-0-37-33.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABXycjQ36JANMDJjLIwvc48g_l8NaeqbBBfIEF8f51d8nxsHcUks0SSfxEYngJq_SPDTFUed7gxI2ueFOy8dckGDo1xouFDg.jpg?r=812" ,
        "https://occ-0-37-33.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABXycjQ36JANMDJjLIwvc48g_l8NaeqbBBfIEF8f51d8nxsHcUks0SSfxEYngJq_SPDTFUed7gxI2ueFOy8dckGDo1xouFDg.jpg?r=812",
        "https://occ-0-37-33.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABSFiQY1Ymajv3BmUc0th9uvhA48_21d1dWTBAKTZFR5NTEIvSkBdXfs0GEUPCGLIPARKi5TCfUPCDWbnT6LwXqFrUDOUuQM.jpg?r=0ec",
        "https://occ-0-37-33.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABUYpGjmy3hJbLVHbZgAmmaNVqdv1qrvwv7qCxCI2nZCQ-GIIC-rIdM89mtX77dKBfJtGOv8qFqoiarQlzf680VxnNwC7y1E.jpg?r=c91",
        "https://occ-0-37-33.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABXycjQ36JANMDJjLIwvc48g_l8NaeqbBBfIEF8f51d8nxsHcUks0SSfxEYngJq_SPDTFUed7gxI2ueFOy8dckGDo1xouFDg.jpg?r=812",
        "https://occ-0-37-33.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABXycjQ36JANMDJjLIwvc48g_l8NaeqbBBfIEF8f51d8nxsHcUks0SSfxEYngJq_SPDTFUed7gxI2ueFOy8dckGDo1xouFDg.jpg?r=812",
        "https://occ-0-37-33.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABcaSKJ3mHs14Jvhoj9S98-eWa1WLuSvBwEFGz2PkgYcTELAd2jFqBkxU16guclm71sqtd9-JpGOt8AsvkG01YYSRrL2f-ZQ.jpg?r=d1e",
        "https://occ-0-37-33.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABUkaJIO5ibp5o3DSl0XojBaYGx9IeS-3nV44Ymd1Nxgk5rhzQHtxQ6z4Z-wy_WrJwtoBfjOQBxU6FrL4kRZBxPBtkPEUtcI.jpg?r=bc7",
        "https://occ-0-37-33.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABVyIDkw2SpEb-VI1XHrbHms4nsdHx2uwJmQiA6INHoSGuYT7ViXSc6rtvIgDrJW8iv4huWfzD8LJ3dajmcAO5j4Q7dZ9Xwg.jpg?r=312",
        "https://occ-0-37-33.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABfKv-SFopPMq0AUNbjX8mcT7yjJvLHlWBYM-gRi3CCA8qLSli5Fvnj9Ap7o-S1rv3bvSYm9PcXvNRSPGKbXdjJ9ov1XuJUg.jpg?r=b29"
     ]
   }
 }

  render(){
    const params = {
      init: true,
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      breakpoints: {
           768: {
             slidesPerView: 5
           },
           640: {
             slidesPerView: 3
           },
         },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };

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

      <Swiper {...params}>
      {this.state.images.lenght > 0 ?
      <div class="swiper-container">

          <div class="swiper-wrapper">

          
              <div class="swiper-slide">

                <img />

              </div>
          </div>


          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

        </div>
        :
        <p>No Cast Found :(</p>
      }
      </Swiper>



      </div>
    )
  }
}


export default Home;
