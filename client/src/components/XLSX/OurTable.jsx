import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import Snackbar from "@material-ui/core/Snackbar";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Axios from "axios";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        table: {
            minWidth: 650,
        },
        buttonSpacing: {
            margin: "0rem 1rem 0 2rem",
        },
    })
);

export default function OurTable({
    data,
    cols,
    objectKeys,
    handleCloseDialog,
}) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState({
        open: false,
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleFormatData = () => {
        const finalData = [];
        for (let i = 1; i < data.length; i++) {
            const prod = {};
            for (let j = 0; j < data[i].length; j++) {
                prod[objectKeys[j]] = data[i][j];
            }
            finalData.push(prod);
        }
        return finalData;
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleImportData = async () => {
        setIsLoading(true);

        try {
            const bulkProducts = handleFormatData();
            const CREATE_ENDPOINT = "http://localhost:3030/products";
            await Axios.post(CREATE_ENDPOINT, bulkProducts, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods":
                        "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                },
            });
            setOpenSnackbar({ open: true, message: "Productos importados OK" });
        } catch (error) {
            console.error(error);
            setOpenSnackbar({ open: true, message: "Falló la operación" });
        }
    };
    const handleCloseSnackbar = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        handleCloseDialog(false);
    };
    return (
        <React.Fragment>
            <TableContainer component={Paper} style={{ marginBottom: "1rem" }}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {objectKeys &&
                                objectKeys.map((key) => (
                                    <TableCell key={key}>{key}</TableCell>
                                ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(1, 4).map((r, i) => (
                            <TableRow key={i}>
                                {cols.map((c) => (
                                    <TableCell key={c.key} align="center">
                                        {r[c.key]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ¿Desea realizar la carga masiva de productos?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {isLoading && <CircularProgress />}
                    <Button
                        onClick={handleClose}
                        size="small"
                        variant="outlined"
                        color="primary"
                    >
                        No
                    </Button>
                    <Button
                        onClick={handleImportData}
                        size="small"
                        variant="contained"
                        color="primary"
                        autoFocus
                    >
                        Si
                    </Button>
                </DialogActions>
                {openSnackbar && (
                    <Snackbar
                        open={openSnackbar.open}
                        autoHideDuration={2000}
                        onClose={handleCloseSnackbar}
                        anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                        }}
                    >
                        <Alert onClose={handleCloseSnackbar} severity="info">
                            {openSnackbar.message}
                        </Alert>
                    </Snackbar>
                )}
            </Dialog>
            {data[0] && (
                <>
                    <Button
                        aria-label="addMany"
                        color="primary"
                        variant="contained"
                        onClick={handleClickOpen}
                        className={classes.buttonSpacing}
                    >
                        GUARDAR
                    </Button>
                </>
            )}
        </React.Fragment>
    );
}
