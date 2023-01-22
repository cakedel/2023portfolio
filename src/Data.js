const profile = {
  name: "Hong Jiwon",
  email: "cakedel86@gmail.com",
  tel: "010-2824-8898",
  skill: ["HTML", "CSS", "JavaScript", "React", "Sass", "Redux Toolkit", "Git"],
};

export { profile };

const portfolioData = [
  {
    id: 1,
    title: "Coconut Music",
    anchors: "COCONUTMUSIC",
    info: "코코넛 뮤직은 ManiaDB api 를 바탕으로 제작된 뮤직 웹어플리케이션입니다. 뮤직 플레이어는 트랙을 바꿔 음악을 재생할 수 있으며, 아티스트에 대한 검색 기능도 제공합니다.",
    skill: ["React", "React-router-dom", "Axios", "Redux-Toolkit"],
    src: process.env.PUBLIC_URL + "/assets/img/pf01.png",
    demo: "http://cakedel.github.io/coconut",
    github: "https://github.com/cakedel/coconut/tree/main/project",
  },
  {
    id: 2,
    title: "Kolon Industries",
    anchors: "KolonIndustries",
    info: "react-router-dom을 이용한 SPA 웹어플리케이션입니다. 주가 api와 연동되어 최근 주가 정보도 확인할 수 있으며 채용정보 탭에서는 게시판 기능을 사용할 수 있습니다.",
    skill: ["React", "React-router-dom", "Axios", "Sass"],
    src: process.env.PUBLIC_URL + "/assets/img/pf02.png",
    demo: "https://cakedel.github.io/kolonindustries/",
    github: "https://github.com/cakedel/kolonindustries",
  },
  {
    id: 3,
    title: "Carandache",
    anchors: "Carandache",
    info: "JQuery 라이브러리를 사용한 반응형 웹 사이트입니다. 기존의 까렌다쉬 홈페이지에서 메뉴를 좀 더 정리하고 돋보이도록 설계했습니다.",
    skill: ["Responsive Web", "JQuery", "slick-slide"],
    src: process.env.PUBLIC_URL + "/assets/img/pf03.png",
    demo: "http://cakedel.github.io/carandache/",
    github: "https://github.com/cakedel/carandache",
  },
  {
    id: 4,
    title: "Doosung Paper",
    anchors: "DoosungPaper",
    info: "바닐라 자바스크립트를 이용한 스탠다드 웹사이트입니다. 다양한 형태의 레이아웃을 시도하는 동시에 레이아웃들이 사이트 전체에 녹아들도록 했습니다.",
    skill: ["JavaScript", "Swiper slide"],
    src: process.env.PUBLIC_URL + "/assets/img/pf04.png",
    demo: "http://cakedel.github.io/doosung",
    github: "https://github.com/cakedel/doosung",
  },
  {
    id: 5,
    title: "Wedgwood",
    anchors: "Wedgwood",
    info: "웨지우드 본연의 디자인을 살리면서 보다 심플하게 다듬은 웹페이지입니다. 상품 카테고리를 슬라이드로 전환하면 해당 상품을 보여주는 기능을 바닐라 자바스크립트로 구현했습니다.",
    skill: ["JavaScript", "Swiper slide"],
    src: process.env.PUBLIC_URL + "/assets/img/pf05.png",
    demo: "http://cakedel.github.io/porfol/wedgwood",
    github: "https://github.com/cakedel/wedgwood",
  },
  {
    id: 6,
    title: "Oera",
    anchors: "Oera",
    info: "오에라 홈페이지의 컨셉을 담으면서 브랜드 이미지를 보여주는 데에 중점을 둔 사이트입니다. 메인 컬러를 중심적으로 사용해 브랜드 정체성을 시각화했습니다.",
    skill: ["JQuery", "Slick slide", "AOS"],
    src: process.env.PUBLIC_URL + "/assets/img/pf06.png",
    demo: "http://cakedel.github.io/portfolio/oera",
    github: "https://github.com/cakedel/oera",
  },
];

export { portfolioData };
