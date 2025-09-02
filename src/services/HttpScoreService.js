import { IScoreService } from "./IScoreServices.js";

export class HttpScoreService extends IScoreService {
  constructor(baseUrl) {
    super();
    this.baseUrl = baseUrl;
  }

  async getTopScores() {
    const res = await fetch(this.baseUrl);
    return await res.json();
  }

  async saveScore(score) {
    await fetch(this.baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(score),
    });
  }
}
