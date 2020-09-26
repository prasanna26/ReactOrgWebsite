import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Redirect } from "react-router";
import Education from "./components/Education";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Container from "@material-ui/core/Container";

export default function Router(props) {
    const renderIndex = () => {
        return <Redirect to="/home" />;
    };
    return (
        <Container style={{ marginTop: "144px" }} maxWidth={false}>
            <BrowserRouter>
                <Switch>
                    <Route path="/signup" component={Signup} />
                    <Route path="/home" component={Home} />
                    <Route path="/education" component={Education} />
                    <Route exact path="/" render={renderIndex} />
                    <Route render={renderIndex} />
                </Switch>
            </BrowserRouter>
        </Container>
    );
}
