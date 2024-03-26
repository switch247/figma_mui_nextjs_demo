import type { NextPage } from "next";
import styles from "./clients.module.css";
import React from 'react'
import { Box, Container } from "@mui/material";

function Clients() {
  return (
    <Container className={styles.clients}>
      <Box className={styles.clients1}>
        <Box className={styles.sectionTitle}>Our Clients</Box>
        <Box className={styles.description}>
          We have been working with some Fortune 500+ clients
        </Box>
      </Box>
      <Box className={styles.clientsLogos}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <img
          className={styles.logoIcon1}
          loading="lazy"
          alt=""
          src="/logo-1.svg"
        />
        <img
          className={styles.logoIcon2}
          loading="lazy"
          alt=""
          src="/logo-2.svg"
        />
        <img
          className={styles.logoIcon3}
          loading="lazy"
          alt=""
          src="/logo-3.svg"
        />
        <img className={styles.logoIcon4} alt="" src="/logo-4.svg" />
        <img className={styles.logoIcon5} alt="" src="/logo-5.svg" />
        <img className={styles.logoIcon6} alt="" src="/logo-6.svg" />
      </Box>
    </Container>
  );
};

export default Clients;
