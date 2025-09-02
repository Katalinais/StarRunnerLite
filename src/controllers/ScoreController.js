const express = require("express");

class ScoreController {
  constructor(scoreService) {
    this.router = express.Router();
    this.router.get("/", (req,res)=>res.json(scoreService.getTopScores()));
    this.router.post("/", (req,res)=>{});
  }
}
module.exports = ScoreController;
