import React from "react";
import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
    DialogContent,
    DialogActions,
} from '@mui/material';
import InputFields from "./InputFields";

const schema = yup
  .object({
    classNumber: yup.string().trim()
    .min(5, 'Numéro de classification trop court')
    .required('Numéro de classification est requis'),
    refNumber: yup.string().trim()
    .min(5, 'Numéro de référence est requis')
    .required('Numéro de référence est requis'),
    profile: yup.string(),
  })

export default function FormContent ({ onSubmit, onClose }) {
    const { handleSubmit, ...otherProps } = useForm({
        resolver: yupResolver(schema),
        mode: 'onTouched',
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent
            sx={{ maxHeight: '75vh' }}
            
          >
           <InputFields  {...otherProps} />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={onClose}
              color="primary"
            >
                Annuler
            </Button>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
            >
                Valider le document
            </Button>
          </DialogActions>
      </form>
    );
}