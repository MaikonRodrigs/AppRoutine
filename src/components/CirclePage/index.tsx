import React from 'react';
import CardUnique from '../CardUnique';
import Hours from '../Hours';
import * as C from './styles';
import Routines from '../../assets/data/routines.js';

const CirclePage: React.FC = () => {
  const data = Routines.routine;
  setInterval('Hours()', 1000);

  return (
    <>
      <C.Container>
        {/* <span><Hours /></span> */}
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