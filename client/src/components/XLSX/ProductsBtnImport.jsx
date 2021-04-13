import React from "react";
import SheetJSApp from "./SheetJSApp";
import { createStyles, makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import PublishIcon from "@material-ui/icons/Publish";

const useStyles = makeStyles((theme) =>
    createStyles({
        appBar: {
            position: "relative"
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1
        },
        marginButton: {
            margin: "0 1rem"
        }
    })
);

const Transition = React.forwardRef(function Transition(
    props,
    ref
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProductsBtnImport() {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div>
            <Button
                className={classes.marginButton}
                variant="contained"
                color="primary"
                startIcon={<PublishIcon />}
                onClick={handleClickOpen}
            >
                IMPORTAR PRODUCTOS
            </Button>
            <Dialog
                fullScreen
                open={openDialog}
                onClose={handleCloseDialog}
                TransitionComponent={Transition}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleCloseDialog}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Importación masiva de productos
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <SheetJSApp handleCloseDialog={handleCloseDialog} />
                </List>
            </Dialog>
        </div>
    );
}
