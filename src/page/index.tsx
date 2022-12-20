import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import * as C from "./styles";
import { useScrollTo } from "react-use-window-scroll";

const Pages = () => {
  const date = new Date().toLocaleTimeString();
  const scrollTo = useScrollTo();
  const [border, setBorder] = useState<boolean>(false)
  const handlerBorder = () => {
    setBorder(!border);
    console.log(border)
  }

  return (
    <>
      <C.Container>
        <Card
          hour="8:40"
          backgroundColor="var(--wake)"
          title='ACORDAR 📵'
          description='se alongar e beber 1 copo de agua'
        />
        <Card
          hour="8:50"
          backgroundColor="var(--food)"
          title='FAZER CAFÉ'
          description='FAZER O CAFÉ PRETO E COLOCAR NA GARRAFA'
        />
        <Card
          hour="9:00"
          backgroundColor="var(--go)"
          title='IR PARA O COMPUTADOR'
          description='se alongar e beber 1 copo de agua'
        />
        <Card
          hour="9:15"
          backgroundColor="var(--job)"
          title='DAILY AGORÁ 📵'
          description='DAILY COM A EQUIPE DA AGORÁ'
        />
        <Card
          hour="10:00"
          backgroundColor="var(--job)"
          title='DAILY BRADESCO 📵'
          description='DAILY COM A EQUIPE DO BRADESCO'
        />
        <Card
          hour="10:20"
          backgroundColor="var(--food)"
          title='FAZER A PRIMEIRA REFEICAO'
          description='1 COPO CAFÉ + 4 OVOS MEXIDOS'
        />
        <Card
          hour="10:40"
          backgroundColor="var(--job)"
          title='REALIZAR TAREFAS JOB 📵'
          description='FAZER JOBS DO DIA'
        />
        <Card
          hour="11:45"
          backgroundColor="var(--food)"
          title='PREPARAR O PRÉ TREINO'
          description='NESCAU BALL + 4 FATIAS PAO + SUCO'
        />
        <Card
          hour="12:15"
          backgroundColor="var(--go)"
          title='IR PARA ACADEMIA'
          description='SE ARRUMAR E IR PARA ACADEMIA'
        />
        <Card
          hour="14:00"
          backgroundColor="var(--food)"
          title='PÓS TREINO'
          description='1 SCOOP WHEY + FRUTA + YORGUTE'
        />
        <Card
          hour="14:15"
          backgroundColor="var(--job)"
          title='REALIZAR TAREFAS 📵'
          description='FAZER JOBS DO DIA'
        />
        <Card
          hour="16:00"
          backgroundColor="var(--food)"
          title='REFEICÃO'
          description='400G ARROZ + 100G PROTEINA + SALADA'
        />
        <Card
          hour="16:20"
          backgroundColor="var(--job)"
          title='REALIZAR TAREFAS 📵'
          description='FAZER JOBS DO DIA'
        />
        <Card
          hour="18:00"
          backgroundColor="var(--job)"
          title='FINALIZAR OS JOBS'
          description='FINALIZAR AS COISAS DO JOB'
        />
        <Card
          hour="18:15"
          backgroundColor="var(--recreation)"
          title='TOMAR BANHO'
          description='RELAXAR E CUIDAR DO CORPO'
        />
        <Card
          hour="19:00"
          backgroundColor="var(--food)"
          title='REFEICÃO'
          description='400G ARROZ + 100G PROTEINA + SALADA'
        />
        <Card
          hour="19:20"
          backgroundColor="var(--recreation)"
          title='HORARIO DO LAZER'
          description='JOGAR OU REALIZAR ALGUMA TAREFA'
        />
        <Card
          hour="21:00"
          backgroundColor="var(--important)"
          title='ESTUDAR 📵'
          description='ESTUDAR PELO MENOS 1H POR DIA'
        />
        <Card
          hour="22:00"
          backgroundColor="var(--food)"
          title='REFEICÃO'
          description='400G ARROZ + 100G PROTEINA + SALADA'
        />
        <Card
          hour="22:20"
          backgroundColor="var(--recreation)"
          title='HORARIO DO LAZER'
          description='JOGAR OU REALIZAR ALGUMA TAREFA'
        />
        <Card
          hour="00:00"
          backgroundColor="var(--food)"
          title='CEIA'
          description='BOWL AVEIA + CEREAIS + BANANA + MACA'
        />
        <Card
          hour="00:20"
          backgroundColor="var(--go)"
          title='IR DEITAR 📵'
          description='ESCOVAR OS DENTES E IR PARA CAMA'
        />
        <Card
          hour="00:30"
          backgroundColor="var(--important)"
          title='LER 📵'
          description='LER PELO MENOS 20 MIN'
        />
        <Card
          hour="00:50"
          backgroundColor="var(--wake)"
          title='DORMIR 📵'
          description='SE DESLIGAR E IR DORMIR'
        />
        <C.Repeat onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
          <p>REPEAT 🔁</p>
        </C.Repeat>
      </C.Container>
    </>
  );
}

export default Pages;