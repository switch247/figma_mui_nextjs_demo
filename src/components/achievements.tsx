import type { NextPage } from "next";
import styles from "./achievements.module.css";
import { Box, Container } from "@mui/material";

const Achievements: NextPage = () => {
  return (
    <Container className={styles.achievements}>
      <Box className={styles.sectionHeading}>
        <Box className={styles.sectionHeading1}>
          <Box className={styles.sectionTitle}>
            <span>{`Helping a local `}</span>
            <span className={styles.businessReinventItself}>
              business reinvent itself
            </span>
          </Box>
        </Box>
        <Box className={styles.description}>
          We reached here with our hard work and dedication
        </Box>
      </Box>
     
      <Box className={styles.counts}>
        <Box className={styles.row1}>
          <Box className={styles.companyInfo}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon-4.svg"
            />
            <Box className={styles.details}>
              <b className={styles.number}>2,245,341</b>
              <div className={styles.label}>Members</div>
            </Box>
          </Box>
          <Box className={styles.icon1}>
            <img
              className={styles.icon2}
              loading="lazy"
              alt=""
              src="/icon-5.svg"
            />
            <Box className={styles.details1}>
              <b className={styles.number1}>46,328</b>
              <div className={styles.label1}>Clubs</div>
            </Box>
          </Box>
        </Box>
        <Box className={styles.row2}>
          <div className={styles.div}>
            <img
              className={styles.icon3}
              loading="lazy"
              alt=""
              src="/icon-6.svg"
            />
            <Box className={styles.details2}>
              <b className={styles.number2}>828,867</b>
              <div className={styles.label2}>Event Bookings</div>
            </Box>
          </div>
          <Box className={styles.div1}>
            <img
              className={styles.icon4}
              loading="lazy"
              alt=""
              src="/icon-7.svg"
            />
            <Box className={styles.details3}>
              <b className={styles.number3}>1,926,436</b>
              <div className={styles.label3}>Payments</div>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Achievements;
