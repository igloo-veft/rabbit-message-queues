import createRabbitClient from "./createRabbitClient";

createRabbitClient().then(ch => {
  ch.assertQueue(addUserAction).then(ok => {
    return ch.consume(addUserAction, msg => {
      if (msg !== null) {
        const data = JSON.parse(msg.content.toString());
        console.log("User was added", data);
        ch.ack(msg);
      }
    });
  });
});

createRabbitClient().then(ch => {
  ch.assertQueue(punchAction).then(ok => {
    return ch.consume(punchAction, msg => {
      if (msg !== null) {
        const data = JSON.parse(msg.content.toString());
        console.log("User got a punch", data);
        ch.ack(msg);
      }
    });
  });
});

createRabbitClient().then(ch => {
  ch.assertQueue(discountAction).then(ok => {
    return ch.consume(discountAction, msg => {
      if (msg !== null) {
        const data = JSON.parse(msg.content.toString());
        console.log("User got discount", data);
        ch.ack(msg);
      }
    });
  });
});
