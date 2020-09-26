import { useDispatch } from "react-redux";
import { push, prefetch } from "connected-next-router";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
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
        color: theme.palette.primary.main,
        border: "1px solid " + theme.palette.primary.main,
        textTransform: "none",
        marginLeft: theme.spacing(5),
    },
}));

export default function MenuButton(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch();

    const handleRoute = (subCategory) => {
        handleClose();
        dispatch(push("/", subCategory.link));
    };

    return (
        <React.Fragment>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes[props.buttonClass]}
            >
                <Typography variant="h6">{props.label}</Typography>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {props.subCategories.map((subCategory, index) => {
                    return (
                        <MenuItem onClick={handleRoute.bind(subCategory)} key={index}>
                            {subCategory.label}
                        </MenuItem>
                    );
                })}
            </Menu>
        </React.Fragment>
    );
}

MenuButton.propTypes = {
    subCategories: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    buttonClass: PropTypes.string,
};

MenuButton.defaultProps = {
    buttonClass: "defaultButtonLabel",
};
