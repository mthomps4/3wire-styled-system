"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("@emotion/styled");
const Container_1 = require("./Container");
const Row = styled_1.default(Container_1.default)({
    display: 'flex',
    flexDirection: 'row'
});
Row.defaultProps = {};
exports.default = Row;
