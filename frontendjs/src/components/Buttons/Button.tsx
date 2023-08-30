import { ButtonLoginAndRegister, ButtonLogout, Container } from "./styles";

interface Buttons {
   firstText: string
   secondText: string
   onClickFunction: (e : any) => void
}

export default function LoginAndRegister({ firstText, secondText, onClickFunction } : Buttons) {
    return (
        <Container>
            <ButtonLoginAndRegister>
                {firstText}
            </ButtonLoginAndRegister>
            <ButtonLogout onClick={onClickFunction}>
                {secondText}
            </ButtonLogout>
        </Container>
    );
}