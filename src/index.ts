import Ajv from "ajv";
const fs = require("fs");
import { join } from "path";

const ajv = new Ajv();

const blueCrossHMO = {
  type: "object",
  properties: {
    "POS LW OP": { type: "string" },
  },
  additionalProperties: false,
  required: ["POS LW OP"],
};

const optum = {
  type: "object",
  additionalProperties: false,
  required: ["URN COMM IP", "URN COMM OP", "URN COMM CHD ONC OP"],
  properties: {
    "URN COMM IP": { type: "string" },
    "URN COMM OP": { type: "string" },
    "URN COMM CHD ONC OP": { type: "string" },
  },
};

const procedureSchema = {
  type: "object",
  required: [
    "LOCATION",
    "HOSPITAL CHARGE CODE",
    "CHARGE CODE DESCRIPTION",
    "REVENUE CODE",
    "CPT CODE",
    "GROSS CHARGE Effective Date 4",
    "De-identified Minimum",
    "De-identified Maximum",
    "Discounted Cash Price",
    "Blue Cross All Products IP",
    "Blue Cross HMO",
    "Blue Cross All Product FS SAT OP",
    "Blue Cross PPO LW OP",
    "Blue Cross Indem OP",
    "Harvard Pilgrim All Products IP",
    "Harvard Pilgrim LOC LW FOC OP",
    "Harvard Pilgrim LOC NAT FOC SAT OP",
    "Harvard Pilgrim NAT LW OP",
    "Harvard Pilgrim SCOAST LW OP",
    "Harvard Pilgrim SCOAST SAT OP",
    "Tufts HMO POS PPO IP",
    "Tufts CARELINK IP",
    "Tufts HMO OP",
    "Tufts POS PPO OP",
    "Tufts CARELINK OP",
    "Aetna COMM IP OP",
    "Cigna IP",
    "Cigna OP",
    "United COMM IP OP",
    "Tufts Public Plan COMM QHP IP",
    "Tufts Public Plan COMM QHP OP",
    "Allways HMO QHP IP",
    "Allways HMO QHP OP",
    "Allways PPO IP",
    "Allways PPO OP",
    "Coventry HCVM IP OP",
    "Fallon COMM IP",
    "Fallon COMM OP",
    "Humana IP OP",
    "Multiplan Clients IP OP",
    "PHCS Clients IP OP",
    "Unicare GIC IP",
    "Unicare GIC OP",
    "Beacon BMCHP (QHP) IP OP",
    "Beacon BMC (NH products) IP OP",
    "Beacon FCHP COMM IP OP",
    "Beacon GIC (Certain Products) IP OP",
    "Cigna Behavioral IP",
    "United Behavioral (Optum) IP",
    "Cigna Behavioral OP",
    "United Behavioral (Optum) OP",
    "Aetna Transplants IP",
    "Aetna Transplants OP",
    "Cigna Lifesource IP",
    "Cigna Lifesource OP",
    "Interlink Transplant IP",
    "Interlink Transplant OP",
    "LifeTrac IP",
    "LifeTrac OP",
    "Optum",
  ],
  additionalProperties: false,
  properties: {
    LOCATION: { type: "string" },
    "HOSPITAL CHARGE CODE": { type: "number" },
    "CHARGE CODE DESCRIPTION": { type: "string" },
    "REVENUE CODE": { type: "number" },
    "CPT CODE": { type: "string" },
    "GROSS CHARGE Effective Date 4": { type: "array" },
    "De-identified Minimum": { type: "string" },
    "De-identified Maximum": { type: "string" },
    "Discounted Cash Price": { type: "string" },
    "Blue Cross All Products IP": { type: "string" },
    "Blue Cross HMO": blueCrossHMO,
    "Blue Cross All Product FS SAT OP": { type: "string" },
    "Blue Cross PPO LW OP": { type: "string" },
    "Blue Cross Indem OP": { type: "string" },
    "Harvard Pilgrim All Products IP": { type: "string" },
    "Harvard Pilgrim LOC LW FOC OP": { type: "string" },
    "Harvard Pilgrim LOC NAT FOC SAT OP": { type: "string" },
    "Harvard Pilgrim NAT LW OP": { type: "string" },
    "Harvard Pilgrim SCOAST LW OP": { type: "string" },
    "Harvard Pilgrim SCOAST SAT OP": { type: "string" },
    "Tufts HMO POS PPO IP": { type: "string" },
    "Tufts CARELINK IP": { type: "string" },
    "Tufts HMO OP": { type: "string" },
    "Tufts POS PPO OP": { type: "string" },
    "Tufts CARELINK OP": { type: "string" },
    "Aetna COMM IP OP": { type: "string" },
    "Cigna IP": { type: "string" },
    "Cigna OP": { type: "string" },
    "United COMM IP OP": { type: "string" },
    "Tufts Public Plan COMM QHP IP": { type: "string" },
    "Tufts Public Plan COMM QHP OP": { type: "string" },
    "Allways HMO QHP IP": { type: "string" },
    "Allways HMO QHP OP": { type: "string" },
    "Allways PPO IP": { type: "string" },
    "Allways PPO OP": { type: "string" },
    "Coventry HCVM IP OP": { type: "string" },
    "Fallon COMM IP": { type: "string" },
    "Fallon COMM OP": { type: "string" },
    "Humana IP OP": { type: "string" },
    "Multiplan Clients IP OP": { type: "string" },
    "PHCS Clients IP OP": { type: "string" },
    "Unicare GIC IP": { type: "string" },
    "Unicare GIC OP": { type: "string" },
    "Beacon BMCHP (QHP) IP OP": { type: "string" },
    "Beacon BMC (NH products) IP OP": { type: "string" },
    "Beacon FCHP COMM IP OP": { type: "string" },
    "Beacon GIC (Certain Products) IP OP": { type: "string" },
    "Cigna Behavioral IP": { type: "string" },
    "United Behavioral (Optum) IP": { type: "string" },
    "Cigna Behavioral OP": { type: "string" },
    "United Behavioral (Optum) OP": { type: "string" },
    "Aetna Transplants IP": { type: "string" },
    "Aetna Transplants OP": { type: "string" },
    "Cigna Lifesource IP": { type: "string" },
    "Cigna Lifesource OP": { type: "string" },
    "Interlink Transplant IP": { type: "string" },
    "Interlink Transplant OP": { type: "string" },
    "LifeTrac IP": { type: "string" },
    "LifeTrac OP": { type: "string" },
    Optum: optum,
  },
};

