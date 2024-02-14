const 지원자들 = require("./python/지원자.json");
const 파트질문 = {
  프론트엔드: require("./질문/프론트질문.json"),
  백엔드: require("./질문/백엔드질문.json"),
  기획: require("./질문/기획질문.json"),
  디자인: require("./질문/디자인질문.json"),
};
const 공통질문 = require("./질문/공통질문.json");
const apiCall = require("./api.js");
const getText = require("./getText.js");

지원자들.map((지원자) => {
  const track = 지원자[공통질문[0]];
  const name = 지원자[공통질문[2]];
  const number = 지원자[공통질문[7]];
  const email = 지원자[공통질문[8]];
  const 질문 = [...공통질문, ...파트질문[track]];

  const result = 질문.flatMap((question) => {
    return getText(question, 지원자[question]);
  });

  apiCall(name, track, number, email, result);
});
