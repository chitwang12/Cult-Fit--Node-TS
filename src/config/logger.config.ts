import winston from "winston";

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: "MM-DD-YYYY HH:mm:ss" }),
    winston.format.json(),

    //define a custom print
    winston.format.printf(({ timestamp, level, message, ...data }) => {
      const output = { level, message, timestamp, data };
      return JSON.stringify(output);
    })
  ),
  transports: [new winston.transports.Console()],
});

export default logger;
