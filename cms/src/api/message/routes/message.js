    module.exports = {
      routes: [
        {
          method: "POST",
          path: "/message",
          handler: "message.send",
          config: {
            policies: [],
            middlewares: [],
          },
        },
      ],
    };