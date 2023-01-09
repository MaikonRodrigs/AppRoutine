import React from 'react';
// import { Container } from './styles';

    
  const Hours = () => {
    var dataAtual = new Date();
    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes('00');
    var seconds = dataAtual.getSeconds();

    setTimeout(seconds,500);

  return (
    <div>
      {horas}:{minutos}:{seconds}
    </div>
  )
}

export default Hours;