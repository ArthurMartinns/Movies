import * as S from './card_movies.styles'

function CardMovies({title}) {
    return (
        <S.Container>
            <S.Content>
                <S.title>
                    {title}
                </S.title>

            </S.Content>
        </S.Container>
    )
}


export default CardMovies