import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./component.module.css";
import { Box } from "@mui/material";

export type ComponentType = {
  image18?: string;
  title?: string;
  arrowsDirectionsRight?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const Component: NextPage<ComponentType> = ({
  image18,
  title: title,
  arrowsDirectionsRight,
  propPadding,
}) => {
  const frameBox1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <Box className={styles.Box}>
      <img className={styles.image18Icon} loading="lazy" alt="" src={image18} />
      <Box className={styles.content}>
        <Box className={styles.creatingStreamlinedSafeguard}>
          {title}
        </Box>
        <Box className={styles.readmoreParent} style={frameBox1Style}>
          <Box className={styles.readmore}>Readmore</Box>
          <img
            className={styles.arrowsDirectionsright}
            alt=""
            src={arrowsDirectionsRight}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Component;
