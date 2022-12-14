import {globalCss} from './index'

export const globalStyled = globalCss({
    '*': {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
    },
    body:{
        '-webkit-font-smoothing': 'antialiased',
        backgroundColor: '$gray900',
        color: '$gray100',
    },
    'body, input, textarea, button': {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400
      },
    'button':{
        cursor:'pointer',
    }
})