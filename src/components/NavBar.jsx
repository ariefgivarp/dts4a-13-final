import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { keluarDariApps } from '../authentication/firebase';
import ArticleIcon from '@mui/icons-material/Article';

function ResponsiveAppBar() {

    const navigate = useNavigate();

    const buttonLogoutOnClickHandler = async () => {
        await keluarDariApps();
        navigate("/login");
    };
    const buttonLoginOnClickHandler = async () => {
        await keluarDariApps();
        navigate("/login");
    };
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (

        <AppBar position="relative" sx={{ bgcolor: "black", mt: 0 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <ArticleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        DTS4A-NEWS
                    </Typography>
                    <ArticleIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        DTS4A-NEWS
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        {/* <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}><Typography>Home</Typography></Link>
                        </Button> */}

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px'}}
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
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Link to="/profil" style={{ color: 'inherit', textDecoration: 'inherit' }}>Profil</Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Link onClick={buttonLoginOnClickHandler} style={{ color: 'inherit', textDecoration: 'inherit' }}>Login</Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Link onClick={buttonLogoutOnClickHandler} style={{ color: 'inherit', textDecoration: 'inherit' }}>Logout</Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;


