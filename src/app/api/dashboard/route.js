export async function GET() {
  return new Response(
    JSON.stringify({
      totalPopulation: { value: "2,846,118", growth: "65% since 2010" },
      completedBuildings: { value: "222,700", growth: "49.7% growth" },
      graduateRate: { value: "33.9%", description: "Among Qataris (10+)" },
      economicParticipation: { value: "78.9%", description: "jobs in private sector" },
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}