import express from "express";
import https from "node:https";
import cors from "cors";
import request from "request";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

const authToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaXYyLnNoaXByb2NrZXQuaW4vdjEvZXh0ZXJuYWwvYXV0aC9sb2dpbiIsImlhdCI6MTY5MjE2MzEyNCwiZXhwIjoxNjkzMDI3MTI0LCJuYmYiOjE2OTIxNjMxMjQsImp0aSI6IkNMYTVWTFhOZlVHTGoxQUQiLCJzdWIiOjM4NDcyNjcsInBydiI6IjA1YmI2NjBmNjdjYWM3NDVmN2IzZGExZWVmMTk3MTk1YTIxMWU2ZDkifQ.6SzTs2fCk17aE8TQVQGCGFI2sRd5MgYNLTM_oEttBrE";

const url = "https://apiv2.shiprocket.in/v1/external/orders";
const webhook =
  "https://bodyfirsthapi.farziengineer.co/plugins/plugin.shipr/order/update";

//https://bodyfirsthapi.farziengineer.co/plugins/plugin.shipr/order/update

app.get("/", (req, res) => {
    fetch(`${webhook}`, {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          "Content-type": "application/json",
          "x-api-key": "efkjnefjvdkfvm",
        },
      })
        .then((response) => console.log(response))
        .then((json) => console.log(json));
  res.status(201).json({ message: "Hello World" });
});

app.get("/all", (req, res) => {
  const optionsGet = {
    method: "GET",
    url: `${url}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  request(optionsGet, function (err, response) {
    if (err) throw new Error(err);
    res.send(response.body);
  });
});

app.listen(3300, () => {
  console.log("Server running on port 3300");
});
