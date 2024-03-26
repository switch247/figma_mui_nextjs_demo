import React from 'react'
import type { NextPage } from "next";

import CompanyInfo from './company-info';
import Links from './links';
import styles from "./footer.module.css";
import { Container } from '@mui/material';
function Footer() {
    return (
        <Container className={styles.footers}>

            <div className={styles.footerBig4}>
                <CompanyInfo />
                <Links />
            </div>
        </Container>
    )
}

export default Footer