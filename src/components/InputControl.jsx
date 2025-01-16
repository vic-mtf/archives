import { FormControl, FormHelperText, TextField } from "@mui/material";
import React, { useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const InputControl = React.forwardRef((props, ref) => {
  const { message, fullWidth, sx, ...otherProps } = props;
  const messageRef = useRef(message);

  useLayoutEffect(() => {
    messageRef.current = message ? message : messageRef.current;
  }, [message]);

  return (
    <FormControl fullWidth={fullWidth} sx={sx}>
      <TextField
        ref={ref}
        {...otherProps}
        color={message ? "error" : "primary"}
      />
      <Show in={Boolean(message)} unmountOnExit>
        <FormHelperText sx={{ color: (theme) => theme.palette.error.main }}>
          {messageRef.current}
        </FormHelperText>
      </Show>
    </FormControl>
  );
});

InputControl.propTypes = {
  message: PropTypes.string,
  fullWidth: PropTypes.bool,
  sx: PropTypes.object,
};

InputControl.displayName = "InputControl";

const Show = ({ in: isOpen, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Show.propTypes = {
  in: PropTypes.bool,
  children: PropTypes.node,
};

export default InputControl;
