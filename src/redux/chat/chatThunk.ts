import { createAsyncThunk } from "@reduxjs/toolkit";
import {addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { firebaseapp } from "../../app-config";

export const saveMessages = createAsyncThunk('chat/saveMessages', async ({ messages, idReceiver }:any) => {
  
    try {
        await addDoc(collection(getFirestore(firebaseapp), 'messages'), {
          text:  messages,
          createdAt: serverTimestamp(),
          senderId: 1, // temporaire, a modifier lors de la completion du chat
          receiverId: idReceiver
        });
        } catch (error) {
        console.error('Erreur lors de l\'enregistrement du message dans Firebase :', error);
      }
});