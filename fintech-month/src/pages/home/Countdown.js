import React, { useEffect, useState } from "react";

function Countdown() {
  const calculateTimeLeft = () => {
    // let year = new Date().getFullYear();
    const difference = +new Date(`${2021}-01-02`) - +new Date();
    let timeLeft = {};

    function minTwoDigits(n) {
      return (n < 10 ? '0' : '') + n;
    }

    if (difference >= 0) {
      timeLeft = {
        Days: minTwoDigits(Math.floor(difference / (1000 * 60 * 60 * 24))),
        Hours: minTwoDigits(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        Min: minTwoDigits(Math.floor((difference / 1000 / 60) % 60)),
        Sec: minTwoDigits(Math.floor((difference / 1000) % 60)),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <span className="timerPadding">
        {timeLeft[interval]} {}
      </span>
    );
  });
  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

export default Countdown;