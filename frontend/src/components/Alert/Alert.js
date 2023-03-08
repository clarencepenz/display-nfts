import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import React from "react";

export default function CustomAlert({ status, error }) {
  return (
    <Alert status={status}>
      <AlertIcon />
      <AlertTitle>{error.message}</AlertTitle>
    </Alert>
  );
}
