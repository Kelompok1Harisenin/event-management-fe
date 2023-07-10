// import React from "react";
// import { Navigate } from "react-router-dom";
import Auth from "../utils/helpers/auth";

export default function PrivateRoute() {
  if (Auth.authenticated()) {
    return true
  }

  return false
}
