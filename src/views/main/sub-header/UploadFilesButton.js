import React, { useState } from "react";
import Button from "../../../components/Button";
import { CircularProgress } from "@mui/material";

export default function UploadFilesButton () {
    //const uploadList = useRef([]);
    const [loadNumber, 
    //    setLoadNumber
    ] = useState(12);

    return ( null &&
        <React.Fragment>
            <Button
                startIcon={<CircularProgress size={15} color="inherit"/>}
                color="inherit"
            >
                Chargement de {loadNumber} élements
            </Button>
        </React.Fragment>
    );
}