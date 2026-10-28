/**
 * Receives portfolio inquiries (POST) and appends them as rows to the
 * "Inquiries" sheet of the spreadsheet this script is attached to.
 * Setup steps are in README.md.
 */
const SHEET_NAME = "Inquiries";
const HEADERS = ["timestamp", "name", "email", "message"];
const MAX_LEN = { name: 100, email: 150, message: 3000 };

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000); // avoid two simultaneous submissions overwriting each other

    const p = (e && e.parameter) || {};
    const name = clean_(p.name, MAX_LEN.name);
    const email = clean_(p.email, MAX_LEN.email);
    const message = clean_(p.message, MAX_LEN.message);

    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json_({ ok: false, error: "invalid input" });
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    sheet.appendRow([new Date().toISOString(), name, email, message]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Handy for checking the deployment in a browser: open the /exec URL.
function doGet() {
  return json_({ ok: true, message: "Inquiry endpoint is live. Submit via POST." });
}

// Trim, cap the length, and defuse spreadsheet formulas (=, +, -, @ at the start).
function clean_(value, maxLen) {
  let v = String(value || "").trim().slice(0, maxLen);
  if (/^[=+\-@]/.test(v)) v = "'" + v;
  return v;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
