import { createServer } from "miragejs";

createServer({
  routes() {
    this.get("/api/users/:id", () => [
      {
        id: "1",
        firstName: "Dipa",
        lastName: "Inhouse",
        email: "hello@dipainhouse.com",
        address: { 
            street: "Ijen Boulevard Street 101", 
            city: "Malang City, 65115", 
            country: "East Java, Indonesia" 
        },
        invoiceNo: "INV-2022-010",
      },
    ]);
  },
});
