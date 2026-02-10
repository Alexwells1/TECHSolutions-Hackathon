import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const OPEN_DATE_STRING =
  import.meta.env.VITE_REGISTRATION_OPEN_DATE || "2026-02-10T22:59:00Z";
const OPEN_DATE = new Date(OPEN_DATE_STRING);
const OPEN_TIME = OPEN_DATE.getTime();

export default function RegistrationGate() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isOpen = now >= OPEN_TIME;

  if (!isOpen) {
    const remaining = OPEN_TIME - now;
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    const openingDateStr = OPEN_DATE.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });

    return (
      <div className="h-[100dvh] w-full flex flex-col items-center justify-center px-3 sm:px-4 font-space bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 w-full px-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 font-heading tracking-tight text-gray-900">
            Registration Opens On
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-space px-2">
            {openingDateStr}
          </p>
        </div>

        <div className="w-full flex items-baseline justify-center">
          <div className="flex items-center justify-center flex-wrap gap-1 sm:gap-1.5 md:gap-2 px-1">
            <TimeBox value={days} label="Days" />
            <Colon />
            <TimeBox value={hours} label="Hours" />
            <Colon />
            <TimeBox value={minutes} label="Minutes" />
            <Colon />
            <TimeBox value={seconds} label="Seconds" />
          </div>
        </div>
      </div>
    );
  }

  return <Outlet />;
}

interface TimeBoxProps {
  value: number;
  label: string;
}

function TimeBox({ value, label }: TimeBoxProps) {
  const displayValue = Math.max(0, value);

  return (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-lg md:rounded-xl mb-1 sm:mb-1.5 bg-white shadow-md sm:shadow-lg border border-gray-200">
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-space tracking-wide text-gray-900">
          {String(displayValue).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs sm:text-sm md:text-base font-medium font-space text-gray-700">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <div className="flex items-center justify-center h-14 sm:h-16 md:h-20 lg:h-24 -mb-1 sm:-mb-1.5">
      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mx-0.5 sm:mx-1 font-mono text-gray-900">
        :
      </span>
    </div>
  );
}