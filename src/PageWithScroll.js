// You can live edit this code below the import statements
import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PageWithScroll.css';
import Header from "./Header";
import Main from "./Main"
import Footer from "./Footer"
import './page1.css'

class PageWithScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, slider_content: [], stateCurrentSlide: 0,slides_visibility:[true,false,false,false] };
  }


  page1() {
    return(
      <div>
      
      <Main></Main>
      
    </div>
    ) 
  }
  page2() {
    // console.log(this.state.stateCurrentSlide==1)
    // console.log(this.state.stateCurrentSlide)
    // return <Fade left  when={this.state.slides_visibility[1]}><h1>React Reveal2</h1></Fade>
  
  }
  page3() {
    return <div className="iframe-cont">
     <div className="else">
          
          <h1 className="map-h1" align="center">Ми тут  ↓</h1>
          <div className="map-div">
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51075.238068996245!2d22.78668092996366!3d47.7172023166111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473807ad1b6385d1%3A0xbb447227014186cc!2sAmopigmeat!5e0!3m2!1suk!2sua!4v1699192501691!5m2!1suk!2sua" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14563.37256524486!2d23.938671278931107!3d49.81492735576975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7b5bccd0eb7%3A0x81289812e0f9942!2z0JTQkdCaINCQ0LPRgNC-0ZbQvNC_0L7RgNGC!5e0!3m2!1suk!2sua!4v1699192589907!5m2!1suk!2sua" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5DyopuG6y6M?si=16u6tuCy46O014Wx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      <Footer></Footer>
    </div>
  }

  format_for_slider(html_var) {
    return (
      <div>
        <div className="page-div">
          {html_var}
        </div>
      </div>
    )
  }

  render() {
    this.state.slider_content = []
    this.state.slider_content.push(this.page1())

    this.state.slider_content.push(this.page3())





 
    let final_slider_content = []

    for (let i = 0; i < this.state.slider_content.length; i++) {
      final_slider_content.push(this.format_for_slider(this.state.slider_content[i]))
    }



    const settings = {
      dots: false,
      infinite: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
    
      beforeChange: (currentSlide, nextSlide, e) => {
        this.setState({stateCurrentSlide:nextSlide})
        if(nextSlide==1){
          this.state.slides_visibility[1]=true

        }
        else{
          this.state.slides_visibility[1]=false
        }
        // console.log("before change", currentSlide, nextSlide);
        // if (nextSlide == currentSlide+1) {
        //   console.log("start anim");
        //   console.log(this);
        //   this.setState({ show: true })
        // }
        // else if (nextSlide == currentSlide-1){
        //   this.setState({ show: false })
        // }
      }
    };

    return (
      <div>
        <Slider {...settings}>
          {final_slider_content}
        </Slider>
      </div>
    );
  }
}

export default PageWithScroll;