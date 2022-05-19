import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link} from 'react-router-dom';
import useAuth from './../../OnlyUseThis/Firebase/useAuth';




const Navbar = () => {
    const {users,logOut} = useAuth();
    const logOutEmail = () =>{
      const sure = window.confirm("Are You Sure? You Want To log Out.");
      if(sure){
        logOut();
      }
    }
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
     
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };


    return (
        <AppBar position="static" sx={{bgcolor:"transparent"}}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                Doctors Portal
              </Typography>






              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent: 'flex-end' }}>
                
              
                
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#0F0C0B', display: 'block' }}>
                      <Link style={{textDecoration:"none",color:"#fff"}} to="/reagister">
                         <Typography textAlign="center">Reagister</Typography>
                      </Link>
                  </Button>

                
                  
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#fff', display: 'block' }}>
                      {
                        users?.email?
                        <Typography onClick={()=>logOutEmail()} textAlign="center">Log Out</Typography>
                        :
                     <Link style={{textDecoration:"none",color:"#fff"}} to="/login">
                        <Typography textAlign="center">Login</Typography>
                     </Link>
                      }
                  </Button>
                      
                 
              </Box>
    
              <Box sx={{ flexGrow: 0 }}>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  
                </Menu>
              </Box>
            </Toolbar>
          </Container>
      </AppBar>
    );
};
export default Navbar;