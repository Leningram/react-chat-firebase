import React, { useContext, useState } from "react";
import { Button, Container, Grid, TextField } from "@material-ui/core";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestone";
import Loader from "./Loader";
import firebase from "firebase";

export default function Chat() {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState("");
    const [messages, loading] = useCollectionData(firestore.useCollectionData("messages").orderBy("createAt"));

    const sendMessage = async () => {
        firestore.useCollectionData("messages").add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        setValue("");
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <Container>
            <Grid container justifyContent={"center"} style={{ height: window.innerHeight - 50, marginTop: 20 }}>
                <div style={{ width: "80%", height: "70vh", border: "1px solid gray", overflowY: "auto" }}></div>
                <Grid container direction={"column"} alignItems={"flex-end"} style={{ width: "80%" }}>
                    <TextField
                        fullWidth
                        rowsMax={2}
                        variant={"outlined"}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Button onClick={sendMessage} variant={"outlined"}>
                        Отправить
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}
