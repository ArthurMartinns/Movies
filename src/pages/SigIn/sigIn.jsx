import { FaEnvelope } from 'react-icons/fa'
import Input from '../../components/Input/input.jsx'
import * as S from './sigIn'
import Button from '../../components/Button/button.jsx'
import { RiLockPasswordFill } from 'react-icons/ri'

function SigIn() {
    return (
            <S.Container>
                <S.wrapper>
                    <S.left>
                        <S.content>
                            <S.top>
                                <h1>
                                    RocketMovies
                                </h1>
                                <p>
                                    Aplicação para acompanhar tudo que assitir.
                                </p>
                            </S.top>
                            <S.form>
                                <h3>Faça seu login</h3>

                                <form action="">
                                    <Input icon={FaEnvelope} placeholder="E-mail"/>
                                    <Input icon={RiLockPasswordFill} placeholder="Password"/>
                                </form>

                                <Button title={'Enviar'}/>
                            </S.form>
                        </S.content>
                    </S.left>
                    <S.right/>
                </S.wrapper>
            </S.Container>
    )
}

export default SigIn