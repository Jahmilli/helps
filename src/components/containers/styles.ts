import { makeStyles } from '@material-ui/core/styles';

export const loginFormStyles = makeStyles(theme => ({
    gridLockup: {
        // background: 'white',
        // borderWidth: 1,
        margin: '5% 0 0 0',
        width: '250px'
    },
    loginLockup: {        
    },
    title: {
        margin: '10px 0'
    },
    fieldError: {
        color: 'red',
        fontSize: 14,
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%'
    },
    textInputError: {
        borderColor: 'red',
        borderWidth: 1,
        padding: .5,
        fontSize: 16,
        display: 'flex',
        justifyContent: 'flex-start',
        borderRadius: 4,
        width: '100%'
    },
    submitBtn: {
        maxWidth: 150,
        margin: '20px 0px',
        padding: '12px 20px',
        borderRadius: 5,
        background: '#08c',
        shadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
        fontSize: 17,
        fontWeight: 500,
        color: '#fff',
        cursor: 'pointer',
        outline: 'none',
        display: 'flex'
    },
    logo: {
        maxWidth: '60%',
        maxHeigt: '60%',
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'flex-start'
    },
    textfield: {
        width: '100%',
        marginBottom: '10px'
    }
}));


export const registrationFormStyles = makeStyles({
        registrationLockup: {
            display: 'flex',
            justifyContent: 'space-around',
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
