interface DummyUser {
  id: number;
  name: string;
  email: string;
  city: string;
}

const users: DummyUser[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    city: "New York",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    city: "Los Angeles",
  },
  {
    id: 3,
    name: "Carol Williams",
    email: "carol.williams@example.com",
    city: "Chicago",
  },
  {
    id: 4,
    name: "David Brown",
    email: "david.brown@example.com",
    city: "Houston",
  },
  { id: 5, name: "Eve Davis", email: "eve.davis@example.com", city: "Phoenix" },
  {
    id: 6,
    name: "Frank Miller",
    email: "frank.miller@example.com",
    city: "Philadelphia",
  },
  {
    id: 7,
    name: "Grace Wilson",
    email: "grace.wilson@example.com",
    city: "San Antonio",
  },
  {
    id: 8,
    name: "Henry Moore",
    email: "henry.moore@example.com",
    city: "San Diego",
  },
  {
    id: 9,
    name: "Ivy Taylor",
    email: "ivy.taylor@example.com",
    city: "Dallas",
  },
  {
    id: 10,
    name: "Jack Anderson",
    email: "jack.anderson@example.com",
    city: "San Jose",
  },
  {
    id: 11,
    name: "Karen Thomas",
    email: "karen.thomas@example.com",
    city: "Austin",
  },
  {
    id: 12,
    name: "Leo Jackson",
    email: "leo.jackson@example.com",
    city: "Jacksonville",
  },
  {
    id: 13,
    name: "Mia White",
    email: "mia.white@example.com",
    city: "Fort Worth",
  },
  {
    id: 14,
    name: "Noah Harris",
    email: "noah.harris@example.com",
    city: "Columbus",
  },
  {
    id: 15,
    name: "Olivia Martin",
    email: "olivia.martin@example.com",
    city: "Charlotte",
  },
  {
    id: 16,
    name: "Paul Thompson",
    email: "paul.thompson@example.com",
    city: "San Francisco",
  },
  {
    id: 17,
    name: "Quinn Garcia",
    email: "quinn.garcia@example.com",
    city: "Indianapolis",
  },
  {
    id: 18,
    name: "Ruby Martinez",
    email: "ruby.martinez@example.com",
    city: "Seattle",
  },
  {
    id: 19,
    name: "Sam Robinson",
    email: "sam.robinson@example.com",
    city: "Denver",
  },
  {
    id: 20,
    name: "Tina Clark",
    email: "tina.clark@example.com",
    city: "Boston",
  },
];

export default defineEventHandler((event) => {
  const { q } = getQuery(event);

  if (!q || typeof q !== "string") {
    return users;
  }

  const term = q.toLowerCase();

  return users.filter(
    (user) =>
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.city.toLowerCase().includes(term),
  );
});
