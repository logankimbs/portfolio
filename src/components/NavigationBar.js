import * as React from 'react';

import { ReactComponent as Logo } from '../utilities/images/logo.svg';
import { Link } from 'react-scroll';

import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

export default function NavigationBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const sections = ['About', 'Projects', 'Contact'];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Slide appear={false} direction="down" in={!useScrollTrigger()}>
            <AppBar
                color="inherit"
                sx={{ py: 1.5, color: 'primary.dark' }}
                enableColorOnDark
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ alignItems: 'center' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexGrow: 1,
                                mr: 2,
                            }}
                        >
                            <Logo />
                        </Box>

                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                color="inherit"
                                aria-label="menu for main page"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                keepMounted
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                {sections.map((section) => (
                                    <Link
                                        key={section}
                                        to={section.toLowerCase()}
                                        spy={true}
                                        smooth={true}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <MenuItem
                                            sx={{
                                                mb: 0,
                                                textAlign: 'right',
                                                color: 'primary.dark',
                                            }}
                                        >
                                            {section}
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {sections.map((section) => (
                                <Link
                                    key={section}
                                    to={section.toLowerCase()}
                                    spy={true}
                                    smooth={true}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Button
                                        sx={{
                                            color: 'inherit',
                                            display: 'block',
                                            textTransform: 'capitalize',
                                            mx: 2,
                                        }}
                                    >
                                        {section}
                                    </Button>
                                </Link>
                            ))}
                            <Button
                                variant="outlined"
                                color="secondary"
                                sx={{
                                    ml: 2,
                                    display: 'block',
                                    textTransform: 'capitalize',
                                }}
                            >
                                Resume
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    );
}
