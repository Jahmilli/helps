import * as React from 'react';
import { getTestData } from '../../logic/functions/testFetch';
import LoginForm from '../containers/LoginForm';
import './styles.css';
import Auth from '../../logic/functions/core/Auth';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { loginFormStyles } from '../containers/styles';

interface LoginPageProps {
    auth: Auth;
}

const LoginPage: React.FunctionComponent<LoginPageProps> = ({auth}) => {
    React.useEffect(() => {
        const callGetTest = async () => {
            let data = await getTestData();
            console.log(data);
        };

        callGetTest();
    }, []);

    const initialUserDetailsState = {
        email: '',
        password: ''
    };
    
    const handleSubmit = async (values: any) => {    
        console.log('values are ', values);
        try {
            await auth.login(values.email, values.password);
        } catch (err) {
            alert('Login failed, please try again');
        }
    }

    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Student Email Required'),
        password: Yup.string()
            .required('Password Required')
    });

    const classes = loginFormStyles();

    return (
        <div className="loginPage">
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <div className={classes.gridLockup}>
                    <Formik
                    initialValues={initialUserDetailsState}
                    validationSchema={SignupSchema}
                    onSubmit={(values: any) => handleSubmit(values)}
                    >
                        {(props) => { 
                            return <LoginForm auth={auth} classes={classes} formikProps={props} />
                        }}
                   </Formik>
                </div>
            </div>
        </div>
    );
};
    

export default LoginPage;
