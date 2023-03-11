import React, { useEffect, useState } from 'react';
import * as C from "./styles";
import Card from '../../components/Card';
import Routines from '../../assets/data/Routines.js';
import { useScrollTo } from "react-use-window-scroll";

const Routine = () => {
  const data = Routines.routine;
  // const date = new Date().toLocaleTimeString();
  const scrollTo = useScrollTo();

  return (

    <>
      <C.Container>
        {data.map(function(d: any, idx: any){
          return(
            <Card key={d.id}
              hour={d.hour}
              title={d.title}
              description={d.description}
              backgroundColor={d.backgroundColor}
            />
          )
        }
        )}
        <C.Repeat onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
          <p>REPEAT 🔁</p>
        </C.Repeat>
      </C.Container>
    </>
  );
}

export default Routine;