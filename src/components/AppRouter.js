import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router";
import { privateRoutes, publicRoutes } from "../routes";
import { useAuthState } from "react-firebase-hooks/auth";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { Context } from "../index";

export default function AppRouter() {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);
    return user ? (
        <Switch>
            {privateRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} component={Component} exact={true} />
            ))}
            <Redirect to={CHAT_ROUTE} />
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} component={Component} exact={true} />
            ))}
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    );
}
