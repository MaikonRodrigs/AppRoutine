import React from 'react';

import * as C from './styles';

const CardUnique: React.FC = () => {
  return (
    <C.Container>
      <C.Wrapper>
        <h1>Wake Up!</h1>
        <C.Circle>
          <span>08:40</span>
        </C.Circle>
        <C.Description>
          <span>SE ALONGAR E BEBER 1 COPO DE AGUA</span>
        </C.Description>
        <C.NextCircle>
        <p>9:00 FAZER CAFÉ</p>
        </C.NextCircle>
      </C.Wrapper>
    </C.Container>
  )
}

export default CardUnique;