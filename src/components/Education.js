import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Grid, Button, IconButton } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import educationProps from "../constants/EducationConstants";

const useStyles = makeStyles((theme) => ({
    titleBar: {
        backgroundColor: theme.palette.common.lightYellow,
        width: "100%",
        height: theme.spacing(22),
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            height: theme.spacing(15),
        },

    },
    title: {
        fontWeight: 800,
    },
    titleDescriptionContainer: {
        maxHeight: theme.spacing(50),
    },
    titleDescriptionText: {
        padding: theme.spacing(14),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(4),
        },
    },
    titleDescriptionImageInnerContainer: {
        backgroundImage: (props) => "url(" + props.description.descriptionImage.src + ")",
        backgroundSize: "100% 100%",
        width: "100%",
        height: "100%",
    },
    titleDescriptionImage: {
        maxHeight: "inherit",
        opacity: 0.55,
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            height: theme.spacing(40),
        },
    },
    layer: {
        background: "rgba(111, 32, 32, 0.4);",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    },
    mobileSignupButton: {
        position: "relative",
        bottom: theme.spacing(10),
        left: "calc(50% - 36px)",
        textDecoration: "none",
        marginBottom: theme.spacing(10),
    },
    mobileBottomSignupButton: {
        marginTop: theme.spacing(5),
        marginLeft: "auto",
        marginRight: "auto",
        textDecoration: "none",
        marginBottom: theme.spacing(2),
        border: "1px solid #333736",
        borderRadius: "2px",
    },
    skillItemLeft: {
        display: "inline-flex",
        justifyContent: "flex-end",
    },
    skillItemRight: {
        display: "inline-flex",
        justifyContent: "flex-start",
    },
    skillCard: {
        backgroundColor: theme.palette.common.lightGrey,
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        maxWidth: theme.spacing(36),
        minWidth: theme.spacing(36),
        borderRadius: "4px",
        [theme.breakpoints.down("xs")]: {
            minWidth: "unset",
        },
    },
    skillLabel: {
        fontWeight: "700",
        fontSize: "18px",
        [theme.breakpoints.down("xs")]: {
            height: theme.spacing(8),
            marginTop: theme.spacing(2),
            fontSize: "12px",
        },
    },
    postSkillsText: {
        marginTop: theme.spacing(5),
        fontSize: "18px",
    },
    teamContainer: {
        backgroundColor: theme.palette.common.darkWhite,
        maxWidth: "100%",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: theme.spacing(5),
        paddingRight: theme.spacing(35),
        paddingLeft: theme.spacing(35),
        [theme.breakpoints.down("md")]: {
            paddingRight: theme.spacing(20),
            paddingLeft: theme.spacing(20),
        },
        [theme.breakpoints.down("sm")]: {
            paddingRight: theme.spacing(5),
            paddingLeft: theme.spacing(5),
        },
        [theme.breakpoints.down("xs")]: {
            paddingRight: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        },
    },
    teamTitle: {
        width: "100%",
        textAlign: "center",
        marginTop: theme.spacing(4),
        fontWeight: 700,
        marginBottom: theme.spacing(4),
    },
    memberInnerBox: {
        backgroundColor: theme.palette.common.darkGrey,
        bottom: "0",
        width: "100%",
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1),
        marginTop: theme.spacing(-1),
        marginBottom: theme.spacing(5),
        height: theme.spacing(10),
    },
    memberName: {
        fontSize: "14px",
        color: theme.palette.common.turquoise,
        fontWeight: "700",
    },
    memberSkill: {
        fontSize: "12px",
        color: theme.palette.common.white,
    },
    memberDesignation: {
        fontSize: "12px",
        color: theme.palette.common.white,
    },
    journeyTitle: {
        fontSize: "24px",
        fontWeight: "700",
        [theme.breakpoints.down("xs")]: {
            marginRight: theme.spacing(0),
            marginLeft: theme.spacing(0),
            paddingTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        marginBottom: theme.spacing(5),
    },
    journeyQuote: {
        fontSize: "18px",
        fontStyle: "italic",
    },
    authorText: {
        fontWeight: "700",
        marginTop: theme.spacing(2),
    },
    displayHidden: {
        visibility: "hidden",
    },
    displayNone: {
        display: "none",
    },
    journeyContainer: {
        width: "85%",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
        paddingTop: theme.spacing(4),
        marginRight: "auto",
        marginLeft: "auto",
        paddingBottom: theme.spacing(2),
    },
    testimonialTextContainer: {
        textAlign: "center",
        float: "right",
        paddingLeft: theme.spacing(2),
        height: "350px",
        [theme.breakpoints.down("xs")]: {
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(2),
            color: theme.palette.common.white,
            backgroundColor: theme.palette.common.darkGrey,
            float: "unset",
            marginTop: theme.spacing(-1),
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            height: "300px",
        },
    },
}));
export default function Education() {
    const props = educationProps;
    const classes = useStyles(props);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    let [testimonialIndex, setTestimonialIndex] = React.useState(0);

    const renderMemberBox = (member) => {
        return (
            <Box textAlign="center" position="relative">
                <img src={member.photo} alt={member.name} width="100%" height="100%" />
                <Box className={classes.memberInnerBox}>
                    <Typography className={classes.memberName}>{member.name}</Typography>
                    <Typography className={classes.memberDesignation}>
                        {member.department}
                    </Typography>
                    <Typography className={classes.memberSkill}>{member.skill}</Typography>
                </Box>
            </Box>
        );
    };

    const renderMembersContainer = () => {
        return (
            <Box
                width="100%"
                height="100%"
                style={{ backgroundColor: theme.palette.common.lightGrey }}
            >
                <Grid container className={classes.teamContainer} justify="center" spacing={2}>
                    <Grid item xs={12} style={{ textAlign: "center" }}>
                        <Typography variant="h5" className={classes.teamTitle}>
                            {props.team.title}
                        </Typography>
                    </Grid>
                    {props.team.members.map((member, index) => {
                        return (
                            <Grid item xs={6} sm={3} key={index}>
                                {renderMemberBox(member)}
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        );
    };

    const renderJourneyContainer = () => {
        let minIndex = 0;
        let maxIndex = props.journeyDetails.testimonials.length;
        return (
            <Grid container className={classes.journeyContainer}>
                <Box textAlign="center" width="100%">
                    <Typography variant="h5" className={classes.journeyTitle}>
                        {props.journeyDetails.title}
                    </Typography>
                </Box>
                <Grid item xs={12} className={!isMobile ? classes.displayNone : null}>
                    <IconButton
                        onClick={() => {
                            setTestimonialIndex(testimonialIndex - 1);
                        }}
                        className={testimonialIndex === minIndex ? classes.displayHidden : null}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            setTestimonialIndex(testimonialIndex + 1);
                        }}
                        className={testimonialIndex === maxIndex - 1 ? classes.displayHidden : null}
                    >
                        <ArrowForwardIcon />
                    </IconButton>
                </Grid>
                <Grid item container alignItems="center" xs={12} spacing={isMobile ? 0 : 3}>
                    <Grid item xs={1} className={isMobile ? classes.displayNone : null}>
                        <IconButton
                            onClick={() => {
                                setTestimonialIndex(testimonialIndex - 1);
                            }}
                            className={testimonialIndex === minIndex ? classes.displayHidden : null}
                            style={{ backgroundColor: theme.palette.common.lightGrey }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                    </Grid>
                    <Grid item container xs={12} sm={10}>
                        <Grid item xs={12} sm={6}>
                            <Box alignContent="center" mr="auto" ml="auto">
                                <img
                                    alt={
                                        props.journeyDetails.testimonials[testimonialIndex].photo
                                            .title
                                    }
                                    src={
                                        props.journeyDetails.testimonials[testimonialIndex].photo
                                            .src
                                    }
                                    width="100%"
                                    height="100%"
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box className={classes.testimonialTextContainer}>
                                <Typography className={classes.journeyQuote}>
                                    {'"'}
                                    {props.journeyDetails.testimonials[testimonialIndex].quote}
                                    {'"'}
                                </Typography>
                                <Typography className={classes.authorText}>
                                    {props.journeyDetails.testimonials[testimonialIndex].authorText}
                                </Typography>
                            </Box>
                        </Grid>
                        {isMobile ? (
                            <Link to="/signup" className={classes.mobileBottomSignupButton}>
                                <Button variant="contained" color="primary">
                                    {"Signup"}
                                </Button>
                            </Link>
                        ) : null}
                    </Grid>
                    <Grid item xs={1} className={isMobile ? classes.displayNone : null}>
                        <IconButton
                            onClick={() => {
                                setTestimonialIndex(testimonialIndex + 1);
                            }}
                            className={
                                testimonialIndex === maxIndex - 1 ? classes.displayHidden : null
                            }
                            style={{ backgroundColor: theme.palette.common.lightGrey }}
                        >
                            <ArrowForwardIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        );
    };

    return (
        <Container maxWidth={false} disableGutters={true}>
            <Box className={classes.titleBar}>
                <Typography variant={isMobile ? "h3" : "h1"} className={classes.title}>
                    {props.title}
                </Typography>
            </Box>
            <Grid container className={classes.titleDescriptionContainer}>
                {isMobile ? (
                    <Grid item xs={12} sm={6} className={classes.titleDescriptionImage}>
                        <Box
                            width="100%"
                            height="100%"
                            className={classes.titleDescriptionImageInnerContainer}
                        >
                            <div className={classes.layer} />
                        </Box>
                        <Link to="/signup" className={classes.mobileSignupButton}>
                            <Button variant="outlined" color="primary">
                                {"Signup"}
                            </Button>
                        </Link>
                    </Grid>
                ) : null}
                <Grid item xs={12} sm={6} className={classes.titleDescriptionText}>
                    {props.description.titleDescription}
                </Grid>
                {isMobile ? null : (
                    <Grid item xs={12} sm={6} className={classes.titleDescriptionImage}>
                        <Box
                            width="100%"
                            height="100%"
                            className={classes.titleDescriptionImageInnerContainer}
                        >
                            <div className={classes.layer} />
                        </Box>
                    </Grid>
                )}
            </Grid>
            <Box
                paddingTop={isMobile ? 20 : 3}
                width={isMobile ? "100%" : "75%"}
                mr="auto"
                ml="auto"
                paddingLeft={isMobile ? 4 : 0}
                paddingRight={isMobile ? 4 : 0}
            >
                <div dangerouslySetInnerHTML={{ __html: props.description.secondaryDescription }} />
                <Grid container justify="center" spacing={2} alignItems="center">
                    {props.skills.map((skill, index) => {
                        return (
                            <Grid
                                item
                                xs={6}
                                key={index}
                                className={
                                    isMobile
                                        ? null
                                        : index % 2
                                        ? classes.skillItemRight
                                        : classes.skillItemLeft
                                }
                            >
                                <Box
                                    className={classes.skillCard}
                                    width={isMobile ? "100%" : "unset"}
                                >
                                    <img
                                        src={skill.icon}
                                        height={theme.spacing(5)}
                                        weight={theme.spacing(5)}
                                        alt="skills"
                                    />
                                    <Typography
                                        className={classes.skillLabel}
                                        variant={isSmallScreen ? (isMobile ? "body2" : "h6") : "h5"}
                                    >
                                        {skill.label}
                                    </Typography>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
                <Typography className={classes.postSkillsText} variant="body1">
                    {props.description.postSkillsText}
                </Typography>
            </Box>
            {renderMembersContainer()}
            {renderJourneyContainer()}
        </Container>
    );
}
