const request = require("supertest");
const app = require("../app");

describe("GET /", ()=> {
    it("debe responder con 200 y un mensaje", async() => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("API Funcionando");
    });

    it("esperamos que responda página no encontrada", async() => {
        const res = await request(app).get("/not_found");
        expect(res.statusCode).toBe(404);
    });

    it("total de registros administradores", async() => {
        const res = await request(app).get("/administradores");
        expect(res.body.total).toBe(5);
    });
});