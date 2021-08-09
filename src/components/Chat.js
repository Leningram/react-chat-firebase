import React, { useContext } from "react";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Chat() {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);

    return <Container>Chat</Container>;
}
