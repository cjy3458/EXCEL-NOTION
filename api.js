require("dotenv").config();
const axios = require("axios");
module.exports = function apiCall(name, track, number, e_mail, answerArray) {
  axios.post(
    "https://api.notion.com/v1/pages",
    {
      parent: {
        database_id: `${process.env.DATABASE_ID}`,
      },
      properties: {
        지원자: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        "지원 파트": {
          select: {
            name: track,
          },
        },
        연락처: {
          phone_number: number,
        },
        이메일: {
          email: e_mail,
        },
      },
      children: answerArray,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-02-22",
      },
    }
  );
};
