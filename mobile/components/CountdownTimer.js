import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { EVENT_START_DATE } from '../constants';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +EVENT_START_DATE - +new Date();
      let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
      }

      return timeLeft;
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update timer every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Pad numbers with leading zeros
  const padWithZero = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event Countdown</Text>
      <View style={styles.timerContainer}>
        {/* Days */}
        <View style={styles.timeUnit}>
          <View style={styles.timeBox}>
            <Text style={styles.timeValue}>{padWithZero(timeLeft.days)}</Text>
          </View>
          <Text style={styles.timeLabel}>DAYS</Text>
        </View>

        {/* Hours */}
        <View style={styles.timeUnit}>
          <View style={styles.timeBox}>
            <Text style={styles.timeValue}>{padWithZero(timeLeft.hours)}</Text>
          </View>
          <Text style={styles.timeLabel}>HOURS</Text>
        </View>

        {/* Minutes */}
        <View style={styles.timeUnit}>
          <View style={styles.timeBox}>
            <Text style={styles.timeValue}>{padWithZero(timeLeft.minutes)}</Text>
          </View>
          <Text style={styles.timeLabel}>MINS</Text>
        </View>

        {/* Seconds */}
        <View style={styles.timeUnit}>
          <View style={styles.timeBox}>
            <Text style={styles.timeValue}>{padWithZero(timeLeft.seconds)}</Text>
          </View>
          <Text style={styles.timeLabel}>SECS</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeUnit: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  timeBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    borderColor: '#ffd700',
    borderRadius: 4,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffd700',
  },
  timeLabel: {
    fontSize: 12,
    color: 'white',
    marginTop: 4,
  }
});

export default CountdownTimer;