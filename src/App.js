import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const CoffeeList = [
  {
    id:0,
    name: "나이트로 바닐라 크림",
    kcal: "75kcal",
    volume: "355ml",
    Caffeine: "245mg",
    Place: "스타벅스",
    photo:"https://image.istarbucks.co.kr/upload/store/skuimg/2019/09/[9200000002487]_20190919181354845.jpg"
  },
  {
    id:1,
    name: "다크 초콜릿 블렌디드",
    kcal: "300kcal",
    volume: "355ml",
    Caffeine: "0mg",
    Place: "스타벅스",
    photo:"https://image.istarbucks.co.kr/upload/store/skuimg/2020/10/[9200000003209]_20201013140350111.jpg"
  },
  {
    id:2,
    name: "돌체 콜드 브루",
    kcal: "265kcal",
    volume: "355ml",
    Caffeine: "150mg",
    Place: "스타벅스",
    photo:"https://image.istarbucks.co.kr/upload/store/skuimg/2019/04/[9200000002081]_20190409153909859.jpg"
  },
  {
    id:3,
    name: "블론드 토피 넛 라떼",
    kcal: "325kcal",
    volume: "355ml",
    Caffeine: "85mg",
    Place: "스타벅스",
    photo:"https://image.istarbucks.co.kr/upload/store/skuimg/2020/10/[9200000003224]_20201013140752262.jpg"
  },
  {
    id:4,
    name: "에스프레소 콘 파나",
    kcal: "30kcal",
    volume: "22ml",
    Caffeine: "75mg",
    Place: "스타벅스",
    photo:"https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[30]_20150813221811147.jpg"
  },
  {
    id:5,
    name: "스타벅스 돌체 라떼",
    kcal: "255kcal",
    volume: "355ml",
    Caffeine: "150mg",
    Place: "스타벅스",
    photo:"https://image.istarbucks.co.kr/upload/store/skuimg/2015/07/[128692]_20150723020548416.jpg"
  }
]

function Coffee({ name, kcal, volume, Caffeine, Place, photo }){
  return (
  <div class="div1">
    <div class="div2">
      <h2> {name} </h2>
      <img src={photo} alt={name} width="350px;" height="300px;"/>
      <div class="div3">
        <h3>정보</h3>
        <p>칼로리 : {kcal}</p>
        <p>용량 : {volume}</p>
        <p>카페인 : {Caffeine}</p>
        <p><b>파는 장소 : {Place}</b></p>
      </div>
    </div>
  </div>
  );

}


class App extends Component {
  render() {
    return (
      <div>
        {CoffeeList.map(e => (
          <Coffee key={e.id} name={e.name} kcal={e.kcal} Caffeine={e.Caffeine} volume={e.volume} Place={e.Place} photo={e.photo}/>
        ))}
      </div>
    );
  }
}

export default App;
 