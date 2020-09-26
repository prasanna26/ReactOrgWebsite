import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
    routerLink: {
        textDecoration: "none",
    },
    root: {
        flexGrow: 1,
        width: "100%",
        textDecoration: "none",
    },
    menuBarLeft: {
        marginLeft: theme.spacing(10),
        flexGrow: 1,
    },
    menuList: {
        width: theme.spacing(30),
    },
    appBar: {
        backgroundColor: theme.palette.primary.main,
        minHegiht: theme.spacing(20),
    },
    toolBar: {
        minHegiht: theme.spacing(20),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    barRight: {
        marginRight: theme.spacing(20),
        [theme.breakpoints.down("sm")]: {
            marginRight: theme.spacing(3),
        },
    },
    menuItemBottomBorder: {
        borderBottom: "2px solid " + theme.palette.primary.main,
    },
    defaultButtonLabel: {
        textTransform: "none",
        marginLeft: theme.spacing(5),
    },
    invertedButtonLabel: {
        color: theme.palette.primary.main,
        textTransform: "none",
        marginLeft: theme.spacing(5),
    },
    outlinedButtonLabel: {
        border: "1px solid " + theme.palette.secondary.main,
        textTransform: "none",
        marginLeft: theme.spacing(5),
    },
    defaultMenuListColor: {
        color: theme.palette.common.black,
    },
    invertedMenuListColor: {
        color: theme.palette.primary.main,
    },
}));

export default function MenuBar(props) {
    let [drawerOpen, setDrawerOpen] = React.useState(false);
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const renderDesktopMenuAction = (action, index) => {
        return (
            <React.Fragment key={index}>
                <Link to={action.link} className={classes.routerLink}>
                    <Button
                        color="secondary"
                        className={classes[action.class ? action.class : "defaultButtonLabel"]}
                    >
                        <Typography variant="h6">{action.label}</Typography>
                    </Button>
                </Link>
            </React.Fragment>
        );
    };

    const renderMenuList = () => {
        return (
            <List
                subheader={
                    <Link to="/" className={classes.routerLink}>
                        <ListSubheader color="primary">Take A Step</ListSubheader>
                    </Link>
                }
                className={classes.menuList}
            >
                {props.actions.length > 0
                    ? props.actions.map((action, index) => {
                          return (
                              <React.Fragment key={index}>
                                  <Link to={action.link} className={classes.routerLink}>
                                      <ListItem
                                          button
                                          onClick={() => setDrawerOpen(false)}
                                          className={
                                              classes[
                                                  action.menuListColor
                                                      ? action.menuListColor
                                                      : "defaultMenuListColor"
                                              ]
                                          }
                                      >
                                          <ListItemText primary={action.label} />
                                      </ListItem>
                                  </Link>
                                  <Divider />
                              </React.Fragment>
                          );
                      })
                    : null}
            </List>
        );
    };

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar className={classes.toolBar}>
                    <div className={classes.menuBarLeft}>
                        <Link to="/" className={classes.routerLink}>
                            <img
                                src={props.icon.Src}
                                title={props.icon.title}
                                alt={props.icon.alt}
                                width={isSmallScreen ? 60 : 100}
                                hright={isSmallScreen ? 60 : 100}
                            />
                        </Link>
                    </div>
                    {isMobile ? (
                        <React.Fragment>
                            <IconButton onClick={() => setDrawerOpen(true)}>
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor="right"
                                open={drawerOpen}
                                onClose={() => setDrawerOpen(false)}
                            >
                                {renderMenuList()}
                            </Drawer>
                        </React.Fragment>
                    ) : (
                        <Box className={classes.barRight}>
                            {props.actions.map((action, index) => {
                                return renderDesktopMenuAction(action, index);
                            })}
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

MenuBar.prototype = {
    icon: PropTypes.object.isRequired,
    actions: PropTypes.array.isRequired,
};
