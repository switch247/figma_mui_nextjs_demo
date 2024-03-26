import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./national-associations.module.css";
import { Box, Container } from "@mui/material";

export type NationalAssociationsType = {
  icon?: string;
  nationalAssociations?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
};

const NationalAssociations: NextPage<NationalAssociationsType> = ({
  icon,
  nationalAssociations,
  propHeight,
  propPadding,
  propPadding1,
}) => {
  const nationalAssociationsStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const memberStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <Container
      className={styles.nationalAssociations}
      style={nationalAssociationsStyle}
    >
      <Box className={styles.member} style={memberStyle}>
        <img className={styles.icon} loading="lazy" alt="" src={icon} />
        <b className={styles.nationalAssociations1}>{nationalAssociations}</b>
      </Box>
      <Box
        className={styles.ourMembershipManagementSoftWrapper}
        style={frameDivStyle}
      >
        <Box className={styles.ourMembershipManagement}>
          Our membership management software provides full automation of
          membership renewals and payments
        </Box>
      </Box>
    </Container>
  );
};

export default NationalAssociations;
