import type { NextPage } from "next";
import { Box, Button, Container, Typography } from "@mui/material";
import styles from "./unlock1.module.css";

const Unlock1: NextPage = () => {
  return (
    <Container className={styles.unlock}>
      <Box className={styles.unlock1}>
        <img
          className={styles.unlockChild}
          loading="lazy"
          alt=""
          src="/frame-35.svg"
        />
        <Box className={styles.frameParent}>
          <Box className={styles.theUnseenOfSpendingThreeYParent}>
            <Typography variant="body2"  className={styles.theUnseenOf}>
              The unseen of spending three years at Pixelgrade
            </Typography>
            <Typography variant="body2" className={styles.whenJoiningThe}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </Typography>
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
              width: 105.5,
              height: 36.5,
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Unlock1;
