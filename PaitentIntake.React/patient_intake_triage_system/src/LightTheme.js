import { createMuiTheme } from '@material-ui/core/styles/';
import '@fontsource/do-hyeon';


export const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#ffab00',
        },
        secondary: {
            main: '#9c27b0',
        },
        background: {
            default: '#fff',
            paper: '#ffc17e',
        },
    },
    typography: {
        fontFamily: 'Arial'/*'Do Hyeon'*/,
        fontWeightLight: 200,
        fontWeightRegular: 300,
    },
    props: {
        MuiAppBar: {
            color: 'secondary',
        },
        MuiList: {
            dense: true,
        },
        MuiMenuItem: {
            dense: true,
        },
        MuiTable: {
            size: 'small',
        },
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
});