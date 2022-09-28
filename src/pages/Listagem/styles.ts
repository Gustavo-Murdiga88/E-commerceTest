import { styled } from '../../styles/index'

export const Container = styled('div', {
    maxWidth: 1140, 
    margin: '3rem auto',
    display:'flex',
    flexDirection: 'column',
})

export const ContainerCards = styled('main',{
    w: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',

    "@sm": {
        gridTemplateColumns: '1fr',
        margin:'1.5rem',
    }
})

export const Card = styled('div', {
    padding: '1rem',
    borderRadius: 8,
    backgroundColor: '$gray100',

    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-between',

    header:{
        fontSize:'$lg',
        color: '$gray900',
        textAlign:'center',
        padding: '.5rem',
        fontWeight: 'bold',
    },

    footer: {
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:'1rem',

        '@sm': {
            flexDirection:'column',
            justifyContent:'center',
        }
    },

    'footer > aside > span' : {
        padding: '2rem 1rem',
        color: '$gray900',
        fontWeight:'bold',
        letterSpacing: '0px',
        fontSize:'$md',
    },

    'footer aside ':{
        display: 'flex', 
        flexWrap:'wrap',
    }

}) 

export const ContainerButton = styled('div',{
    display: 'flex',
    flexWrap:'nowrap',
    alignItems: 'center',

    button:{
        border: 0,
        padding: '.5rem',
        borderRadius: 8,
        color: '$gray100',
        backgroundColor: '$green-500',

        width: '30px',
        margin: '.5rem',

        fontSize: '$lg',
        fontWeight: 'bold',
    },

    'button:hover':{
        backgroundColor: '$green-300',
    },
    'button:disabled':{
        opacity: '0.6',
        cursor: 'not-allowed',
        },

    span:{
        color: '$gray900',
        fontWeight: 'bold',
        fontSize:'$lg',
        height: '100%',
        minWidth:'50px',
        textAlign:'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
    }   

})

export const Pagination = styled('div', {
    display: 'flex',
    flexDirection:'row',
    gap:'.5rem',
    padding:'2rem',
    justifyContent:'center',
    marginTop: '1rem',

    button:{
        color:'$gray100',
        border: 0,
        fontSize:'$lg',
        fontWeight: 'bold',

        backgroundColor: '$green-500',

        padding: '.5rem',
        borderRadius: 8,
    },

    'button:disabled':{
        opacity: '0.6',
        cursor: 'not-allowed',
    }
})

export const Title = styled('header',{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem',
    margin: '1rem 0',

    'div p':{
        fontSize: '$xl',
        fontWeight: 'bold',
    },
    'div:nth-child(1) a > button': {
        width:'150px',
        padding:'0',
        marginTop: '1rem',
        backgroundColor: 'transparent',
        fontSize:'14px',
    },
    'div:nth-child(1) a > button:hover':{
        textDecoration:'underline',
        color:'$green-300',
        backgroundColor: 'transparent',
    }, 

    'div button':{
        border: 0,
        padding: '1rem',
        backgroundColor: '$green-500',
        borderRadius: 8,
        color: '$gray100',
        fontSize: '$md',
        position:'relative',
    },
    'div button:hover:not(:disabled)': {
        backgroundColor: '$green-300'
    }, 

    'div button:disabled': {
        opacity: '0.7',
        cursor: 'not-allowed',
    }
})

export const Tag = styled('span',{
    position:'absolute',
    width: 30,
    height:30,
    top: '-8px',
    right:'-8px',
    background: '$green-700',
    color:"$gray100",
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    fontSize: '12px'
})


export const Total = styled('strong', {
    position: 'fixed',
    top:'20px',
    right:"30px",

    padding:'1rem',
    backgroundColor:'$green-500',
    borderRadius: 8,
    fontSize: '$lg',
    fontWeight: 'bold',
})