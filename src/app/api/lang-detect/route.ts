
import {  NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.countryip.com/api/ip-info?level=basic", {
      headers: {
        apikey: "ae4b0a414bdcc8b7b0be3a998458bdf76375df32e8502beb91a4ab3b9ca51896",
      },
    });

    if (!res.ok) {
      // throw new Error(`API returned status ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data.data);
  } catch (error) {
    console.error("Error fetching language data:", error);
    return NextResponse.json({ error: "Failed to fetch language data" }, { status: 500 });
  }
}