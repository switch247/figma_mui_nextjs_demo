import type { NextPage } from "next";
import { Box, Button, Container } from "@mui/material";
import styles from "./unlock.module.css";

const Unlock: NextPage = () => {
  return (
    <Container className={styles.unlock}>
      
      <Container className={styles.regressionModel}>
        <img className={styles.floorIcon} alt="" src="/floor.svg" />
        <Box className={styles.clusteringAlgorithm}>
          <img className={styles.backgroundCompleteIcon} alt="" />
          <img
            className={styles.plantIcon}
            loading="lazy"
            alt=""
            src="/plant.svg"
          />
          <img
            className={styles.padlockIcon}
            loading="lazy"
            alt=""
            src="/padlock.svg"
          />
          <div className={styles.socialNetworkAnalyzer}>
            <img
              className={styles.listItemsIcon}
              alt=""
              src="/list-items.svg"
            />
            <div className={styles.sentimentAnalyzer}>
              <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
              <div className={styles.gestureRecognizer}>
                <img
                  className={styles.backgroundSimpleIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
                <div className={styles.singUp}>SING UP</div>
              </div>
              <img
                className={styles.characterContainerIcon}
                alt=""
                src="/vector-3.svg"
              />
              <img
                className={styles.characterContainerIcon1}
                alt=""
                src="/vector-4.svg"
              />
              <div className={styles.informationRetriever}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-5.svg"
                />
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className={styles.membershipRegionIcon}
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
              </div>
              <div className={styles.emailParser}>
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="/vector-7.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="/vector-8.svg"
                />
                <img
                  className={styles.vectorIcon5}
                  loading="lazy"
                  alt=""
                  src="/vector-9.svg"
                />
              </div>
              <div className={styles.informationRetriever1}>
                <img
                  className={styles.vectorIcon6}
                  alt=""
                  src="/vector-10.svg"
                />
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.vectorIcon7}
                    alt=""
                    src="/vector-11.svg"
                  />
                  <img
                    className={styles.vectorIcon8}
                    alt=""
                    src="/vector-12.svg"
                  />
                  <img
                    className={styles.vectorIcon9}
                    alt=""
                    src="/vector-13.svg"
                  />
                  <img className={styles.groupIcon} alt="" src="/group.svg" />
                </div>
              </div>
              <div className={styles.eventCalendarInfoParent}>
                <img
                  className={styles.eventCalendarInfo}
                  alt=""
                  src="/vector-14.svg"
                />
                <img
                  className={styles.eventCalendarInfo1}
                  alt=""
                  src="/vector-15.svg"
                />
              </div>
              <img
                className={styles.vectorIcon10}
                alt=""
                src="/vector-16.svg"
              />
              <img
                className={styles.vectorIcon11}
                loading="lazy"
                alt=""
                src="/vector-17.svg"
              />
            </div>
          </div>
        </Box>
        <Box className={styles.movieRecommender}>
          <img className={styles.backgroundSimpleIcon1} alt="" />
          <img
            className={styles.speechBubbleIcon}
            alt=""
            src="/speechbubble.svg"
          />
        </Box>
        <Box className={styles.vectorContainer}>
          <img className={styles.vectorIcon12} alt="" src="/vector-18.svg" />
          <img className={styles.vectorIcon13} alt="" src="/vector-19.svg" />
          <img className={styles.vectorIcon14} alt="" src="/vector-20.svg" />
          <img className={styles.vectorIcon15} alt="" src="/vector-21.svg" />
          <img className={styles.vectorIcon16} alt="" src="/vector-22.svg" />
          <img className={styles.vectorIcon17} alt="" src="/vector-23.svg" />
          <img className={styles.vectorIcon18} alt="" src="/vector-24.svg" />
          <img className={styles.vectorIcon19} alt="" src="/vector-25.svg" />
          <img className={styles.vectorIcon20} alt="" src="/vector-26.svg" />
          <img className={styles.vectorIcon21} alt="" src="/vector-27.svg" />
          <img className={styles.characterIcon} alt="" src="/character.svg" />
        </Box>
      </Container>

      <Container className={styles.dataProcessor}>
        <div className={styles.shapeAssembler}>
          <div className={styles.howToDesignYourSiteFooterParent}>
            <div className={styles.howToDesign}>
              How to design your site footer like we did
            </div>
            <div className={styles.oneEventCalendar}>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </div>
          </div>
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
        </div>
      </Container>

    </Container>
  );
};

export default Unlock;
