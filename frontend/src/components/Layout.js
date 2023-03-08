import { Container } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Layout({ children }) {
  return (
    <Container maxW="1440px">
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
