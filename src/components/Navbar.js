import React, { useContext } from "react";
import { AppBar, Grid, Button } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Navbar() {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <AppBar position="static">
            <Toolbar variant={"dense"}>
                <Grid container justifyContent={"flex-end"}>
                    {user ? (
                        <Button onClick={() => auth.signOut()} variant={"outlined"}>
                            Выйти
                        </Button>
                    ) : (
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={"outlined"}>Логин</Button>
                        </NavLink>
                    )}
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
