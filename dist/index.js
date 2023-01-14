"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = require("./src/router/userRouter");
const body_parser_1 = __importDefault(require("body-parser"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_session_1 = __importDefault(require("express-session"));
const app = (0, express_1.default)();
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect('mongodb://127.0.0.1:27017/test2').then(() => {
    console.log('DB Connect!');
}).catch(error => {
    console.log('DB Connection error !');
});
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use((0, express_fileupload_1.default)({
    createParentPath: true
}));
app.use((0, express_session_1.default)({
    resave: true,
    saveUninitialized: true,
    secret: 'Ning',
    cookie: { maxAge: 60000 }
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('./public'));
app.use('', userRouter_1.router);
app.listen(8080, () => {
    console.log('Bo hieu muon nam');
});
//# sourceMappingURL=index.js.map