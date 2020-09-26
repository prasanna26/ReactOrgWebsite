import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import MenuBar from "./components/shared/MenuBar";
import Footer from "./components/shared/Footer";
import theme from "./theme";

import { FooterProps, MenuBarProps } from "./constants/shared";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Redirect } from "react-router";
import Education from "./components/Education";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Donate from "./components/Donate";
import Container from "@material-ui/core/Container";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {
    const baseTheme = useTheme(theme);
    const isSmallScreen = useMediaQuery(baseTheme.breakpoints.down("sm"));

    const renderIndex = () => {
        return <Redirect to="/home" />;
    };
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <MenuBar icon={MenuBarProps.icon} actions={MenuBarProps.actions} />
                <Container
                    style={{
                        marginTop: isSmallScreen ? "100px" : "145px",
                    }}
                    disableGutters
                    maxWidth={false}
                >
                    <Switch>
                        <Route path="/signup" component={Signup} />
                        <Route path="/home" component={Home} />
                        <Route path="/what-we-do" component={Education} />
                        <Route path="/donate" component={Donate} />
                        <Route exact path="/" render={renderIndex} />
                        <Route render={renderIndex} />
                    </Switch>
                </Container>
                <Footer imageSrc={FooterProps.imageSrc} actions={FooterProps.actions} />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
