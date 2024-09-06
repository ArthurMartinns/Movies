import * as S from './button.styles'

function Button({title, ...rest}) {
    return (
        <S.Button
            {...rest}
        >
            {title}
        </S.Button>
    )
}

export default Button