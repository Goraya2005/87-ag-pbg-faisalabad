'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const pastEventDate = new Date("April 20, 2024");

function calculateTimeDifference() {
  const now = new Date();
  
  // Convert Date objects to numeric values using .getTime()
  const totalMilliseconds = now.getTime() - pastEventDate.getTime(); 

  const totalSeconds = Math.floor(totalMilliseconds / 1000);
  const secondsPassed = totalSeconds % 60;

  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutesPassed = totalMinutes % 60;

  const totalHours = Math.floor(totalMinutes / 60);
  const hoursPassed = totalHours % 24;

  const totalDays = Math.floor(totalHours / 24);
  const daysPassed = totalDays % 30;

  const totalMonths = Math.floor(totalDays / 30);
  const monthsPassed = totalMonths % 12;

  const yearsPassed = Math.floor(totalMonths / 12);

  return { yearsPassed, monthsPassed, daysPassed, hoursPassed, minutesPassed, secondsPassed };
}

function PastEventDays() {
  const [timePassed, setTimePassed] = useState(calculateTimeDifference());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimePassed(calculateTimeDifference());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-start">
      
      {/* Event Date Block */}
      <div className="flex flex-col justify-center h-full p-6 bg-brown-800 text-center" data-aos="fade-up">
        <h5 className="text-2xl font-bold mb-4">Date of Past Event</h5>
        <p className="text-xl">
          {pastEventDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      {/* Centered Image */}
      <div className="flex flex-col justify-center items-center h-full p-6" data-aos="fade-up">
        <div className="event-block">
          <Image
            src="/images/event.jpg"
            alt="Past Event"
            width={150}
            height={150}
            className="object-cover rounded-full"
          />
        </div>
      </div>

      {/* Time Passed Block */}
      <div className="flex flex-col justify-center h-full p-6 bg-red-800 text-center" data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-2xl font-bold mb-4">Time Since Event</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 sm:grid-cols-3 gap-4">
          <div className="time-block">
            <p className="text-3xl font-bold">{timePassed.yearsPassed}</p>
            <p className="text-sm">Years</p>
          </div>
          <div className="time-block">
            <p className="text-3xl font-bold">{timePassed.monthsPassed}</p>
            <p className="text-sm">Months</p>
          </div>
          <div className="time-block">
            <p className="text-3xl font-bold">{timePassed.daysPassed}</p>
            <p className="text-sm">Days</p>
          </div>
          <div className="time-block">
            <p className="text-3xl font-bold">{timePassed.hoursPassed}</p>
            <p className="text-sm">Hours</p>
          </div>
          <div className="time-block">
            <p className="text-3xl font-bold">{timePassed.minutesPassed}</p>
            <p className="text-sm">Minutes</p>
          </div>
          <div className="time-block">
            <p className="text-3xl font-bold">{timePassed.secondsPassed}</p>
            <p className="text-sm">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastEventDays;
