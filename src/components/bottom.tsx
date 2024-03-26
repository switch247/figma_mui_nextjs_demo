import { Box, Button, Container } from '@mui/material'
import React from 'react'
import styles from "../app/index.module.css";
function Bottom() {
    return (
        <Container className={styles.communityUpdatesParent}>
            <Box className={styles.communityUpdates}>
                <Box className={styles.letNextcentDo}>
                    Lorem ipsum dolor sit dolores voluptatibus.
                </Box>
                <Box className={styles.buttonWrapper}>
                    <Button
                        className={styles.button}
                        endIcon={
                            <img
                                width="11.1px"
                                height="11.1px"
                                src="/16arrows--directionsright-1.png"
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
                            width: 124.30000000000018,
                        }}
                    >
                        Get a Demo
                    </Button>
                </Box>
            </Box>

        </Container>
    )
}

export default Bottom
