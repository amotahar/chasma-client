import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouteMatch,Switch,Route,Link } from 'react-router-dom';
import "./Dashboard.css"
import AdminPost from './../AdminPost/AdminPost';
import ManageOrder from '../ManageOrder/ManageOrder';
import useAuth from './../../hooks/useAuth';
import CreateAdmin from '../CreateAdmin/CreateAdmin';
import AdminRoute from './../AdminRoute/AdminRoute';
import Payment from './../Payment/Payment';
import Revew from '../Revew/Revew';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} - 15px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} -26px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

 function Deshboard() {


// User info
const {logOut}=useAuth()

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {admin}=useAuth()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 let {path,url}=useRouteMatch();
  return (
    <Box  sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          Dashboard 
          </Typography>
          <Typography variant="h6" noWrap component="div">
        <span onClick={logOut}><i className="fas fa-sign-out-alt m-3"></i>Logout</span>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
    
        <Divider />
     <Link to={'/home'}> <button className="dashboard_icon"><i className=" mt-4 fas fa-home home"></i>Home</button> </Link>
        <Link to={`${url}/pay`}>  <button className="dashboard_icon"><i className="fab fa-amazon-pay pay"></i>Payment</button> </Link>
     <Link to={`${url}/revew`}> <button className="dashboard_icon"><i className="far fa-grin-stars revew"></i>Revew</button> </Link>
    {
      admin &&
         <Link to={`${url}/adminPost`}>  <button className="dashboard_icon"><i className=" mt-4 fas fa-user-shield admin"></i>Admin Post</button> </Link>
      
    }
     {
       admin &&  <Link to={`${url}/createAdmin`}><button className="dashboard_icon"><i className=" mt-4 fas fa-users-cog admin"></i>Make Admin</button> </Link>
      
     }
     
        <Link to={`${url}/manageOrder`}> <button className="dashboard_icon"><i className=" mt-4 fas fa-shopping-cart explore"></i>Manage Order</button> </Link>

     
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

       <Switch>
           <Route exact path={`${path}`}></Route>
           <Route exact path={`${path}/pay`}><Payment></Payment></Route>
           <Route exact path={`${path}/revew`}><Revew></Revew></Route>
           <AdminRoute exact path={`${path}/adminPost`}>
               <AdminPost></AdminPost>
               </AdminRoute>
           <AdminRoute exact path={`${path}/createAdmin`}>
               <CreateAdmin></CreateAdmin>
               </AdminRoute>
           <Route exact path={`${path}/manageOrder`}>               
          <ManageOrder></ManageOrder>
            </Route>
       </Switch>

      </Box>
    </Box>
  );
}
export default Deshboard