import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HealingIcon from '@material-ui/icons/Healing';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InfoIcon from '@material-ui/icons/Info';
import About from './components/About';
import FacilitiesList from './components/FacilitiesList';
import FacilityDashboard from './components/FacilityDashboard';
import NewPatientForm from './components/NewPatientForm'
import Home from './components/Home';
import PatientContactList from './components/PatientContactList';
import ProviderList from './components/ProviderList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateEncounterForm from './components/CreateEncounterForm';
import ScheduleIcon from '@material-ui/icons/Schedule';
import NewPatientStepperModal from './components/NewPatientStepperModal';
import CreateEncounterModal from './components/CreateEncounterModal';

const drawerWidth = 240;
const toolbarHeight = 50;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        marginTop: (toolbarHeight * 1.1),
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    image: {
        flexGrow: 1,
    }


}));



function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
 
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const resolveIcon = (icontext) => {

        switch (icontext) {
            case 'InfoIcon':
                return (<InfoIcon />);
                break;
            case 'PeopleIcon':
                return (<PeopleIcon />);
                break;
            case 'PersonAddIcon':
                return (<PersonAddIcon />);
                break;
            case 'LocalHospitalIcon':
                return (<LocalHospitalIcon />);
                break;
            case 'HealingIcon':
                return (<HealingIcon />);
                break;
            case 'ScheduleIcon':
                return (<ScheduleIcon />);
                break;
            case 'HomeIcon':
                return (<HomeIcon />);
                break;
        }
    };

    const routes = [

        {
            link: '/',
            text: 'Home',
            icon: 'HomeIcon'
        },
        {
            link: '/facilities',
            text: 'Facilities',
            icon: 'LocalHospitalIcon'
        },
        {
            link: '/providerlist',
            text: 'Provider List',
            icon: 'HealingIcon'
        },
     /*   {
            link: '/newpatient',
            text: 'Add Patient',
            icon: 'PersonAddIcon'
        },
        {
            link: '/createencounter',
            text: 'Create Encounter',
            icon: 'ScheduleIcon'
        },*/
        {
            link: '/patientcontactlist',
            text: 'Patient List',
            icon: 'PeopleIcon'
        },
        {
            link: '/about',
            text: 'About',
            icon: 'InfoIcon'
        },
    ];

    const drawer = (
        <div>
            <div className={classes.toolbar} />
             <Divider />


            <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
                <MenuIcon />
            </IconButton>


            <List>
                {routes.map((route) => (<Link to={route.link} style={{ textDecoration: 'none' }}>
                    <ListItem button key={route.link} >

                        <ListItemIcon> {resolveIcon(route.icon)}</ListItemIcon>
                        <ListItemText primary={route.text} />

                    </ListItem> </Link>
                ))}

            </List>
            <Divider />
            <NewPatientStepperModal/>
            <CreateEncounterModal />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <Router>   <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Patient Intake Triage System
          </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/facilities" component={FacilitiesList} />
                        <Route path="/dashboard/:id" component={FacilityDashboard} />
                        <Route path="/newpatient/" component={NewPatientForm} />
                        <Route path="/createencounter/" component={CreateEncounterForm} />
                        <Route path="/patientcontactlist/" component={PatientContactList} />
                        <Route path="/providerlist/" component={ProviderList} />
                     
                    </Switch>
                </main></Router>
        </div>
    );
}

export default ResponsiveDrawer;