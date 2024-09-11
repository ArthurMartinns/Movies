import Input from '../Input/input'
import * as S from './header.styles'

function Header() {
    return (
        <S.Container>
            <S.Title>
                Titulo 
            </S.Title>

            <Input/>

            <S.Profile>
                <S.Left>
                    <p>teste</p>
                </S.Left>
                <S.Right>

                </S.Right>
            </S.Profile>
        </S.Container>
    )
}

export default Header