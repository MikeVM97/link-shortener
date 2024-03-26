import { Schema, model } from "mongoose";

const linkSchema = new Schema({
  origin: { type: String, required: true },
  short: { type: String, required: true },
});

// linkSchema.set("toJSON", {
//   transform: (_document, objReturned) => {
//     objReturned.id = objReturned._id;
//     delete objReturned._id;
//     delete objReturned.__v;
//   },
// });

const LinkModel = model("links", linkSchema);

export default LinkModel;
