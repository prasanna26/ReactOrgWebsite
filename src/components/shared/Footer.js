import React from "react";
import {
    Grid,
    Box,
    List,
    ListItem,
    Typography,
    ListSubheader,
    IconButton,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundSize: "100% 100%",
        width:"100%",
        paddingLeft: theme.spacing(10),
        paddingTop: theme.spacing(2),
        backgroundImage: (props) => "url(" + props.imageSrc.desktop + ")",
        [theme.breakpoints.down("sm")]: {
            backgroundImage: (props) => "url(" + props.imageSrc.tablet + ")",
        },
        [theme.breakpoints.down("xs")]: {
            backgroundImage: (props) => "url(" + props.imageSrc.mobile + ")",
            paddingLeft: theme.spacing(0),
        },
    },
    actionsContainer: {
        width: "30%",
        [theme.breakpoints.down("md")]: {
            width: "35%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "50%",
        },
        [theme.breakpoints.down("xs")]: {
            width: "85%",
        },
    },
}));

export default function Footer(props) {
    const classes = useStyles(props);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const goTo = (link) => {
        window.open(link);
    };

    const getIcon = (iconType) => {
        switch (iconType) {
            case "facebook":
                return <FacebookIcon color="primary" />;
            case "linkedin":
                return <LinkedInIcon color="primary" />;
            case "instagram":
                return <InstagramIcon color="primary" />;
            case "youtube":
                return <YouTubeIcon color="primary" />;
            default:
                return <img src={iconType} alt={iconType} />;
        }
    };

    return (
        <Box height="100%" width="100%" className={classes.root}>
            <Grid container className={classes.actionsContainer}>
                {props.actions.map((action, index) => {
                    return (
                        <Grid item xs={6} key={index}>
                            <List
                                key={index}
                                subheader={
                                    <ListSubheader component="div">
                                        <Typography variant={isSmallScreen ? "h6" : "h5"}>
                                            {action.label}
                                        </Typography>
                                    </ListSubheader>
                                }
                            >
                                {action.subActionsType === "normal" ? (
                                    action.subActions.map((subAction, index) => {
                                        return (
                                            <ListItem
                                                button
                                                onClick={() => goTo(subAction.link)}
                                                key={index}
                                            >
                                                {subAction.label}
                                            </ListItem>
                                        );
                                    })
                                ) : action.subActionsType === "iconList" ? (
                                    <ListItem button key={index}>
                                        {action.subActions.map((subAction, index) => {
                                            return (
                                                <IconButton
                                                    key={index}
                                                    onClick={() => goTo(subAction.link)}
                                                    style={
                                                        index === 0
                                                            ? { marginLeft: theme.spacing(-2) }
                                                            : {}
                                                    }
                                                >
                                                    {getIcon(subAction.iconType)}
                                                </IconButton>
                                            );
                                        })}
                                    </ListItem>
                                ) : null}
                            </List>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}
