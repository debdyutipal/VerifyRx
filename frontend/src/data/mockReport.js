const mockReport = {
  analysisId: `VRX-${Math.floor(Math.random() * 100000)}`,
  generatedOn: new Date().toLocaleString(),

  riskLevel: "High Risk",
  confidence: "98.2%",
  processingTime: "1.4 sec",

  summary:
    "Four medicines were detected. One severe drug interaction was identified. Please consult your physician before taking these medicines together.",

  medicines: [
    {
      name: "Warfarin Sodium",
      dosage: "5 mg",
      frequency: "Once Daily",
      confidence: 99,
    },
    {
      name: "Aspirin",
      dosage: "81 mg",
      frequency: "Once Daily",
      confidence: 97,
    },
    {
      name: "Lisinopril",
      dosage: "10 mg",
      frequency: "Morning",
      confidence: 94,
    },
    {
      name: "Simvastatin",
      dosage: "20 mg",
      frequency: "Night",
      confidence: 92,
    },
  ],

  interactions: [
    {
      severity: "High",
      title: "Warfarin + Aspirin",
      description:
        "This combination significantly increases the risk of bleeding.",
    },
    {
      severity: "Medium",
      title: "Lisinopril + Aspirin",
      description:
        "May reduce the blood pressure lowering effect of Lisinopril.",
    },
  ],

  recommendations: [
    "Take medicines exactly as prescribed.",
    "Avoid self-medication.",
    "Report unusual bleeding immediately.",
    "Follow up with your doctor regularly.",
  ],
};

export default mockReport;