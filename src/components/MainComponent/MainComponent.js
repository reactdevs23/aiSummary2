import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  heading,
  title,
  data,
  twoTopLine,
  twoBottomLine,
  threeTopLine,
  threeBottomLine,
  fourTopLine,
  fourBottomLine,
  fiveTopLine,
  fiveBottomLine,
  bottomText,
}) => {
  const numberOfUsers =
    data.items.length === 2
      ? 5
      : data.items.length === 3
      ? 5
      : data.items.length === 4
      ? 7
      : data.items.length === 5
      ? 11
      : null;
  const topLine =
    data.items.length === 2
      ? twoTopLine
      : data.items.length === 3
      ? threeTopLine
      : data.items.length === 4
      ? fourTopLine
      : data.items.length === 5
      ? fiveTopLine
      : "";
  const bottomLine =
    data.items.length === 2
      ? twoBottomLine
      : data.items.length === 3
      ? threeBottomLine
      : data.items.length === 4
      ? fourBottomLine
      : data.items.length === 5
      ? fiveBottomLine
      : "";
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div
        className={[
          classes.wrapper,
          classes[`wrapper-${data.items.length}`],
        ].join(" ")}
      >
        <div className={classes.box}>
          <h3 className={classes.heading}>{heading}</h3>
          <h4 className={classes.title}>{title}</h4>
        </div>

        <div className={classes.container}>
          <div className={classes.brainWrapper}>
            <div className={classes.topLine}>{topLine}</div>
            {data.items.map((el, i) => (
              <div className={classes.circle} key={i}>
                <div className={classes.icon}>{el.img}</div>
                <p className={classes.name}>{el.name}</p>
              </div>
            ))}{" "}
            <div className={classes.bottomLine}>{bottomLine}</div>
          </div>
          <div className={classes.userWrapper}>
            {data.users.slice(0, numberOfUsers).map((user, i) => (
              <div
                className={classes.userCircle}
                key={i}
                style={{ "--border": user.border }}
              >
                <div className={classes.user}>{user.icon}</div>
              </div>
            ))}{" "}
          </div>
        </div>
      </div>
      <p className={classes.bottomText}>{bottomText}</p>
    </div>
  );
};

export default MainComponent;
