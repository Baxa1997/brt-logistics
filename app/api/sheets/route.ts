import {google} from "googleapis";

const normalizeKey = (key: string) =>
  key
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^./, (str) => str.toLowerCase());

export async function GET(req: Request) {
  const url = new URL(req.url);
  const sheetName = url.searchParams.get("sheetName") || "Drivers";
  const range = `${sheetName}!A:Z`;

  const auth = await google.auth.getClient({
    credentials: {
      type: "service_account",
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({version: "v4", auth});

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range,
    });

    const rows = response.data.values || [];

    if (rows.length === 0) {
      return new Response(JSON.stringify({data: []}), {
        status: 200,
        headers: {"Content-Type": "application/json"},
      });
    }

    const [rawHeader, ...body] = rows;
    const header = rawHeader.map(normalizeKey);

    const dataAsObjects = body.map((row) =>
      Object.fromEntries(header.map((key, i) => [key, row[i] ?? ""]))
    );

    return new Response(JSON.stringify({data: dataAsObjects}), {
      status: 200,
      headers: {"Content-Type": "application/json"},
    });
  } catch (error) {
    console.error("❌ Sheets API Error", error);
    return new Response(JSON.stringify({error: "Failed to fetch sheet data"}), {
      status: 500,
    });
  }
}

export async function POST(req: Request) {
  const {sheetName, ...data} = await req.json();

  if (!sheetName) {
    return new Response(JSON.stringify({error: "Sheet name is required"}), {
      status: 400,
    });
  }

  const auth = await google.auth.getClient({
    credentials: {
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      universe_domain: "googleapis.com",
      type: "service_account",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({version: "v4", auth});

  try {
    const values = [Object.values(data)];
    const range = `${sheetName}!A:Z`;

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values,
      },
    });

    return new Response(JSON.stringify({success: true}), {status: 200});
  } catch (error) {
    console.error("Failed to append data", error);
    return new Response(JSON.stringify({error: "Failed to add data"}), {
      status: 500,
    });
  }
}
