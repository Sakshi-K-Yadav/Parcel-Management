const express = require("express");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection failed:", err));

const parcelSchema = new mongoose.Schema({
  trackingId: { type: String, unique: true },
  sender: String,
  receiver: String,
  status: String
});

const Parcel = mongoose.model("Parcel", parcelSchema);

app.post("/parcel", async (req, res) => {
  const { sender, receiver, status } = req.body;
  const trackingId = uuidv4();
  try {
    const newParcel = new Parcel({ trackingId, sender, receiver, status });
    await newParcel.save();
    res.status(201).json({ message: "Parcel created", trackingId });
  } catch (error) {
    res.status(500).json({ error: "Failed to create a parcel" });
  }
});

app.get("/parcel/:id", async (req, res) => {
  try {
    const parcel = await Parcel.findOne({ trackingId: req.params.id });
    if (!parcel) return res.status(404).json({ message: "Parcel not found" });
    res.json(parcel);
  } catch (error) {
    res.status(500).json({ error: "Error while fetching parcel" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
