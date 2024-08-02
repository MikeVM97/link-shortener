import { Schema, Document, Model, model, models } from "mongoose";

// export interface LinkDocument extends Link, Document {
//   createdAt: Date;
//   updatedAt: Date;
// }

const linkSchema = new Schema<Link>(
  {
    origin: { type: String, required: true },
    short: { type: String, required: true },
    code: { type: Boolean, required: true },
  }
  // { timestamps: true }
);

linkSchema.set("toJSON", {
  transform: (_document, objReturned) => {
    objReturned.id = objReturned._id;
    delete objReturned._id;
    delete objReturned.__v;
  },
});

const LinkModel: Model<Link> = models?.links || model("links", linkSchema);

export default LinkModel;
