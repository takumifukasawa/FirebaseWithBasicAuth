import * as functions from "firebase-functions";
import express from "express";
import requestIp from "request-ip";
import basicAuth from "basic-auth";

const AUTH_USER = "user";
const AUTH_PASSWORD = "pass";

// ip address white list for do not use basic auth
const THROUGH_AUTH_IP_LIST: string[] = [];

const server: express.Express = express();

server.all("*", (req, res, next) => {
  const clientIp = requestIp.getClientIp(req);
  console.log("[clientIp]: " + clientIp);

  // when do not use basic auth
  if (clientIp && THROUGH_AUTH_IP_LIST.indexOf(clientIp) > -1) {
    return next();
  }

  // when use basic auth
  const user = basicAuth(req);
  if (!user || user.name !== AUTH_USER || user.pass !== AUTH_PASSWORD) {
    res.set("WWW-Authenticate", "Basic realm='Access to the test site'");
    return res.status(401).send();
  }

  // allowed basic auth
  return next();
});

server.use(express.static(__dirname + "/static/"));

export const RestrictAccess = functions.https.onRequest(server);
