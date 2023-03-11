import React, { HtmlHTMLAttributes, useState } from 'react';
import * as C from "./styles";

interface IPropsPassword {
  Id_01: string;
  Id_02: string;
  Id_03: string;
  Id_04: string;
}

const Login: React.FC = () => {
  const [passowordShow, setPassowordShow] = useState<boolean>();
  const [password, setPassword] = useState<IPropsPassword>({ "Id_01": '', "Id_02": '', "Id_03": '', "Id_04": '' })
  const enterPerson = (event: any) => {
    // window.open('/home', '_self');
    setPassowordShow(!passowordShow);
  }
  const HandlePassoword = (event: any) => {
    if(event.target.getAttribute('id') == '01') {
      setPassword({ "Id_01": event.target.gerAtribute, "Id_02": password.Id_02, "Id_03": password.Id_03, "Id_04": password.Id_04 })
      console.log(event)
    }
    else if(event.target.getAttribute('id') == '02') {
      setPassword({ "Id_01": password.Id_01, "Id_02": event.target.gerAtribute, "Id_03": password.Id_03, "Id_04": password.Id_04 })
      event.target.input.autofocus(true)
    }
    else if(event.target.getAttribute('id') == '03') {
      setPassword({ "Id_01": password.Id_01, "Id_02": password.Id_02, "Id_03": event.target.gerAtribute, "Id_04": password.Id_04 })
    }
    else if(event.target.getAttribute('id') == '04') {
      setPassword({ "Id_01": password.Id_01, "Id_02": password.Id_02, "Id_03": password.Id_03, "Id_04": event.target.gerAtribute })
    }
    // setPassword(event.target.value);
  }

  const ImgPerfil = 'https://raw.githubusercontent.com/MaikonRodrigs/MeProjectSite/main/src/images/MePictureStarterPage.png';
  return (
    <C.Container>

      <img src={ImgPerfil} alt={ImgPerfil} onClick={enterPerson} />

      {passowordShow &&
        <>
          <C.Pin>
            <C.Password
              autoFocus
              id="01"
              type="text"
              value={password?.Id_01 || undefined }
              onChange={(event) => HandlePassoword(event) }
              maxLength={1}
            />
            <C.Password
              id="02"
              type="text"
              value={password?.Id_02 || undefined}
              onChange={(event) => HandlePassoword(event)}
              maxLength={1}
            />
            <C.Password
              id="03"
              type="text"
              value={password?.Id_03 || undefined}
              onChange={(event) => HandlePassoword(event)}
              maxLength={1}
            />
            <C.Password
              id="04"
              type="text"
              value={password?.Id_04 || undefined}
              onChange={(event) => HandlePassoword(event)}
              maxLength={1}
            />
            {/* <C.Enter type='submit'> </C.Enter> */}
          </C.Pin>
        </>
      }
    </C.Container >

  );
}

export default Login;

