module.exports = function getText(question, answer) {
  if (
    question === "사용자 이름" ||
    question === "개인정보 수집에 동의하십니까?" ||
    question === "멋쟁이사자처럼 대학을 알게 된 경로는 무엇인가요?"
  ) {
    return [];
  } else {
    return [
      {
        object: "block",
        type: "paragraph",
        paragraph: {
          rich_text: [
            {
              type: "text",
              text: {
                content: question,
              },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: true,
                code: true,
              },
            },
          ],
        },
      },
      {
        object: "block",
        type: "paragraph",
        paragraph: {
          rich_text: [
            {
              type: "text",
              text: {
                content: String(answer) + "\n",
              },
            },
          ],
        },
      },
    ];
  }
};
