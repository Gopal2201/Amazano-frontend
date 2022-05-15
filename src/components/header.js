import React, { useContext, useState } from 'react';

import { AppBar, Badge, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import cardCtx from "./context";

function Header(props) {
    const navigate = useNavigate();
    const [cart, updateCart, currencyFormatter] = useContext(cardCtx);
    const cartQty = cart.reduce((sum, item) => item.quantity + sum, 0);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{"background":"#052428", "height":"60px"}} position="static">
                    <Toolbar>
                    <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={()  => navigate("/carts")}
                        >
                            <img style={{"height":"40px"}} src="https://th.bing.com/th/id/OIP.VFyTjBGj-KQ-_QRhEio_RAHaHa?pid=ImgDet&rs=1" alt="Logo"/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {props.heading}
                        </Typography>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={()  => navigate("/carts")}
                        >
                            <Badge badgeContent={cartQty} color="primary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header;