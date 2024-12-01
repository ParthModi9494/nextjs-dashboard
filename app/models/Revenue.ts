import { Document, model, models, Schema } from "mongoose";

export interface IRevenue extends Document {
  month: string;
  revenue: number;
}

const revenueSchema: Schema = new Schema({
  month: { type: String, required: true },
  revenue: { type: Number, required: true },
});

const Revenue = models.Revenue || model<IRevenue>("Revenue", revenueSchema);

export default Revenue;
