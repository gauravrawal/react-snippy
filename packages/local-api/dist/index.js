"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = void 0;
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const path_1 = __importDefault(require("path"));
const cell_1 = require("./routes/cell");
const serve = (port, filename, dir, useProxy) => {
    const app = (0, express_1.default)();
    app.use((0, cell_1.createCellsRouter)(filename, dir));
    console.log(filename, dir);
    if (useProxy) {
        app.use((0, http_proxy_middleware_1.createProxyMiddleware)({
            target: 'http://localhost:3000',
            ws: true,
            logLevel: 'silent',
        }));
    }
    else {
        const packagePath = require.resolve('@jsnote-gr/local-client/build/index.html');
        app.use(express_1.default.static(path_1.default.dirname(packagePath)));
    }
    return new Promise((resolve, reject) => {
        app.listen(port, () => {
            console.log('Listening on', port);
        });
    });
};
exports.serve = serve;
