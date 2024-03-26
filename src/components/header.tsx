import type { NextPage } from "next";
import { Box, Button, Container } from "@mui/material";
import styles from "./header.module.css";

const Header: NextPage = () => {
  return (
    <header className={styles.header}>

      <Box className={styles.logo}>
        <img className={styles.icon} alt="" src="/icon.svg" />
        <img
          className={styles.nexcentIcon}
          loading="lazy"
          alt=""
          src="/nexcent.svg"
        />
      </Box>

      <Container className={styles.rightMenu}>
        <nav className={styles.headerMenu}>
          <Box className={styles.menu}>
            <div className={styles.whyJustgo}>Home</div>
            <img className={styles.expandIcon} alt="" src="/expand.svg" />
          </Box>
          <Box className={styles.menu1}>
            <div className={styles.whyJustgo1}>Features</div>
            <img className={styles.expandIcon1} alt="" src="/expand.svg" />
          </Box>
          <Box className={styles.menu2}>
            <div className={styles.whyJustgo2}>Community</div>
            <img className={styles.expandIcon2} alt="" />
          </Box>
          <Box className={styles.menu3}>
            <div className={styles.whyJustgo3}>Blog</div>
            <img className={styles.expandIcon3} alt="" src="/expand.svg" />
          </Box>
          <Box className={styles.menu4}>
            <div className={styles.whyJustgo4}>Pricing</div>
            <img className={styles.expandIcon4} alt="" src="/expand.svg" />
          </Box>
        </nav>
        <Button
          className={styles.button}
          endIcon={
            <img
              width="11.1px"
              height="11.1px"
              src="/16arrows--directionsright.png"
            />
          }
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "11.1",
            background: "#4caf4f",
            borderRadius: "2.78427791595459px",
            "&:hover": { background: "#4caf4f" },
            padding:'10px',
            minWidth: 133.3,
            minHeight: 36.5,
          }}
        >
          Register Now
        </Button>
      </Container>
    </header>
  );
};

export default Header;
