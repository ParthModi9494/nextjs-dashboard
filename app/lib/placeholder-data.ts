// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: "674b4c48fc5073c288598aeb",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

const customers = [
  {
    _id: "674b4c3b192e681b29542f75",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    _id: "674b4c48fc5073c288598aeb",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    _id: "674b4c5360264ca0213d51f2",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    _id: "674b4c628640a1f33cff717e",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    _id: "674b4c6dfe6840a10d0c0d8e",
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    _id: "674b4c775bf46f9227673098",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png",
  },
];

const invoices = [
  {
    customer: customers[0]._id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    customer: customers[1]._id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  {
    customer: customers[4]._id,
    amount: 3040,
    status: "paid",
    date: "2022-10-29",
  },
  {
    customer: customers[3]._id,
    amount: 44800,
    status: "paid",
    date: "2023-09-10",
  },
  {
    customer: customers[5]._id,
    amount: 34577,
    status: "pending",
    date: "2023-08-05",
  },
  {
    customer: customers[2]._id,
    amount: 54246,
    status: "pending",
    date: "2023-07-16",
  },
  {
    customer: customers[0]._id,
    amount: 666,
    status: "pending",
    date: "2023-06-27",
  },
  {
    customer: customers[3]._id,
    amount: 32545,
    status: "paid",
    date: "2023-06-09",
  },
  {
    customer: customers[4]._id,
    amount: 1250,
    status: "paid",
    date: "2023-06-17",
  },
  {
    customer: customers[5]._id,
    amount: 8546,
    status: "paid",
    date: "2023-06-07",
  },
  {
    customer: customers[1]._id,
    amount: 500,
    status: "paid",
    date: "2023-08-19",
  },
  {
    customer: customers[5]._id,
    amount: 8945,
    status: "paid",
    date: "2023-06-03",
  },
  {
    customer: customers[2]._id,
    amount: 1000,
    status: "paid",
    date: "2022-06-05",
  },
];

const revenue = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
];

export { customers, invoices, revenue, users };