const schema = {
  type: "array",
  items: procedureSchema,
};

interface Procedure {
  LOCATION: string;
  "HOSPITAL CHARGE CODE": number;
  "CHARGE CODE DESCRIPTION": string;
  "REVENUE CODE": number;
  "CPT CODE": string;
  "GROSS CHARGE Effective Date 4": [null, { "2022*": string }];
  "De-identified Minimum": string;
  "De-identified Maximum": string;
  "Discounted Cash Price": string;
  "Blue Cross All Products IP": string;
  "Blue Cross HMO": { [index: string]: string };
  "Blue Cross All Product FS SAT OP": string;
  "Blue Cross PPO LW OP": string;
  "Blue Cross Indem OP": string;
  "Harvard Pilgrim All Products IP": string;
  "Harvard Pilgrim LOC LW FOC OP": string;
  "Harvard Pilgrim LOC NAT FOC SAT OP": string;
  "Harvard Pilgrim NAT LW OP": string;
  "Harvard Pilgrim SCOAST LW OP": string;
  "Harvard Pilgrim SCOAST SAT OP": string;
  "Tufts HMO POS PPO IP": string;
  "Tufts CARELINK IP": string;
  "Tufts HMO OP": string;
  "Tufts POS PPO OP": string;
  "Tufts CARELINK OP": string;
  "Aetna COMM IP OP": string;
  "Cigna IP": string;
  "Cigna OP": string;
  "United COMM IP OP": string;
  "Tufts Public Plan COMM QHP IP": string;
  "Tufts Public Plan COMM QHP OP": string;
  "Allways HMO QHP IP": string;
  "Allways HMO QHP OP": string;
  "Allways PPO IP": string;
  "Allways PPO OP": string;
  "Coventry HCVM IP OP": string;
  "Fallon COMM IP": string;
  "Fallon COMM OP": string;
  "Humana IP OP": string;
  "Multiplan Clients IP OP": string;
  "PHCS Clients IP OP": string;
  "Unicare GIC IP": string;
  "Unicare GIC OP": string;
  "Beacon BMCHP (QHP) IP OP": string;
  "Beacon BMC (NH products) IP OP": string;
  "Beacon FCHP COMM IP OP": string;
  "Beacon GIC (Certain Products) IP OP": string;
  "Cigna Behavioral IP": string;
  "United Behavioral (Optum) IP": string;
  "Cigna Behavioral OP": string;
  "United Behavioral (Optum) OP": string;
  "Aetna Transplants IP": string;
  "Aetna Transplants OP": string;
  "Cigna Lifesource IP": string;
  "Cigna Lifesource OP": string;
  "Interlink Transplant IP": string;
  "Interlink Transplant OP": string;
  "LifeTrac IP": string;
  "LifeTrac OP": string;
  Optum: { [index: string]: string };
}

