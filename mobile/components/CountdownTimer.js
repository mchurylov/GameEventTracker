import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { EVENT_START_DATE } from '../constants';

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const eventTime = EVENT_START_DATE.getTime();
      const timeRemaining = eventTime - now;

      if (timeRemaining > 0) {
        // Calculate time units
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update state
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        // Event has started
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <View style={styles.timeBlock}>
          <Text style={styles.timeNumber}>{days}</Text>
          <Text style={styles.timeLabel}>DAYS</Text>
        </View>
        <Text style={styles.timeSeparator}>:</Text>
        <View style={styles.timeBlock}>
          <Text style={styles.timeNumber}>{hours}</Text>
          <Text style={styles.timeLabel}>HOURS</Text>
        </View>
        <Text style={styles.timeSeparator}>:</Text>
        <View style={styles.timeBlock}>
          <Text style={styles.timeNumber}>{minutes}</Text>
          <Text style={styles.timeLabel}>MINS</Text>
        </View>
        <Text style={styles.timeSeparator}>:</Text>
        <View style={styles.timeBlock}>
          <Text style={styles.timeNumber}>{seconds}</Text>
          <Text style={styles.timeLabel}>SECS</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeBlock: {
    alignItems: 'center',
  },
  timeNumber: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffd700',
    minWidth: 60,
    textAlign: 'center',
  },
  timeLabel: {
    fontSize: 14,
    color: '#a0a0a0',
    marginTop: 5,
  },
  timeSeparator: {
    fontSize: 40,
    color: '#ffd700',
    marginHorizontal: 5,
  },
});

export default CountdownTimer;