import React from 'react';

import * as C from './styles';

export interface IProps {
  title?: string;
  hour?: string;
  description?: string;
  color?: string;
  selectBorder?: boolean;
  next?: string;
  colorNext?: string;
  display?: string;
  // onClick?: () => void;
}

const CardUnique: React.FC<IProps> = ({
  title,
  hour,
  description,
  color,
  next,
  colorNext,
  display,
  // onClick = undefined,
}: IProps) => {
  return (
    <C.Container>
      <C.FullCard display={display}>
        <C.Title color={color}>{title}</C.Title>
        <C.Circle color={color}>
          <C.Hour>{hour}</C.Hour>
        </C.Circle>
        <C.Description color={color}>{description}</C.Description>
        <C.Next colorNext={colorNext}>{next}</C.Next>
      </C.FullCard >
    </C.Container>
  )
}

export default CardUnique;