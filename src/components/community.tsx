import type { NextPage } from "next";
import NationalAssociations from "./national-associations";
import styles from "./community.module.css";
import { Box, Container } from "@mui/material";

const Community: NextPage = () => {
  return (
    <Container className={styles.community}>
     
      <Container className={styles.community1}>
        <Box className={styles.sectionTitle}>
          Manage your entire community in a single system
        </Box>
        <Box className={styles.description}>Who is Nextcent suitable for?</Box>
      </Container>
     
      <Container className={styles.logo}>
        <Box className={styles.membershipOrganizatios}>
          <Box className={styles.member}>
            <Box className={styles.icon}>
              <Box className={styles.iconChild} />
              <img
                className={styles.icon1}
                loading="lazy"
                alt=""
                src="/icon-1.svg"
              />
            </Box>
            <b className={styles.membershipOrganisations}>
              Membership Organisations
            </b>
          </Box>
          <Box className={styles.ourMembershipManagementSoftWrapper}>
            <Box className={styles.ourMembershipManagement}>
              Our membership management software provides full automation of
              membership renewals and payments
            </Box>
          </Box>
        </Box>
        <NationalAssociations
          icon="/icon-2.svg"
          nationalAssociations="National Associations"
        />
        <NationalAssociations
          icon="/icon-3.svg"
          nationalAssociations="Clubs And Groups"
          propHeight="182px"
          propPadding="var(--padding-0) var(--padding-smi) var(--padding-0) var(--padding-xs)"
          propPadding1="var(--padding-0) var(--padding-8xs)"
        />
      </Container>
    </Container>
  );
};

export default Community;
