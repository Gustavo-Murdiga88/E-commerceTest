import { styled } from '../../styles/index';

export const Container = styled('div',{
    maxWidth: 1140,
    padding: '2rem',
    margin: '2rem auto',

});

export const Product = styled('main', {
    display:'flex',
    alignItems:"center",
    justifyContent:'space-between',
    backgroundColor:'$gray100',
    padding: '1rem',
    borderRadius: 8,
    margin: '2rem',

    "@sm": {
        flexDirection:'column',
        margin: '.5rem',
        gap:'1rem',
    },

    ':where(button):hover': {
        backgroundColor: '$green-300',
    },

    'p': {
        color: '$gray900',
        fontSize:'$xl',
        fontWeight: 'bold',
        marginRight: '2rem',
    },
    'div button': {
        border: 0,
        backgroundColor: '$green-500',
        borderRadius: 8,
        fontSize:"$md",
        padding: '1rem',
        width:"100%",
        color:'$gray100',
    },


});

export const ButtonCotainer = styled('main', {

    display:'flex',
    alignItems:'center',
    gap:"1rem",
    marginTop: '1rem',


    button:{
        padding:'.5rem',
        backgroundColor: '$green-500',
        color:"$gray100",
        fontWeight: 'bold',
        fontSize: '$md',
        border: 0,
        borderRadius: 8,
    },

    span: {
        color: '$gray900',
        fontSize:"$xl",
        fontWeight: 'bold',
    }
});

export const Title = styled('header',{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '$2xl',
    color:'$gray100',
    fontWeight: 'bold',
    padding: '1rem',
    marginBottom: '2rem',

    button: {
        border: 0,
        padding: '1rem',
        backgroundColor: '$green-500',
        borderRadius: 8,
        fontWeight: 'bold',
        fontSize:'$md',
        color:'$gray100',
    },

    'button:disabled': {
        opacity:'0.6',
        cursor:'not-allowed',
    },

    section: {
        display: 'flex',
        flexDirection:'column',
        gap:"1rem",
    },
    'section a button': {
        backgroundColor: 'transparent',
        fontSize:'14px',
    },
    'section a button:hover':{
        textDecoration:'underline',
        color:'$green-300',
    }

});

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