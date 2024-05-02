import { onRequest } from "firebase-functions/v1/https";
import express from "express"
import { addEntry, deleteEntry, getAllEntries, updateEntry } from "./entryController";

const app = express() 

app.get("/", (req, res) => res.status(200).send("Hey there!"))
app.post("/entries", addEntry)
app.get("/entries", getAllEntries)
app.patch("/entries/:entryId", updateEntry)
app.delete("/entries/:entryId", deleteEntry)

exports.app = onRequest(app)