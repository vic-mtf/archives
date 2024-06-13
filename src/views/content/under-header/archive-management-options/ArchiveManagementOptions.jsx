import React, { useMemo } from "react";
import Button from "../../../../components/Button";
import managementOptions from "./managementOptions";
import { useSelector } from "react-redux";

export default function ArchiveManagementOptions() {
  const selectedElements = useSelector(
    (store) => store.data.navigation.archiveManagement.selectedElements
  );

  const activeState = useMemo(
    () => ({
      isOnly: selectedElements?.length === 1,
      isMultiple: selectedElements?.length > 1,
    }),
    [selectedElements]
  );

  const disabledElements = (keys) => !keys?.some((key) => activeState[key]);

  return (
    <>
      {managementOptions.map((option) => (
        <React.Fragment key={option.id}>
          {option.type === "button" && (
            <Button
              startIcon={React.createElement(option.icon)}
              children={option.label}
              onClick={option.action}
              color='inherit'
              sx={{ mr: 2 }}
              variant='outlined'
              disabled={disabledElements(option.activeKeys)}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
}
