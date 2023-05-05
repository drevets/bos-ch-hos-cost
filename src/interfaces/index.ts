export interface ProcedureCharge {
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
  "Blue Cross HMO": { "POS LW OP": string };
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
  Optum: {
    "URN COMM IP": string;
    "URN COMM OP": string;
    "URN COMM CHD ONC OP": string;
  };
}

export interface MinMaxChange {
  "De-identified Minimum": string;
  "De-identified Maximum": string;
}
