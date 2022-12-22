import React from 'react';
import CardUnique from '../components/CardUnique';
import * as C from './styles';
import Routines from '../assets/data/routines.js';

const CirclePage: React.FC = () => {
  const data = Routines.routine
  return (
    <>
      <C.Container>
        <h1>22:00</h1>
        {data.map(function (d: any, idx: any) {
          return (
            <CardUnique key={d.id}
              title={d.title}
              hour={d.hour}
              description={d.description}
              next={d.next}
              color={d.color}
              colorNext={d.colorNext}
              display={d.display}
            />
          )
        }
        )}
      </C.Container>
    </>
  )
}

export default CirclePage;