import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";

import Brain from "./images/Brain";
import UserImg from "./images/UserImg";
import TwoTopLine from "./images/TwoTopLine";

import TwoBottomLine from "./images/TwoBottomLine";
import ThreeTopLine from "./images/ThreeTopLine";
import ThreeBottomLine from "./images/ThreeBottomLine";
import FourBottomLine from "./images/FourBottomLine";
import FourTopLine from "./images/FourTopLine";
import FiveTopLine from "./images/FiveTopLine";
import FiveBottomLine from "./images/FiveBottomLine";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Source Sans 3Inter', sans-serif",
    mainBg: "#fff",
    primaryColor: "#EAECF0",
    headingColor: "#344054",
    innerPointColor: "#8E3BFC",
    outerPointColor: "rgb(142, 59, 252,.5)",
    titleColor: "#8E3BFC",
    circleBg: "#F4EBFF",
    heading: "Your Data",
    title: "AI COMPONENT",
    bottomText: "Your Users",
    bottomTextColor: "#000",
    nameColor: "#000",
    twoTopLine: <TwoTopLine color="#D0D5DD" />,
    twoBottomLine: <TwoBottomLine color="#475467" />,
    threeTopLine: <ThreeTopLine color="#D0D5DD" />,
    threeBottomLine: <ThreeBottomLine color="#475467" />,
    fourTopLine: <FourTopLine color="#D0D5DD" />,
    fourBottomLine: <FourBottomLine color="#475467" />,
    fiveTopLine: <FiveTopLine color="#D0D5DD" />,
    fiveBottomLine: <FiveBottomLine color="#475467" />,

    data: {
      users: [
        { icon: <UserImg color="#475467" />, border: "1px solid #000" },
        { icon: <UserImg color="#475467" />, border: "1px solid #000" },
        { icon: <UserImg color="#475467" />, border: "1px solid #000" },
        { icon: <UserImg color="#475467" />, border: "1px solid #000" },
        { icon: <UserImg color="#475467" />, border: "1px solid #000" },
        { icon: <UserImg color="#475467" />, border: "1px solid #000" },
        { icon: <UserImg color="#475467" />, border: "1px solid #000" },
        { icon: <UserImg color="#475467" />, border: "1px solid #000" },
        { icon: <UserImg color="#475467" />, border: "1px solid #000" },
        { icon: <UserImg color="#475467" />, border: "1px solid #000" },
        { icon: <UserImg color="#475467" />, border: "1px solid #000" },
      ],
      items: [
        { img: <Brain color="#8E3BFC" />, name: "Brain A" },
        { img: <Brain color="#8E3BFC" />, name: "Brain B" },
        { img: <Brain color="#8E3BFC" />, name: "Brain B" },
        { img: <Brain color="#8E3BFC" />, name: "Brain B" },
        { img: <Brain color="#8E3BFC" />, name: "Brain B" },
      ],
    },
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,
          "--primaryColor": allData.primaryColor,
          "--innerPointColor": allData.innerPointColor,
          "--outerPointColor": allData.outerPointColor,
          "--circleBg": allData.circleBg,
          "--headingColor": allData.headingColor,
          "--titleColor": allData.titleColor,
          "--bottomTextColor": allData.bottomTextColor,
          "--nameColor": allData.nameColor,
          fontFamily: allData.fontFamily,
          background: allData.background,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
