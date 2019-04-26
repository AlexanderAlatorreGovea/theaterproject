import React, { Component } from 'react';
import './ManipulatingSwiper.scss';
import Swiper from 'swiper';




class PeopleCarousel extends Component {
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
          "https://occ-0-37-33.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABfKv-SFopPMq0AUNbjX8mcT7yjJvLHlWBYM-gRi3CCA8qLSli5Fvnj9Ap7o-S1rv3bvSYm9PcXvNRSPGKbXdjJ9ov1XuJUg.jpg?r=b29",
          "https://occ-0-37-33.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABcaSKJ3mHs14Jvhoj9S98-eWa1WLuSvBwEFGz2PkgYcTELAd2jFqBkxU16guclm71sqtd9-JpGOt8AsvkG01YYSRrL2f-ZQ.jpg?r=d1e",
          "https://occ-0-37-33.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABUkaJIO5ibp5o3DSl0XojBaYGx9IeS-3nV44Ymd1Nxgk5rhzQHtxQ6z4Z-wy_WrJwtoBfjOQBxU6FrL4kRZBxPBtkPEUtcI.jpg?r=bc7",
          "https://occ-0-37-33.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABVyIDkw2SpEb-VI1XHrbHms4nsdHx2uwJmQiA6INHoSGuYT7ViXSc6rtvIgDrJW8iv4huWfzD8LJ3dajmcAO5j4Q7dZ9Xwg.jpg?r=312"
        ],
        currentIndex: 0,
        translateValue: 0
      }
    }

    nextBtn = () => {
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }


    prevBtn = () => {
    if(this.state.currentIndex === 0)
      return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }


  slideWidth = () => {
   return document.querySelector('.slide').clientWidth
  }

  render() {

    return(
      <div>
      <div class="container">
        <div class="h5"></div>
          <div class="carousel">
              <div class="slider">
                <section
                style={{
                      transform: `translateX(${this.state.translateValue}px)`,
                      transition: 'transform ease-out 0.45s'
                      }}

                >{this.state.images.map((image, i) =>(
                  <img className="slide" src={image} key={i}/>
                ))}</section>
              </div>
                <div class="controls">
                  <div class="next" onClick={this.prevBtn}><i className="fa fa-arrow-circle-left"></i><br/></div>
                  <div class="prev" onClick={this.nextBtn}><i className="fa fa-arrow-circle-right"></i><br/></div>
               </div>
        </div>
      </div>

      </div>
    );
  }
};

export default PeopleCarousel;
