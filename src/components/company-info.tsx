import type { NextPage } from "next";
import styles from "./company-info.module.css";
import { Box, Container } from "@mui/material";

const CompanyInfo: NextPage = () => {
  return (
    <Container className={styles.companyInfo}>
      <Box className={styles.logo}>
        <img className={styles.icon} alt="" src="/icon-8.svg" />
        <Box className={styles.nexcentWrapper}>
          <img
            className={styles.nexcentIcon}
            loading="lazy"
            alt=""
            src="/nexcent-1.svg"
          />
        </Box>
      </Box>
      <Box className={styles.copyright}>
        <Box className={styles.copyright2020}>
          Copyright © 2020 Landify UI Kit.
        </Box>
        <Box className={styles.allRightsReserved}>All rights reserved</Box>
      </Box>
      <Box className={styles.socialLinks}>
        <img className={styles.socialIcons} alt="" src="/social-icons.svg" />
        <img className={styles.socialIcons1} alt="" src="/social-icons-1.svg" />
        <img className={styles.socialIcons2} alt="" src="/social-icons-2.svg" />
        <img className={styles.socialIcons3} alt="" src="/social-icons-3.svg" />
      </Box>
    </Container>
  );
};

export default CompanyInfo;
