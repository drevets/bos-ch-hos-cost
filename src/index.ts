import Ajv from "ajv";
import { MinMaxChange, ProcedureCharge } from "./interfaces";
import { schema } from "./schemas";
const fs = require("fs");
const charges = require("../data/bch_standard_charges.json");

const ajv = new Ajv();

export const getCostDifference = (charge: MinMaxChange): number => {
  const min = stripDollarSign(charge["De-identified Minimum"]);
  const max = stripDollarSign(charge["De-identified Maximum"]);

  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Woah woah woah");
  }

  return max - min;
};

export const stripDollarSign = (str: string) => {
  if (str.startsWith("$")) {
    const [_, num] = str.trim().split("$");
    return parseInt(num);
  }
  return str;
};

const procedureInterface = (procedure: { [index: string]: any }) => {
  let iface = `interface Procedure {`;

  const keys = Object.keys(procedure);

  for (const key of keys) {
    if (typeof procedure[key] === "string") {
      iface = iface.concat(`"${key}"`, ":string;");
    } else if (typeof procedure[key] === "number") {
      iface = iface.concat(`"${key}"`, ":number;");
    } else if (Array.isArray(procedure[key])) {
      // this isn't quite right
      iface = iface.concat(`"${key}"`, ":any[];");
    } else if (typeof procedure[key] === "object") {
      iface = iface.concat(`"${key}"`, ":{[index:string]: string};");
    }
  }

  iface = iface.concat("}");

  console.log("iface", iface);

  return iface;
};

const jsonSchema = (procedure: { [index: string]: any }) => {
  let schema = `{`;

  const keys = Object.keys(procedure);

  for (const key of keys) {
    if (typeof procedure[key] === "string") {
      schema = schema.concat(`"${key}"`, ':{type: "string"},');
    } else if (typeof procedure[key] === "number") {
      schema = schema.concat(`"${key}"`, ':{type: "number"},');
    } else if (Array.isArray(procedure[key])) {
      // this isn't quite right
      schema = schema.concat(`"${key}"`, ':{type: "array"},');
    } else if (typeof procedure[key] === "object") {
      schema = schema.concat(`"${key}"`, ':{type: "object"},');
    }
  }

  schema = schema.concat("}");

  console.log("schema", schema);

  return schema;
};

const validateData = (
  schema: { [index: string]: any },
  data: { [index: string]: any }
) => {
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    console.log(validate.errors);
  }
};

const validateBCHData = async () => {
  validateData(schema, charges);
};
