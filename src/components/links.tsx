import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton, Container, Box } from "@mui/material";
import styles from "./links.module.css";

const Links: NextPage = () => {
  return (
    <Container className={styles.links}>
      <Container className={styles.col1}>
        <Box className={styles.company}>Company</Box>
        <Container className={styles.listItems}>
          <Box className={styles.aboutUs}>About us</Box>
          <Box className={styles.blog}>Blog</Box>
          <Box className={styles.contactUs}>Contact us</Box>
          <Box className={styles.pricing}>Pricing</Box>
          <Box className={styles.testimonials}>Testimonials</Box>
        </Container>
      </Container>
      <Container className={styles.col2}>
        <Box className={styles.support}>Support</Box>
        <Box className={styles.listItems1}>
          <Box className={styles.helpCenter}>Help center</Box>
          <Box className={styles.termsOfService}>Terms of service</Box>
          <Box className={styles.legal}>Legal</Box>
          <Box className={styles.privacyPolicy}>Privacy policy</Box>
          <Box className={styles.status}>Status</Box>
        </Box>
      </Container>

      <Container className={styles.col3}>
        <Box className={styles.stayUpTo}>Stay up to date</Box>
        <TextField
          className={styles.emailInputField}
          placeholder="Your email address"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <img
                width="12.5px"
                height="12.5px"
                src="/essential-icons--send.svg"
              />
            ),
          }}
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "27.80000000000001px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              paddingRight: "8.400000000000091px",
              borderRadius: "0px 0px 0px 0px",
              fontSize: "9.7px",
            },
            "& .MuiInputBase-input": { color: "#d9dbe1" },
          }}
        />
      </Container>
      
    </Container>
  );
};

export default Links;
