const request = require("supertest");
const mongoose = require('mongoose')
const app = require('../backend/server')
const Character = require('../backend/models/characterModel')

require("dotenv").config();



beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });




  describe("POST /api/characters", () => {
    it("should create a character", async () => {
      const res = await request(app).post("/api/characters").send({
        name: "name",
        surname: "surname",
        age: 10,
        gender: "Male",
        height: 100,
        weight: 100,
        description: "Description 2",
      });

      expect(res.statusCode).toBe(200);
      expect(res.body.name).toBe("name");
    });
  });


  describe("GET /api/characters", () => {
    it("should return all characters", async () => {
      const res = await request(app).get("/api/characters");
      expect(res.statusCode).toBe(200);
    });
  });

  describe("GET /api/characters/:id", () => {
    it("should return a characters", async () => {
        const character = new Character({
            name: "name",
            surname: "surname",
            age: 10,
            gender: "Male",
            height: 100,
            weight: 100,
            description: "Description 2",
        })
    
        id = character.id
    
        await Character.create(character)

      const res= await request(app).get(
        "/api/characters/"+id
      );
      expect(res.statusCode).toBe(200);
      expect(res.body.name).toBe("name");
      Character.findOneAndDelete({_id: id})
    });
  });
  


  
  describe("DELETE /api/characters/:id", () => {
    it("should delete a character", async () => {

        const character = new Character({
            name: "name",
            surname: "surname",
            age: 10,
            gender: "Male",
            height: 100,
            weight: 100,
            description: "Description 2",
        })
    
        id = character.id
    
        await Character.create(character)
        
      const res = await request(app).delete(
        "/api/characters/"+id
      );
      expect(res.statusCode).toBe(200);
    });
  });