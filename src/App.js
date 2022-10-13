import "./Main.scss";
import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
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
      <Cover on={on} />
      <button
        onClick={() => {
          setOn(!on);
        }}
      ></button>
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
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section mainPage">
                <div className="case">
                  <h1>상상을 코딩하다</h1>
                </div>
              </div>
              {portfolioData.map((it, idx) => {
                return (
                  <div className="section" key={it.id}>
                    <div className="case">
                      <div className="inner">
                        <div className="picture">
                          <img src={it.src} alt="{it.title}" />
                        </div>
                        <ul className="desc">
                          <li className="pfTitle">{it.title}</li>
                          <li className="pfType">{it.type}</li>
                          <li>
                            <a
                              className="pfLink"
                              href={it.link}
                              target="_blank"
                            >
                              Link
                            </a>
                          </li>
                          <li className="pfInfo">{it.info}</li>
                          <li>
                            {it.color && <strong>color</strong>}
                            <ul className="pfColor">
                              {it.color?.map((el, idx) => {
                                return (
                                  <li key={idx} style={{ background: el }}></li>
                                );
                              })}
                            </ul>
                          </li>
                        </ul>
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
