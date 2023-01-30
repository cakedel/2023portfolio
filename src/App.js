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
  const afterPage = (destination, origin) => {
    setNum(destination.index);
    setOn(destination.index === origin.index - 1 ? !on : on);
  };

  return (
    <div className="PORTFOLIO">
      <div className="num">{portfolioData[num - 1]?.id}</div>
      <nav className="Gnb">
        <ul>
          {portfolioData.map((it, idx) => {
            return (
              <li key={idx}>
                <a
                  href={`#${it.anchors}`}
                  className={`menu ${idx === num - 1 ? "on" : ""}`}
                ></a>
              </li>
            );
          })}
          <li>
            <a
              href={`#profile`}
              className={`menu ${7 === num ? "on" : ""}`}
            ></a>
          </li>
        </ul>
      </nav>
      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000}
        anchors={["cover", ...ANCHOR, "profile"]}
        afterLoad={(origin, destination, direction) =>
          afterPage(destination, origin)
        }
        css3={false}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section mainPage">
                <div className="case">
                  <div className="inner main">
                    <TypeAnimation
                      sequence={[
                        "생각만큼 넓어지는 세계",
                        1500,
                        "상상을 코딩하다",
                      ]}
                      wrapper="h1"
                      speed="0"
                      cursor={true}
                    />
                    <p>2023 HONG JIWON PORTFOLIO</p>
                    <div className="code">
                      CODE <br />
                      IMAGINATION
                    </div>
                  </div>
                </div>
              </div>
              {portfolioData.map((it, idx) => {
                return (
                  <div className="section subPage" key={it.id}>
                    <div className="case">
                      <div className="inner">
                        <div className="cover">
                          <div className="ribbon"></div>
                          <div className="picture">
                            <img
                              src={
                                process.env.PUBLIC_URL + "/assets/img/pf.png"
                              }
                              alt="{it.title}"
                              className="pfPicture"
                            />
                            <figure className={`item0${it.id}`}></figure>
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
                            <li className="pfInfo">{it.info}</li>
                            <li className="pfPeriodTit">Period</li>
                            <li className="pfPeriod">{it.period}</li>
                            <li className="pfContTit">Contribution</li>
                            <li className="pfContribution">
                              {it.contribution}
                            </li>
                            <li className="pfSkillTitle">Tools</li>
                            <li className="pfSkill">
                              {it.skill?.map((el, idx) => {
                                return (
                                  <ul className="skill" key={idx}>
                                    <li>{el}</li>
                                  </ul>
                                );
                              })}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="section mainPage profile">
                <div className="case">
                  <div className="inner">
                    <h2>HONG JIWON</h2>
                    <div className="desc">
                      <div className="content">
                        <h3>PROFILE</h3>
                        <ul className="profileContent">
                          <li>{profile.name}</li>
                          <li>{profile.email}</li>
                          <li>{profile.tel}</li>
                          <li className="home">
                            <a
                              href="https://github.com/cakedel"
                              target="_balnk"
                            >
                              <i className="xi-github" />
                            </a>
                            <a href="https://velog.io/@cakedel" target="_blank">
                              <i className="xi-home-o" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="content">
                        <h3>SKILL</h3>
                        <ul>
                          <li>
                            <strong>Language</strong>
                            <ul>
                              <li>HTML</li>
                              <li>CSS</li>
                              <li>JavaScript</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Library / FrameWork</strong>
                            <ul>
                              <li>React</li>
                              <li>Redux-toolkit</li>
                              <li>Sass</li>
                              <li>JQuery</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Graphic</strong>
                            <ul>
                              <li>PhotoShop</li>
                              <li>Illustrator</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default App;
