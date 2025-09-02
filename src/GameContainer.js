import HttpScoreService from "./services/HttpScoreService.js";

export function createGameContainer(){
  const scoreService = new HttpScoreService("/scores");
  return { scoreService };
}