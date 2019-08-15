import { makeStyles } from '@material-ui/core/styles';

export const loginFormStyles = makeStyles({
    gridLockup: {
        background: 'rgba(0,0,0,0.4)',
        textAlign: 'center',
        margin: '7% 0 0 0'
    },
    loginLockup: {        
        textAlign: 'center',
        margin: '0 20%'
    },
    title: {
        margin: '10px 0'
    },
    useWhite: {
        color: 'white'
    }
});


export const registrationFormStyles = makeStyles({
        registrationLockup: {
            display: 'flex',
            justifyContent: 'space-between',
            flexFlow: 'row nowrap',
            margin: '0 10%'
        },
        textField: {
            width: '100%'
        },
        input: {
            color: 'black'
        },
        floatingLabelFocusStyle: {
            color: 'black'
        },
        textFieldHeader: {
            margin: '10px 0 0 0',
            color: 'black' 
        },
        leftLockup: {
    
        },
        rightLockup: {
    
        },
        educationForm: {
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '10px'
        },
        educationFormLeft: {
            display: 'flex',
        },
        educationFormRight: {
            display: 'flex',
            alignItems: 'center'
        },
        educationText: {
            color: 'black',
            marginRight: '10px'
        }
});
