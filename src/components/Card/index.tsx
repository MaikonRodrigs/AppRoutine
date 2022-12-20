import React from 'react';

import * as C from './styles';

export interface IProps {
  hour?: string;
  title?: string;
  description?: string;
  backgroundColor?: string;
}

const Card: React.FC<IProps> = ({
  hour,
  title,
  description,
  backgroundColor,
}: IProps) => {
  return (
    <C.Container backgroundColor={backgroundColor}>
      <C.Hour>
        <p>{hour}</p>
      </C.Hour>
      <C.Informations>
        <C.Title>
          <p>{title}</p>
        </C.Title>
        <C.Description>
          <p>{description}</p>
        </C.Description>
      </C.Informations>
    </C.Container>
  );
}

export default Card;