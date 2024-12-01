import bcrypt from "bcrypt";
import dbConnect from "../lib/dbConnect";
import { customers, invoices, revenue, users } from "../lib/placeholder-data";
import Customer from "../models/Customer";
import Invoice from "../models/Invoice";
import Revenue from "../models/Revenue";
import User from "../models/User";

await dbConnect();

async function seedUsers() {
  await User.collection.drop();
  users.map(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await User.create({
      id: user.id,
      name: user.name,
      email: user.email,
      password: hashedPassword,
    });
  });
}

async function seedInvoices() {
  await Invoice.collection.drop();
  const insertedInvoices = await Invoice.insertMany(invoices);
  return insertedInvoices;
}

async function seedCustomers() {
  await Customer.collection.drop();
  const insertedCustomers = Customer.insertMany(customers);
  return insertedCustomers;
}

async function seedRevenue() {
  await Revenue.collection.drop();
  const insertedRevenue = await Revenue.insertMany(revenue);
  return insertedRevenue;
}

export async function GET() {
  try {
    await seedUsers();
    await seedCustomers();
    await seedInvoices();
    await seedRevenue();

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
