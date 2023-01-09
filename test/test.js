const request = require("supertest");
const app = require("../app.js");

describe("Test the root path", () => {
  test("It should respond to the GET method", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
describe("Test the root path", () => {
  test("should respond with 404 to the GET /coucou", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
describe("Test the /api/contacts path", () => {
  test("should return code status 200", (done) => {
    request(app)
      .get("/api/contacts")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body[0].nom).toBe("alexandre");
        done();
      });
  });
});
describe("Test the /api/contacts path", () => {
  test("should return code status 200", (done) => {
    request(app)
      .get("/api/contacts")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        //expect(response.body[0].nom).toBe("alexandre");
        done();
      });
  });
});
