import { useCallback } from "react";
import { isPlainObject } from "@reduxjs/toolkit";
import { useLocation, useNavigate } from "react-router-dom";
import deepMerge from "../utils/deepMerge";

export default function useNavigateSetState() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = useCallback(
    ({ to = "", state: nextState }) => {
      const previousState = location.state || {};
      const state = deepMerge(previousState, nextState);
      if (isPlainObject(state)) navigate(to, { state });
    },
    [location.state, navigate]
  );

  return navigateTo;
}
