import type { NextPage } from "next";
import Component from "./component";
import styles from "./community-updates.module.css";
import { Box, Container } from "@mui/material";

const CommunityUpdates: NextPage = () => {
  return (
    <Container className={styles.communityUpdates}>
      <Box className={styles.community}>
        <Box className={styles.sectionTitle}>Caring is the new marketing</Box>
        <Box className={styles.description}>
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </Box>
      </Box>
      <Box className={styles.linksColSupport}>
        <Component
          image18="/image-18@2x.png"
          title="Title 1"
          arrowsDirectionsRight="/24arrows--directionsright-1@2x.png"
        />
        <Component
          image18="/image-19@2x.png"
          title="Title 2"
          arrowsDirectionsRight="/24arrows--directionsright-2@2x.png"
          propPadding="5.600000000000023px var(--padding-34xl) var(--padding-7xs-5)"
        />
        <Component
          image18="/image-20@2x.png"
          title="Title 3"
          arrowsDirectionsRight="/24arrows--directionsright-3@2x.png"
          propPadding="5.600000000000023px var(--padding-34xl) var(--padding-7xs-5)"
        />
      </Box>
    </Container>
  );
};

export default CommunityUpdates;
