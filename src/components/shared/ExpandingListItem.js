import PropTypes from "prop-types";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function ExpandingListItem(props) {
    const classes = useStyles();
    let [listOpen, setListOpen] = React.useState(props.open);
    return (
        <React.Fragment>
            <ListItem
                button
                onClick={() => {
                    setListOpen(!listOpen);
                }}
            >
                <ListItemText primary={props.label} />
                {listOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={listOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {props.subOptions.map((subOption, index) => {
                        return (
                            <Link href={subOption.link} key={index}>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary={subOption.label} />
                                </ListItem>
                            </Link>
                        );
                    })}
                </List>
            </Collapse>
        </React.Fragment>
    );
}

ExpandingListItem.propTypes = {
    open: PropTypes.bool,
    subOptions: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
};

ExpandingListItem.defaultProps = {
    open: false,
};
