import React from "react";
import { Link } from "react-router-dom";
import HomeProps from "../constants/HomeConstants";
import { Container, makeStyles, Box, useTheme, useMediaQuery, Typography, Grid, Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import educationProps from "../constants/EducationConstants";
// import ImageBackground from 'react-native';
require('typeface-montserrat')


const useStyles = makeStyles((theme) => ({
    titleBar: {
        backgroundColor: theme.palette.common.lightYellow,
        opacity:0.67,
        // colors:theme.palette.common.lightYellow,
        width: "100%",
        height: theme.spacing(22),
        alignItems: "center",
        display: "flex",
        
        justifyContent: "center",
        color:"white",
        fontWeight:900,
        [theme.breakpoints.down("xs")]: {
            height: theme.spacing(15),
        },
        fontFamily: "Montserrat",

    },
    homeImageContainer: {
        backgroundImage: (props) => "url(" + props.description.descriptionImage.src + ")",
        // opacity:0.55,
        backgroundSize: "100% 100%",
        width: "100%",
        height: "100%",
        alignItems: "center",

        justifyContent:"center",
    },
    secondaryBar: {
        backgroundColor: "#6F2020",
        opacity:0.91,
        width: "100%",
        height: theme.spacing(18),
        alignItems: "center",
        // display: "flex",
        textAlign:"center",
        color:"white",
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            height: theme.spacing(10),
            
        },
        fontWeight: 500,
        fontSize: 18,
        [theme.breakpoints.down("xs")]: {
            fontSize: 12,
        },
        textOverflow:"ellipsis",

    },
    imageBox: {
        color:red,
        width: 100,
        height: 100,
        position: "relative",
        overflow: "hidden",
        borderRadius: "100%",
        borderColor:"red",
        justifyContent: "center",
        alignItems: "inherit",

    },
    descriptionContainer: {
        paddingTop : 12,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",

    },
    signUpButton: {
        // display: "flex",
        flexWrap:"wrap",
        color:"white",

    },

    title: {
        fontWeight: 800,
        opacity:1,
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
    secondLayer:{
        backgroundColor: "pink",
        // opacity:0.91,
        // width: "100%",
        height: theme.spacing(12),
        // alignItems: "center",
        display: "center",
        // alignContent: "center",
        color:"white",
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            height: theme.spacing(15),
        },
        paddingTop:10,
        textAlign:"center",
        whiteSpace:"preline",
        fontSize: 8,

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
    
    
})); 

export default function Home() {
    const props = HomeProps;
    const classes = useStyles(props);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    let [testimonialIndex, setTestimonialIndex] = React.useState(0);

    const renderMemberBox = (member) => {
        
        return (
            <Box textAlign="center" position="relative">
                {/* <ImageBackground style={{width:100, height:100, jsutifyContent:'center'}}> */}
                <a href="/">
                    <img src={member.photo} alt={member.name} width="60%" height="60%" to="/"/>


                </a>

                {/* </ImageBackground> */}
                    

                
                
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
                // style={{ backgroundColor: theme.palette.common.lightGrey }}
            >
                <Grid container className={classes.teamContainer} justify="center" spacing={2}>
                    {/* <Grid item xs={12} style={{ textAlign: "center" }}>
                        <Typography variant="h5" className={classes.teamTitle}>
                            {props.team.title}
                        </Typography>
                    </Grid> */}
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

    return (
        
        <Container maxWidth={false} disableGutters={true}>
            <Grid container className={classes.homeImageContainer} >
                <Box className={classes.titleBar}>
                    <Typography variant={isMobile ? "h3" : "h1"} className={classes.title}>
                        {props.title}
                    </Typography>
                </Box>
                <Box className={classes.secondaryBar}>
                    <span className={classes.descriptionContainer} >
                        {props.description.titleDescription}
                    </span>
                    <br></br>
                    
                    <Button className={classes.signUpButton} variant="outlined">SIGN UP</Button>
                </Box>

            </Grid>
            {/* <Box textAlign="center">
                <Typography>{props.description.secondaryDescription} </Typography>
            </Box> */}
            <Box className={classes.secondLayer}>
                <div  dangerouslySetInnerHTML={{__html: props.description.secondaryDescription}}/>
            </Box>
            
            <Grid>

            </Grid>
            {renderMembersContainer()}
            

        </Container>
    );

    // return (
    //     <div>Home</div>
    // );
}
