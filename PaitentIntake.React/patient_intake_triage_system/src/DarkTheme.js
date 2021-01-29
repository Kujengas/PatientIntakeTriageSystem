import { createMuiTheme } from '@material-ui/core/styles/';
import '@fontsource/do-hyeon';

//#9C27B0
//#4A1489
//#ffab00

export const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#ffab00',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#1d172b',
            paper: '#4A1489',
        },
    },
    typography: {
        fontFamily: 'Do Hyeon',
    },
    props: {
        MuiButton: {
            size: 'small',
        },
        MuiButtonGroup: {
            size: 'small',
        },
        MuiCheckbox: {
            size: 'small',
        },
        MuiFab: {
            size: 'small',
        },
        MuiFormControl: {
            margin: 'dense',
            size: 'small',
        },
        MuiFormHelperText: {
            margin: 'dense',
        },
        MuiIconButton: {
            size: 'small',
        },
        MuiInputBase: {
            margin: 'dense',
        },
        MuiInputLabel: {
            margin: 'dense',
        },
        MuiRadio: {
            size: 'small',
        },
        MuiSwitch: {
            size: 'small',
        },
        MuiTextField: {
            margin: 'dense',
            size: 'small',
        },
    },
    shape: {
        borderRadius: 4,
    },
    spacing: 8,
});