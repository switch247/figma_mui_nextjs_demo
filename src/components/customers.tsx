import type { NextPage } from "next";
import styles from "./customers.module.css";
import { Box, Container } from "@mui/material";

const Customers: NextPage = () => {
  return (
    <Container className={styles.customers}>
      
      <Box className={styles.wrapperImage9}>
        <img
          className={styles.image9Icon}
          loading="lazy"
          alt=""
          src="/image-9@2x.png"
        />
      </Box>
      
      <Container className={styles.content}>
        <Box className={styles.content1}>
          <Box className={styles.weHaveEnjoyed}>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </Box>
          <Box className={styles.timSmithParent}>
            <Box className={styles.timSmith}>Tim Smith</Box>
            <Box className={styles.britishDragonBoat}>
              British Dragon Boat Racing Association
            </Box>
          </Box>
        </Box>
        <Box className={styles.emailInputField}>
          <Box className={styles.companyListItems}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo-7.svg"
            />
            <img
              className={styles.logoIcon1}
              loading="lazy"
              alt=""
              src="/logo-8.svg"
            />
            <img
              className={styles.logoIcon2}
              loading="lazy"
              alt=""
              src="/logo-9.svg"
            />
            <img
              className={styles.logoIcon3}
              loading="lazy"
              alt=""
              src="/logo-10.svg"
            />
            <img
              className={styles.logoIcon4}
              loading="lazy"
              alt=""
              src="/logo-11.svg"
            />
            <img
              className={styles.logoIcon5}
              loading="lazy"
              alt=""
              src="/logo-12.svg"
            />
          </Box>
          <Box className={styles.footerBig}>
            <Box className={styles.meetAllCustomers}>Meet all customers</Box>
            <img
              className={styles.arrowsDirectionsright}
              alt=""
              src="/24arrows--directionsright@2x.png"
            />
          </Box>
        </Box>
      </Container>

    </Container>
  );
};

export default Customers;
