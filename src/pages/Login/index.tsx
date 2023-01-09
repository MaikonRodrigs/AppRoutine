import React from 'react';
import * as C from "./styles";


const Login: React.FC = () => {
  const enterPerson = () => {
    window.open('/home', '_self');
  }

  const ImgPerfil = 'https://raw.githubusercontent.com/MaikonRodrigs/MeProjectSite/main/src/images/MePictureStarterPage.png'
  return(
    <C.Container>
    <img src={ImgPerfil} alt={ImgPerfil} onClick={enterPerson} />
</C.Container>
    
    );
}

export default Login;

