import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const dummyData = {
      patients: [
        {
          id: "P001",
          name: "John Doe",
          age: 45,
          diagnosis: "Hypertension",
          lastVisit: "2025-03-20"
        },
        {
          id: "P002",
          name: "Jane Smith",
          age: 38,
          diagnosis: "Diabetes Type 2",
          lastVisit: "2025-03-18"
        },
        {
          id: "P003",
          name: "Alice Johnson",
          age: 50,
          diagnosis: "Asthma",
          lastVisit: "2025-03-15"
        }
      ],
      metadata: {
        createdBy: "Next.js API",
        timestamp: new Date().toISOString()
      }
    };

    const filePath = path.join(process.cwd(), "data", "output.json");
    await writeFile(filePath, JSON.stringify(dummyData, null, 2), "utf8");

    return NextResponse.json({ message: "Dummy data saved successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to write file" }, { status: 500 });
  }
}
