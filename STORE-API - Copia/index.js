import express from "express";
import cors from "cors";
import winston from "winston";
import clientsRouter from "./routes/client.route.js";
import productsRouter from "./routes/products.route.js";
import salesRouter from "./routes/sale.route.js";
import supplierRouter from "./routes/supplier.route.js";

//configuração do log winston
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`;
})
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "store-api.log" })
    ],
    format: combine(
        label({ label: "store-api"}),
        timestamp(),
        myFormat
    )
});

const app = express();
app.use(express.json()); //express vai converter tudo em json
app.use(cors());
app.use("/client", clientsRouter);   //tudo que vier (métodos) /client vai ser direcionado p clientsRouter
app.use("/products", productsRouter);
app.use("/sales", salesRouter);
app.use("/supplier", supplierRouter);
app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`)
    res.status(400).send({ error: err.message });
})
app.listen(3000, () => console.log("API Started!"));