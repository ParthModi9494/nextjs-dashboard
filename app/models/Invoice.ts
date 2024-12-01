import { Document, model, models, Schema } from "mongoose";

export interface IInvoice extends Document {
  amount: number;
  status: string;
  date: string;
  customer: string;
}

const invoiceSchema: Schema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
});

const Invoice = models.Invoice || model<IInvoice>("Invoice", invoiceSchema);
export default Invoice;
