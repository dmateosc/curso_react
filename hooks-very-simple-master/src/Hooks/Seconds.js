import { useState, useEffect } from 'react';

const Seconds = () => {
  const [ seconds, setSeconds ] = useState(0);

  useEffect(() => {
      const intervalId = setInterval(() => {
          setSeconds( seconds + 1);
      }, 1000);

      //clearInterval(intervalId);
  }, [seconds]);

  return seconds
  
}

export default Seconds;