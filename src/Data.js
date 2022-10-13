const profile = {
  name: "Hong jiwon",
  email: "cakedel86@gmail.com",
  tel: "010-2824-8898",
};

export { profile };

const portfolioData = [
  {
    id: 1,
    title: "COCONUT MUSIC",
    anchors: "COCONUTMUSIC",
    type: "React",
    font: ["폰트이름", "폰트이름2"],
    info: "코코넛 뮤직은 네이버 음악 api를 바탕으로 제작된 뮤직 웹어플리케이션입니다. 플레이 리스트에 음악을 담아 재생할 수 있으며, 검색 기능도 제공합니다.",
    color: ["#222", "#f1f1f1", "#085"],
    skill: ["react-router-dom", "axios", "redux-toolkit"],
    src: process.env.PUBLIC_URL + "/assets/img/pf01.png",
    link: "http://cakedel.github.io/coconut",
  },
  {
    id: 2,
    title: "Kolon Industries",
    anchors: "KolonIndustries",
    type: "React",
    font: ["폰트이름", "폰트이름2"],
    info: "react-router-dom을 이용한 SPA 웹어플리케이션입니다. 주가 api와 연동되어 최근 주가 정보도 확인할 수 있으며 채용정보 탭에서는 게시판 기능을 사용할 수 있습니다.",
    color: ["#222", "#f1f1f1", "#085"],
    skill: ["React", "react-router-dom", "axios", "redux-toolkit"],
    src: process.env.PUBLIC_URL + "/assets/img/pf01.png",
    link: "http://cakedel.github.io/",
  },
  {
    id: 3,
    title: "Carandache",
    anchors: "Carandache",
    type: "ResponsiveWeb",
    font: ["폰트이름", "폰트이름2"],
    info: "JQuery 라이브러리를 사용한 반응형 웹 사이트입니다. 기존의 까렌다쉬 홈페이지에서 메뉴를 좀 더 정리하고 돋보이도록 설계했습니다. 포인트 컬러는 필요한 부분에만 사용하여 ",
    color: ["#222", "#f1f1f1", "#085"],
    skill: ["JQuery"],
    src: process.env.PUBLIC_URL + "/assets/img/pf01.png",
    link: "http://cakedel.github.io/porfol/carendache/",
  },
  {
    id: 4,
    title: "Doosung Paper",
    anchors: "DoosungPaper",
    type: "ResponsiveWeb",
    font: ["폰트이름", "폰트이름2"],
    info: "포폴설명",
    skill: ["React", "react-router-dom", "axios", "redux-toolkit"],
    src: process.env.PUBLIC_URL + "/assets/img/pf01.png",
    link: "http://cakedel.github.io/porfol/doousng",
  },
  {
    id: 5,
    title: "Orea",
    anchors: "Oera",
    type: "ResponsiveWeb",
    font: ["폰트이름", "폰트이름2"],
    info: "오에라 홈페이지를 ",
    color: ["#222", "#f1f1f1", "#085"],
    skill: ["React", "react-router-dom", "axios", "redux-toolkit"],
    src: process.env.PUBLIC_URL + "/assets/img/pf01.png",
    link: "http://cakedel.github.io/portfolio/oera",
  },
];

export { portfolioData };
