import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import React from "react";
import image from "./img.png"
function Main() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  let random_div_settings =
  {
    "Image": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtA71YIjt5xssYs47UaZPL2p_RUDtQ-E6mw6SUecbbV3oYQ2f3RMzptcbV9I-6sd5vZz4&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHX17tnnl0yd8-cGSwFkVhZwUJ66CHRAVBO2viafLKs7d4bVilee6cF9magp4DRpb9h_M&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT742axTXUcGC88UUx2uLDDoeQwsdnTHU824ABENp3931XUqhTwLjoG9Lfb6EwnIo5vW-Q&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYpvuL_jeW7OMhBWJ9cMD4q1LEARc4U49tjlAQTlCeoaYvTYOASxoLe0jR2EVookeyGcI&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2dror82cMqaxxMxj-1AWUmgBjBQdBwmECuNFQ7ctm9zIDm2iD_jO5klF4kFSs4WOCB3I&usqp=CAU"],
    "Titel": ["Дмитрик y дитинстві", "Сім'я дмитрика", "Подія кожного дня", "Дмитрик y сізо", "Дмитрик робить тату"],
    "Description": ["Дмитрику стало цікаво хулі ти втикаєш", "Поставка нових отчимів після катки в доту", "Дмитрика знову натянули", "Дмитрика ізнасілував маленький хлопчик i його признали педофілом", "Дмитрик після затримання не витримав i прийшов набивати купола"],

  }


  function generateRandomDiv(random_div_settings, number) {

    return (
      <div className="generate">
        <p align='center'><img src={random_div_settings.Image[number]} alt="Product 1" className="product_img" ></img></p>
        <h3>{random_div_settings.Titel[number]}</h3>
        <p>{random_div_settings.Description[number]}</p>
     
      </div>
    )
  }
  var arr = [];
  while (arr.length < 5) {
    var r = Math.floor(Math.random() * random_div_settings.Image.length) ;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  console.log(arr);
  return (
    <main>
      <h1>ЦЕ ФАНСАЙТ ДМИТРИКА</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>ФОТО НАШОГО КУМИРА</h2>
      <div className="slider-div">
        <Slider {...settings}>
          <div align="center">
            <article class="product" >


              {generateRandomDiv(random_div_settings,arr[0])}
             
            </article>
          </div>
          <div align="center">
            <article class="product">


              {generateRandomDiv(random_div_settings,arr[1])}
            
            </article>
          </div>
          <div align="center">
            <article class="product">


              {generateRandomDiv(random_div_settings,arr[2])}
            
            </article>
          </div>
          <div align="center">
            <article class="product">


              {generateRandomDiv(random_div_settings,arr[3])}
            
            </article>
          </div>
          <div align="center">
            <article class="product">


              {generateRandomDiv(random_div_settings,arr[4])}
            
            </article>
          </div>
        </Slider>
      </div>




    </main>
  )
}
export default Main