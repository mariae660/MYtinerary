import React, { Component } from "react";
import "./footer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import berlin from "../img/berlin.jpg";
import budapest from "../img/budapest.jpg";
import Hamburg from "../img/Hamburg.jpg";
import Helsinki from "../img/Helsinki.jpg";
import madrid from "../img/madrid.jpg";
import Oslo from "../img/Oslo .jpg";
import paris from "../img/paris.jpg";
import romania from "../img/romania.jpg";
import Sofia from "../img/sofia.jpg";
import stockholm from "../img/Stockholm.jpg";
import london from "../img/london.jpg";
import rome from "../img/rome.jpg";

class Footer extends Component {
  render() {
    var settings = {
      arrows: true,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="galeria">
        <Slider {...settings}>
          <div>
            <div className="columnaizq">
              <div className="ciudad">
                <img src={berlin} alt="Berlin" />
              </div>
              <div>
                <h2>Berlin</h2>  
              </div>
              <div className="ciudad">
                <img src={budapest} alt="Budapest" />
              </div>
              <div>
                <h3>Budapest</h3>  
              </div>
            </div>
            <div className="columnader">
              <div className="ciudad">
                <img src={Hamburg} alt="Hamburg" />
              </div>
              <div>
                <h2>Hamburg</h2>  
              </div>
              <div className="ciudad">
                <img src={Helsinki} alt="Helsinki" />
              </div>
              <div>
                <h3>Helsinki</h3>  
              </div>
            </div>
          </div>
          <div>
            <div className="columnaizq">
              <div className="ciudad">
                <img src={madrid} alt="Madrid" />
              </div>
              <div>
                <h2>Madrid</h2>  
              </div>
              <div className="ciudad">
                <img src={Oslo} alt="Oslo" />
              </div>
              <div>
                <h3>Oslo</h3>  
              </div>
            </div>

            <div className="columnader">
              <div className="ciudad">
                <img src={paris} alt="Paris" />
              </div>
              <div>
                <h2>Paris</h2>  
              </div>
              <div className="ciudad">
                <img src={romania} alt="Romania" />
              </div>
              <div>
                <h3>Romania</h3>  
              </div>
            </div>
          </div>
          <div>
            <div className="columnaizq">
              <div className="ciudad">
                <img src={Sofia} alt="Sofia" />
              </div>
              <div>
                <h2>Sofia</h2>  
              </div>
              <div className="ciudad">
                <img src={stockholm} alt="Stockholm" />
              </div>
              <div>
                <h3>Stockholm</h3>  
              </div>
            </div>
            <div className="columnader">
              <div className="ciudad">
                <img src={london} alt="London" />
              </div>
              <div>
                <h2>London</h2>  
              </div>
              <div className="ciudad">
                <img src={rome} alt="Rome" />
              </div>
              <div>
                <h3>Rome</h3>  
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Footer;
