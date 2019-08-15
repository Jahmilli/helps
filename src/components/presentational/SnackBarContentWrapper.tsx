import * as React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import clsx from 'clsx';
import { MySnackbarContentWrapperStyles } from './styles';
import { SnackbarContent } from '@material-ui/core';

interface VariantIcons {
    [message: string] : any;
}

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
} as VariantIcons;

interface MySnackbarContentWrapperProps {
    variant: string;
    className: any;
    message: string;
    children: any;
}

const MySnackbarContentWrapper:React.FunctionComponent<MySnackbarContentWrapperProps> = ({ variant, className, message, children }) => {
    const classes = MySnackbarContentWrapperStyles();
    const Icon = variantIcon[variant];

    // TODO: parameterise the className ie classes.error should be classes[variant]
    return (
        <SnackbarContent
        className={clsx(classes.error, className)}
        aria-describedby="client-snackbar"
        message={
            <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {message}
            </span>
        }
        action={[
            { ...children }
        ]}
        />
    );
}

export default MySnackbarContentWrapper;