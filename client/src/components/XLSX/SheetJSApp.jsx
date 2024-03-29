import React, { Fragment, useState } from "react";
import XLSX from "xlsx";
import DragDropFile from "./DragDropFile";
import Backdrop from "@material-ui/core/Backdrop";
import DataInput from "./DataInput";
import OutTable from "./OurTable";
import { makeStyles } from "@material-ui/core";
import StepperImport from "./StepperImport";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff"
    }
}));

/* generate an array of column objects */
const make_cols = (refstr) => {
    const o = [],
        C = XLSX.utils.decode_range(refstr).e.c + 1;
    for (let i = 0; i < C; ++i) {
        o[i] = { name: XLSX.utils.encode_col(i), key: i };
    }
    return o;
};
export default function SheetJSApp({ handleCloseDialog }) {
    const classes = useStyles();
    const [state, setState] = useState({
        data: [],
        cols: []
    });
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

 
    function handleFile(file) {
        setOpen(true);

        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
        reader.onload = async (e) => {
            /* Parse data */
            const bstr = e.target.result;
            const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = await XLSX.utils.sheet_to_json(ws, { header: 1 });
            const newCols = await make_cols(ws["!ref"]);
            newCols.forEach((c) => {
                c.name = "notValid";
                c.used = false;
            });
            /* Update state */
            setState({ data: data, cols: newCols });
            setOpen(false);
        };
        if (rABS) {
            reader.readAsBinaryString(file);
        } else {
            reader.readAsArrayBuffer(file);
        }
    }
    return (
        <Fragment>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                CARGANDO...
            </Backdrop>
            <StepperImport />
            <DragDropFile handleFile={handleFile}>
                <DataInput handleFile={handleFile} />
                <OutTable
                    handleCloseDialog={handleCloseDialog}
                    data={state.data}
                    cols={state.cols}
                    objectKeys={state.data[0]}
                />
            </DragDropFile>
        </Fragment>
    );
}
