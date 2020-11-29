import { useRef, useEffect, useState } from "react";
import Clouds from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";
const useVanta = () =>{

    const myRefDiv = useRef(null);
    const [vanta, setVanta] = useState(0); //valor inicial a 0
  
    useEffect(() => {
      console.log("MyRefDiv.current (en UseEffect", myRefDiv.current);
      // Solo pasa una vez por dentro del if
      if (!vanta) {
        //SOLO PASA UNA VEZ
        setVanta(
          Clouds({
            THREE,
            el: myRefDiv.current,
          })
        );
      }
      return () => {
        if (vanta) {
          vanta.destroy();
        }
      };
    }, [vanta]);

    return myRefDiv
}

export default useVanta

