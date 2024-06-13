import React, { useEffect, useRef, useState, useCallback } from "react";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";
import useAxios from "../../../utils/useAxios";
import Button from "../../../components/Button";
import Dialog from "../../../components/Dialog";
import { DialogTitle } from "@mui/material";
import FormContent from "./FormContent";

export default function ValidateForm() {
  const [doc, setDoc] = useState(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const token = useSelector((store) => store.user.token);
  const [, refresh, cancel] = useAxios(
    {
      url: "api/stuff/validate",
      method: "post",
      headers: { Authorization: `Bearer ${token}` },
    },
    { manual: true }
  );

  const handleSendDoc = useCallback(
    (fields) => {
      const data = {
        ...fields,
        id: doc,
      };
      const timer = window.setTimeout(() => {
        refresh({ data })
          .then(() => {
            closeSnackbar();
            enqueueSnackbar({
              variant: "success",
            });
          })
          .catch(() => {
            closeSnackbar();
            enqueueSnackbar({
              variant: "error",
            });
          });
      }, 3000);
      enqueueSnackbar({
        message: "Validation du document en cours...",
        action: ({ id }) => (
          <Button
            children='Annuler'
            color='inherit'
            onClick={() => {
              cancel();
              window.clearTimeout(timer);
              closeSnackbar(id);
            }}
          />
        ),
        autoHideDuration: null,
      });
      setDoc(null);
    },
    [cancel, closeSnackbar, enqueueSnackbar, refresh]
  );

  useEffect(() => {
    const event = "__validate_archive_doc";
    const root = document.getElementById("root");
    const handleValidationArchive = (e) => {
      const { doc, name } = e.detail;
      if (event === name) setDoc(doc);
    };
    root.addEventListener(event, handleValidationArchive);
    return () => {
      root.removeEventListener(event, handleValidationArchive);
    };
  }, []);

  return (
    <Dialog
      open={Boolean(doc)}
      PaperProps={{
        sx: { overflow: "hidden" },
        component: "div",
      }}>
      <DialogTitle component='div' fontWeight='bold' fontSize={18}>
        Validation du document
      </DialogTitle>
      <FormContent
        onClose={(event) => {
          event.preventDefault();
          setDoc(null);
        }}
        onSubmit={handleSendDoc}
      />
    </Dialog>
  );
}
