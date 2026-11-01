require("dotenv").config();

const { extractDrugs } = require("./services/drugExtractionService");

async function run() {
    const text = `
Tab Paracetamol 650 mg
1 tablet twice daily

Cap Amoxicillin 500 mg
Morning and Night
`;

    const result = await extractDrugs(text);

    console.log(result);
}

run();