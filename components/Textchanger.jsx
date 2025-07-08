import React from 'react'
import { useState,useEffect } from 'react'



function Textchanger() {
      const texts = React.useMemo(() => [
        "Hi, I'am akhil sharma",
        "  Frontend Developer",
        " I love to code",
      ], []);
     const [ currentText, setCurrentText ] = useState("");
     const [endValue, setEndValue] = useState(0);
     const [isForward, setIsForward] = useState(true);
     const [index, setIndex] = useState(0);
      
 useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      if (isForward) {
        if (endValue < texts[index].length) {
          setEndValue((prev) => prev + 1);
        } else {
          setIsForward(false);
        }
      } else {
        if (endValue > 0) {
          setEndValue((prev) => prev - 1);
        } else {
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 70);
    return () => clearInterval(intervalId);
  }, [isForward, endValue, index, texts]);

     
                                            

  return (
    <div>
      { currentText}
    </div>
  )
}

export default Textchanger
