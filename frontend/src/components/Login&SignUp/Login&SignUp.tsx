import { Container, ButtonLogAndRegister, ButtonLogout } from "./style";

interface Buttons {
   firstText: string
   secondText: string
   onPressFunction: (e : any) => void
}


export default function LoginAndRegister({ firstText, secondText, onPressFunction } : Buttons) {
    return (
      <Container>
        <ButtonLogAndRegister onClick={onPressFunction}>
          {firstText}
        </ButtonLogAndRegister>
        <ButtonLogout>
        {secondText}
        </ButtonLogout>
      </Container>
    );
}
  