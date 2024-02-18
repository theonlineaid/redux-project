import React, { useState, useEffect } from 'react';

function FlashingTime({ targetDate }) {
    const calculateTimeRemaining = () => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            // If the target date is in the past or reached, return all zeros
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div>
            <h2>Time Remaining:</h2>
            <p>Days: {timeRemaining.days}</p>
            <p>Hours: {timeRemaining.hours}</p>
            <p>Minutes: {timeRemaining.minutes}</p>
            <p>Seconds: {timeRemaining.seconds}</p>
        </div>
    );
}

export default FlashingTime;
