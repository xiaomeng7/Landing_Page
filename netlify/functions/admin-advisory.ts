/**
 * GET /api/admin/advisory-applications
 * List BHT advisory applications (admin only)
 * Requires header: X-Admin-Key: <ADMIN_SECRET_KEY>
 */

import type { Handler, HandlerEvent } from "@netlify/functions";
import { neon } from "@neondatabase/serverless";

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const adminKey = process.env.ADMIN_SECRET_KEY;
  const providedKey = event.headers["x-admin-key"] || event.queryStringParameters?.key;

  if (!adminKey || !providedKey || providedKey !== adminKey) {
    return { statusCode: 401, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: "Unauthorized" }) };
  }

  const dbUrl = process.env.NEON_DATABASE_URL;
  if (!dbUrl || !dbUrl.startsWith("postgres")) {
    return { statusCode: 503, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: "Service unavailable" }) };
  }

  try {
    const sql = neon(dbUrl);
    const rows = await sql`
      SELECT id, created_at, name, mobile, email, suburb, property_type, solar_battery_status,
             bill_range, contact_time, notes, status, utm_source, utm_medium, utm_campaign, page_url
      FROM advisory_applications
      ORDER BY created_at DESC
    `;
    return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ applications: rows }) };
  } catch (err) {
    console.error("admin-advisory error:", err);
    return { statusCode: 500, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: "Failed to fetch applications" }) };
  }
};