const procedure = [
  {
    LOCATION: "LW",
    "HOSPITAL CHARGE CODE": 1037100001,
    "CHARGE CODE DESCRIPTION":
      "IMMUN ADMIN FLU VIRUS VACC                                  ",
    "REVENUE CODE": 771,
    "CPT CODE": "G0008",
    "GROSS CHARGE Effective Date 4": [
      null,
      {
        "2022*": "$93.00",
      },
    ],
    "De-identified Minimum": "$49 ",
    "De-identified Maximum": "$88 ",
    "Discounted Cash Price": "I.C.",
    "Blue Cross All Products IP": "$58 ",
    "Blue Cross HMO": {
      "POS LW OP": "$57 ",
    },
    "Blue Cross All Product FS SAT OP": "",
    "Blue Cross PPO LW OP": "$60 ",
    "Blue Cross Indem OP": "$63 ",
    "Harvard Pilgrim All Products IP": "I.C.",
    "Harvard Pilgrim LOC LW FOC OP": "$54 ",
    "Harvard Pilgrim LOC NAT FOC SAT OP": "",
    "Harvard Pilgrim NAT LW OP": "$65 ",
    "Harvard Pilgrim SCOAST LW OP": "$49 ",
    "Harvard Pilgrim SCOAST SAT OP": "",
    "Tufts HMO POS PPO IP": "I.C.",
    "Tufts CARELINK IP": "$64 ",
    "Tufts HMO OP": "$60 ",
    "Tufts POS PPO OP": "$63 ",
    "Tufts CARELINK OP": "$72 ",
    "Aetna COMM IP OP": "$78 ",
    "Cigna IP": "$82 ",
    "Cigna OP": "$84 ",
    "United COMM IP OP": "$78 ",
    "Tufts Public Plan COMM QHP IP": "$62 ",
    "Tufts Public Plan COMM QHP OP": "$61 ",
    "Allways HMO QHP IP": "$65 ",
    "Allways HMO QHP OP": "$69 ",
    "Allways PPO IP": "$70 ",
    "Allways PPO OP": "$75 ",
    "Coventry HCVM IP OP": "$86 ",
    "Fallon COMM IP": "$71 ",
    "Fallon COMM OP": "$72 ",
    "Humana IP OP": "$84 ",
    "Multiplan Clients IP OP": "$88 ",
    "PHCS Clients IP OP": "$86 ",
    "Unicare GIC IP": "I.C.",
    "Unicare GIC OP": "",
    "Beacon BMCHP (QHP) IP OP": "$70 ",
    "Beacon BMC (NH products) IP OP": "$60 ",
    "Beacon FCHP COMM IP OP": "$70 ",
    "Beacon GIC (Certain Products) IP OP": "$70 ",
    "Cigna Behavioral IP": "$79 ",
    "United Behavioral (Optum) IP": "I.C.",
    "Cigna Behavioral OP": "",
    "United Behavioral (Optum) OP": "",
    "Aetna Transplants IP": "I.C.",
    "Aetna Transplants OP": "$78 ",
    "Cigna Lifesource IP": "I.C.",
    "Cigna Lifesource OP": "$79 ",
    "Interlink Transplant IP": "I.C.",
    "Interlink Transplant OP": "$79 ",
    "LifeTrac IP": "I.C.",
    "LifeTrac OP": "$79 ",
    Optum: {
      "URN COMM IP": "I.C.",
      "URN COMM OP": "$79 ",
      "URN COMM CHD ONC OP": "$77 ",
    },
  },
];

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
  const path = join(__dirname, "../data/little_bch_standard_charges.json");
  const charges = await fs.readFileSync(path, "utf-8");

  validateData(schema, charges);

  //   const foo = fs.readFile(path, (err: any, data: any) => {
  //     console.log("data", data);
  //     console.log("err", err);
  //   });
  // read the file
  // parse it to javascript
  // run it through my function
};

validateBCHData();
