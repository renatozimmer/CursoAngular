"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var api_Config_1 = require("./api-Config");
exports.handleAuthorization = function (req, resp, next) {
    var token = extractToken(req);
    if (!token) {
        resp.setHeader('WWW-Autenticate', 'Bearer token_type="JWT"');
        resp.status(401).json({ message: 'Você precisa se autenticar. ' });
    }
    else {
        jwt.verify(token, api_Config_1.apiConfig.secret, function (error, decoded) {
            if (decoded) {
                next();
            }
            else {
                resp.status(403).json({ message: 'Não autorizado.' });
            }
        });
    }
};
function extractToken(req) {
    var token = undefined;
    if (req.headers && req.headers.authorization) {
        // Autorizacao é um Bearer em 3 partes zzzz.zzzz.zzzz
        var parts = req.headers.authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }
    return token;
}
