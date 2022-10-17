const profile = {
  name: "Hong Jiwon",
  email: "cakedel86@gmail.com",
  tel: "010-2824-8898",
  skill: ["HTML", "CSS", "JavaScript", "React", "Sass", "Redux Toolkit"],
};

export { profile };

const portfolioData = [
  {
    id: 1,
    title: "Coconut Music",
    anchors: "COCONUTMUSIC",
    type: "React",
    font: ["폰트이름", "폰트이름2"],
    info: "코코넛 뮤직은 네이버 음악 api를 바탕으로 제작된 뮤직 웹어플리케이션입니다. 플레이 리스트에 음악을 담아 재생할 수 있으며, 검색 기능도 제공합니다.",
    period: "22.09.",
    skill: ["React", "react-router-dom", "axios", "redux-toolkit", "sass"],
    src: process.env.PUBLIC_URL + "/assets/img/pf01.png",
    demo: "http://cakedel.github.io/coconut",
    github: "https://github.com/cakedel/coconut/tree/main/project",
  },
  {
    id: 2,
    title: "Kolon Industries",
    anchors: "KolonIndustries",
    type: "React",
    font: ["폰트이름", "폰트이름2"],
    info: "react-router-dom을 이용한 SPA 웹어플리케이션입니다. 주가 api와 연동되어 최근 주가 정보도 확인할 수 있으며 채용정보 탭에서는 게시판 기능을 사용할 수 있습니다.",
    skill: ["React", "react-router-dom", "axios", "redux-toolkit", "sass"],
    src: process.env.PUBLIC_URL + "/assets/img/pf02.png",
    demo: "https://cakedel.github.io/kolonindustries/",
    github: "https://github.com/cakedel/kolonindustries",
  },
  {
    id: 3,
    title: "Carandache",
    anchors: "Carandache",
    type: "ResponsiveWeb",
    font: ["폰트이름", "폰트이름2"],
    info: "JQuery 라이브러리를 사용한 반응형 웹 사이트입니다. 기존의 까렌다쉬 홈페이지에서 메뉴를 좀 더 정리하고 돋보이도록 설계했습니다.",
    skill: ["Responsive Web", "JQuery", "slick-slide"],
    src: process.env.PUBLIC_URL + "/assets/img/pf03.png",
    demo: "http://cakedel.github.io/porfol/carandache/",
    github: "https://github.com/cakedel/porfol/tree/main/carandache",
  },
  {
    id: 4,
    title: "Doosung Paper",
    anchors: "DoosungPaper",
    type: "ResponsiveWeb",
    font: ["폰트이름", "폰트이름2"],
    info: "바닐라 자바스크립트를 이용한 반응형 웹사이트입니다. 다양한 형태의 레이아웃을 시도하는 동시에 레이아웃들이 사이트 전체에 녹아들도록 했습니다.",
    skill: ["Responsive Web", "JavaScript", "Swiper slide"],
    src: process.env.PUBLIC_URL + "/assets/img/pf.png",
    demo: "http://cakedel.github.io/porfol/doosung",
    github: "https://github.com/cakedel/porfol/tree/main/doosung",
  },
  {
    id: 5,
    title: "Oera",
    anchors: "Oera",
    type: "Web",
    font: ["폰트이름", "폰트이름2"],
    info: "오에라 홈페이지의 컨셉을 담으면서 브랜드 이미지를 보여주는 데에 중점을 둔 사이트입니다. 메인 컬러를 중심적으로 사용해 브랜드 정체성을 시각화했습니다.",
    skill: ["JQuery", "slick slide", "AOS"],
    src: process.env.PUBLIC_URL + "/assets/img/pf.png",
    demo: "http://cakedel.github.io/portfolio/oera",
    github: "https://github.com/cakedel/portfolio/tree/main/oera",
  },
];

export { portfolioData };
