import React, { useEffect, useState } from 'react';

const Greeting = function() {
  const [greeting, setGreeting] = useState('');

  useEffect(function() {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return <h2>{greeting}, Welcome to Our Institution!</h2>;
};

export default Greeting;
