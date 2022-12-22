import React from 'react';

import * as C from './styles';

export interface IProps {
  hour?: string;
  title?: string;
  description?: string;
  color?: string;
  selectBorder?: boolean;
  next?: string;
}

const CardUnique: React.FC<IProps> = ({
  hour,
  title,
  description,
  color,
  next,
}: IProps) => {
  return (
    <C.Container >
      <C.Wrapper color={color}>
        <h1>{title}</h1>
        <C.Circle color={color}>
          <span>{hour}</span>
        </C.Circle>
        <C.Description color={color}>
          <span>{description}</span>
        </C.Description>
        <C.NextCircle>
        <p>{next}</p>
        </C.NextCircle>
      </C.Wrapper>
    </C.Container>
  )
}

export default CardUnique;