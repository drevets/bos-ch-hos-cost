import { getCostDifference, stripDollarSign } from ".";

export const procedure = [
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

describe("stripDollarSign", () => {
  test("handles empty string", () => {
    expect(stripDollarSign("")).toBe("");
  });

  test("handles normal case", () => {
    expect(stripDollarSign("$50 ")).toBe(50);
  });

  test("works on arbitrary strings", () => {
    expect(stripDollarSign("I.C.")).toBe("I.C.");
  });

  test("works on other arbitrary strings", () => {
    expect(stripDollarSign("I.C. ")).toBe("I.C. ");
  });
});

describe("getCostDifference", () => {
  test("retrieves difference between DIMin and DIMax", () => {
    expect(
      getCostDifference({
        "De-identified Minimum": "$0",
        "De-identified Maximum": "$0",
      })
    ).toBe(0);
  });

  test("supports non-0 maximum", () => {
    expect(
      getCostDifference({
        "De-identified Minimum": "$0",
        "De-identified Maximum": "$1",
      })
    ).toBe(1);
  });

  test("supports non-0 minimum and maximum", () => {
    expect(
      getCostDifference({
        "De-identified Minimum": "$1",
        "De-identified Maximum": "$2",
      })
    ).toBe(1);
  });
});
