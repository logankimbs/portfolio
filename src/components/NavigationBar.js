import * as React from 'react';

import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { Link } from 'react-scroll';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

export default function NavigationBar(props) {
    const { sections } = props;

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <Slide appear={false} direction="down" in={!useScrollTrigger()}>
                <AppBar color="primary" sx={{ py: 1.5 }}>
                    <Container maxWidth="lg">
                        <Toolbar disableGutters>
                            <Box sx={{ flexGrow: 1, mr: 2 }}>
                                <Typography component="h6" variant="h6">
                                    LOGAN KIMBALL
                                </Typography>
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
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
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
                                            to={section}
                                            spy={true}
                                            smooth={true}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <MenuItem>
                                                <Typography textAlign="right">
                                                    {section}
                                                </Typography>
                                            </MenuItem>
                                        </Link>
                                    ))}
                                </Menu>
                            </Box>

                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {sections.map((section) => (
                                    <Link
                                        key={section}
                                        to={section}
                                        spy={true}
                                        smooth={true}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Button
                                            size="small"
                                            sx={{
                                                color: 'inherit',
                                                display: 'block',
                                            }}
                                        >
                                            {section}
                                        </Button>
                                    </Link>
                                ))}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Slide>
        </>
    );
}
