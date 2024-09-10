import * as S from './signUp.styles'
import Input from '../../components/Input/input'
import Button from '../../components/Button/button'
import { FaEnvelope, FaUser } from 'react-icons/fa'
import { GiPadlock } from 'react-icons/gi'

function SignUp() {
    return (
        <>
            <S.Container>
                <S.wrapper>
                    <S.left>
                        <S.Content>
                            <S.Top>
                                <S.Title>
                                    RocketMovies
                                </S.Title>
                                <S.SubTitle>
                                    Aplicação para acompanhar tudo que assitir.
                                </S.SubTitle>
                            </S.Top>
                            <S.Formulario>
                                <S.Label>
                                    Cadastro
                                </S.Label>

                                <Input icon={FaUser} placeholder="User" type="text" /> 
                                <Input icon={FaEnvelope} placeholder="Email" type="email"/>
                                <Input icon={GiPadlock} placeholder="Password" type="password"/> 

                                <Button title={'Cadastrar'}/>
                            </S.Formulario>
                        </S.Content>
                    </S.left>
                    <S.right/>
                </S.wrapper>
            </S.Container>
        </>
    )
}

export default SignUp