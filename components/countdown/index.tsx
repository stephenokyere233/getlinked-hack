/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const Countdown = ({ targetDate }:any) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-6 justify-center xl:justify-start unica-one items-center text-[40px] lg:text-[60px]">
      <span className="">
        <span className="">{timeLeft.days.toString().padStart(2, "0")}</span>
        <span className="uppercase text-[18px]">d</span>
      </span>
      <span className="">
        <span className="">{timeLeft.hours.toString().padStart(2, "0")}</span>
        <span className="uppercase text-[18px]">h</span>
      </span>
      <span className="">
        <span className="">{timeLeft.minutes.toString().padStart(2, "0")}</span>
        <span className="uppercase text-[18px]">m</span>
      </span>
      <span className="">
        <span className="">{timeLeft.seconds.toString().padStart(2, "0")}</span>
        <span className="uppercase text-[18px]">s</span>
      </span>
    </div>
  );
};

export default Countdown;
