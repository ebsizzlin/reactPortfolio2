import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
// Stylesheet
import "./index.scss";
// Scenes
import Home5 from "./scenes/Home5";
// Components
import Error404 from "./components/common/Error404";
import RedirectAs404 from "./components/common/RedirectAs404";

const Root = () => {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home5} />
                <Route component={RedirectAs404} />
            </Switch>
        </div>
    );
};

ReactDOM.render(
    <HashRouter>
        <div>
            <Route render={({ location }) => (location.state && location.state.is404 ? <Error404 /> : <Root />)} />
        </div>
    </HashRouter>,
    document.getElementById("root")
);
serviceWorker.unregister();
