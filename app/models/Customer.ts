import { Document, model, models, Schema } from "mongoose";

export interface ICustomer extends Document {
  _id: string;
  name: string;
  email: string;
  image_url: string;
}

const customerSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  image_url: { type: String, required: true },
});

const Customer =
  models.Customer || model<ICustomer>("Customer", customerSchema);

export default Customer;
