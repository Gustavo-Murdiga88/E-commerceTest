import {styled} from '../../../styles/index';

export const Form = styled('form',{
    display: 'flex',
    flexDirection: 'column',
    width: 1140,
    margin: '2rem auto',
    gap: '1rem',
    padding: '2rem',

    '@sm':{
        width: '100%',
    },
    "@md": {
        width: '100%',
    }
});
export const Title = styled('div', {
    fontSize: '2rem',
    fontWeight: 'bold',
    letterSpacing: '0px',
    marginBottom: '1rem',
    padding: '1rem',

    display: 'flex',
    flexDirection:'column',
    gap:"1rem",

    justifyContent:'center',
    
    a:{
        fontSize: 12,
        color:'$gray100',
        fontWeight: 'bold',
        textDecoration:'none',
    },

    'a:hover': {
        textDecoration: 'underline',
        color:'$green-500',
    }

});
export const Container= styled('div',{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '3rem',
});

export const FormContainer = styled('div', {
    display: 'flex',
    flex:'1',
    flexDirection: 'column',
    flexBasis: "45%",
})

export const Label = styled('label', {
    fontSize: '1rem',
    color:'$gray100',
    fontWeight: 'bold',
    padding:'0.5rem 0'
});
export const Input = styled('input', {
    fontSize: '1rem',
    border: '1px solid $gray300',
    background: 'transparent',
    borderRadius: 8,
    padding: '0.5rem 1rem',
    color: '$gray100',
});

export const Button = styled('button', {
    border: 0,
    padding: '1rem',
    borderRadius: 8,
    backgroundColor: '$gray300',
    marginTop:'2rem',
})