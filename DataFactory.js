import mockjs, { Random } from "mockjs";

export default class DataFactory {
  static generate() {
    return mockjs.mock({
      "data|1-10": [
        {
          "mobile|12300000000-12399999999": 1,
          "name|1": "@first @last",
          "age|1-10": 1,
          "sex|1": () => Random.pick(["male", "female"]),
          "teamName|1": "Tigers",
          "scoringPlay|1": "lorem lorem ispum lorem ispum lorem ispum ispum",
          "time|1": "11:30"
        }
      ]
    });
  }
}
