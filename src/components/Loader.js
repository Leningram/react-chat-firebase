import React from "react";
import { Container, Grid } from "@material-ui/core";

export default function Loader() {
    return (
        <Container>
            <Grid container style={{ height: window.innerHeight - 50 }} alignItems={"center"} justifyContent={"center"}>
                <Grid container alignItems={"center"} direction={"column"}>
                    <div className="loadingio-spinner-spin-r5smt7ipvv">
                        <div className="ldio-6cgfgp0as5a">
                            <div>
                                <div></div>
                            </div>
                            <div>
                                <div></div>
                            </div>
                            <div>
                                <div></div>
                            </div>
                            <div>
                                <div></div>
                            </div>
                            <div>
                                <div></div>
                            </div>
                            <div>
                                <div></div>
                            </div>
                            <div>
                                <div></div>
                            </div>
                            <div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
