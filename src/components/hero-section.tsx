import type { NextPage } from "next";
import { Box, Button, Container } from "@mui/material";
import styles from "./hero-section.module.css";
import React from 'react'


const HeroSection: NextPage = () => {
  return (
    <Container className={styles.heroSection}>
      <Box className={styles.textParent}>
        <Box className={styles.text}>
          <Box className={styles.lessonsAndInsightsContainer}>
            <span>{`Lessons and insights `}</span>
            <span className={styles.from8Years}>from 8 years</span>
          </Box>
          <Box className={styles.whereToGrow}>
            Where to grow your business as a photographer: site or social media?
          </Box>
        </Box>
        <Button
          className={styles.button}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "11.1",
            background: "#4caf4f",
            borderRadius: "2.78427791595459px",
            "&:hover": { background: "#4caf4f" },
            width: 89.5,
            height: 36.5,
          }}
        >
          Register
        </Button>
      </Box>
      <img
        className={styles.illustrationIcon}
        loading="lazy"
        alt=""
        src="/illustration.svg"
      />
    </Container>
  );
};

export default HeroSection;
