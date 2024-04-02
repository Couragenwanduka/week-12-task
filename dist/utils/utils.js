"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLoginInput = exports.validateSignupInput = void 0;
const joi_1 = require("../config/joi");
const validateSignupInput = (email, passWord, firstName, lastName) => {
    try {
        const result = joi_1.signUpSchema.validate({ email, passWord, firstName, lastName });
        return result;
    }
    catch (error) {
        throw new Error("invalid input" + error.message);
    }
};
exports.validateSignupInput = validateSignupInput;
const validateLoginInput = (email, passWord) => {
    try {
        const result = joi_1.loginSchema.validate({ email, passWord });
        return result;
    }
    catch (error) {
        throw new Error("invalid input" + error.message);
    }
};
exports.validateLoginInput = validateLoginInput;
