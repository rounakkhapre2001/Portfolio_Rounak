"use server";

export async function submitMessage(name: string, contactInfo: string, message: string) {
  try {
    const scriptURL = "https://script.google.com/macros/s/AKfycbz4fsOKmwOQ-elh7QuEEgz67iNDOsAUdosTSfbasPuPDc0onf3FEc4Mh_RfjrcHkAM8/exec"; // 🔁 paste your own URL here

    const res = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify({ name, contactInfo, message }),
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error submitting message:", error);
  }
}
