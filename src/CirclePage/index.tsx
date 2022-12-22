import React from 'react';
import CardUnique from '../components/CardUnique';
import * as C from './styles';
import Routines from '../assets/data/routines.js';


const CirclePage: React.FC = () => {
  const data = Routines.routine
  return (
    <>
      <C.Container>
        {data.map(function (d: any, idx: any) {
          return (
            <CardUnique key={d.id}
              title={d.title}
              hour={d.hour}
              description={d.description}
              next={d.next}
              color={d.color}
            />
          )
        }
        )}
      </C.Container>
    </>
  )
}

export default CirclePage;