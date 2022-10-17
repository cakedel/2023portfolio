import "./Main.scss";
import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { TypeAnimation } from "react-type-animation";
import { profile, portfolioData } from "./Data";

const ANCHOR = portfolioData.map((it) => (it = it.anchors));
const Cover = (on) => {
  return <div className={`cover ${on ? "on" : ""}`}>커버</div>;
};
const App = () => {
  const [num, setNum] = useState(1);
  const [on, setOn] = useState(false);
  return (
    <div className="PORTFOLIO">
      <div className="num">{portfolioData[num - 1]?.title}</div>
      <nav className="Gnb">
        <ul>
          {portfolioData.map((it, idx) => {
            return (
              <li>
                <a href={`#${it.anchors}`} className="menu"></a>
              </li>
            );
          })}
        </ul>
      </nav>
      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000}
        anchors={["cover", ...ANCHOR, "footer"]}
        afterLoad={(origin, destination) => setNum(destination.index)}
        css3={false}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section mainPage">
                <div className="case">
                  <TypeAnimation
                    sequence={["상상을 코딩하다"]}
                    wrapper="h1"
                    speed="0"
                    cursor={true}
                  />
                  <p>2022 HONG JIWON's PORTFOLIO</p>
                </div>
              </div>
              {portfolioData.map((it, idx) => {
                return (
                  <div className="section" key={it.id}>
                    <div className="case">
                      <div className="inner">
                        <div className="cover">
                          <div className="picture">
                            <img src={it.src} alt="{it.title}" />
                          </div>
                          <ul className="desc">
                            <li className="pfTitle">{it.title}</li>
                            <li className="pfLink">
                              <ul>
                                <li>
                                  <a
                                    className="linkBtn"
                                    href={it.demo}
                                    target="_blank"
                                  >
                                    Demo
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="linkBtn"
                                    href={it.github}
                                    target="_blank"
                                  >
                                    Github
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="pfSkillTitle">Skill</li>
                            <li className="pfSkill">
                              {it.skill?.map((el, idx) => {
                                return (
                                  <ul className="skill">
                                    <li>{el}</li>
                                  </ul>
                                );
                              })}
                            </li>
                            <li className="pfInfo">{it.info}</li>
                            <li>
                              {it.color && <strong>Color</strong>}
                              <ul className="pfColor">
                                {it.color?.map((el, idx) => {
                                  return (
                                    <li
                                      key={idx}
                                      style={{ background: el }}
                                    ></li>
                                  );
                                })}
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default App;
