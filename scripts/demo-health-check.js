const BACKEND_URL = "http://127.0.0.1:8000";

async function getJson(path) {
  const response = await fetch(`${BACKEND_URL}${path}`);

  if (!response.ok) {
    throw new Error(`${path} failed with status ${response.status}`);
  }

  return response.json();
}

function pass(label, detail = "") {
  console.log(`✅ ${label}${detail ? ` — ${detail}` : ""}`);
}

function fail(label, detail = "") {
  console.log(`❌ ${label}${detail ? ` — ${detail}` : ""}`);
}

async function main() {
  console.log("\nPruvaLabs demo sağlık kontrolü\n");

  let hasFailure = false;

  try {
    const health = await getJson("/health");
    if (health?.status === "ok" || health?.success !== false) {
      pass("Backend sağlığı", health?.version ? `version ${health.version}` : "");
    } else {
      hasFailure = true;
      fail("Backend sağlığı", JSON.stringify(health));
    }
  } catch (error) {
    hasFailure = true;
    fail("Backend sağlığı", error.message);
  }

  try {
    const readiness = await getJson("/pilot-readiness");
    if (readiness?.pilot_ready) {
      pass("Pilot hazırlığı", "ready");
    } else {
      hasFailure = true;
      fail("Pilot hazırlığı", JSON.stringify(readiness));
    }
  } catch (error) {
    hasFailure = true;
    fail("Pilot hazırlığı", error.message);
  }

  try {
    const checklist = await getJson("/pilot-checklist");
    if (checklist?.pilot_ready) {
      const doneCount =
        checklist?.done ??
        checklist?.done_count ??
        checklist?.summary?.done ??
        checklist?.data?.done ??
        checklist?.data?.done_count ??
        "unknown";

      pass("Pilot kontrol listesi", `done ${doneCount}`);
    } else {
      hasFailure = true;
      fail("Pilot kontrol listesi", JSON.stringify(checklist));
    }
  } catch (error) {
    hasFailure = true;
    fail("Pilot kontrol listesi", error.message);
  }

  try {
    const brands = await getJson("/brands");
    const mavi = brands?.data?.find(
      (brand) => brand.brand_file === "mavi_kose_bistro.json",
    );

    if (mavi?.reservation_notifications) {
      pass("Pilot marka", `${mavi.brand_name} bildirimleri aktif`);
    } else {
      hasFailure = true;
      fail("Pilot marka", JSON.stringify(mavi || brands));
    }
  } catch (error) {
    hasFailure = true;
    fail("Pilot marka", error.message);
  }

  try {
    const reservations = await getJson("/reservations?limit=1");
    const latest = reservations?.data?.[0];

    if (latest?.id && latest?.notification_status === "sent") {
      pass(
        "Son rezervasyon",
        `#${latest.id} ${latest.customer_name || "customer"} / ${latest.status}`,
      );
    } else {
      hasFailure = true;
      fail("Son rezervasyon", JSON.stringify(latest || reservations));
    }
  } catch (error) {
    hasFailure = true;
    fail("Son rezervasyon", error.message);
  }

  try {
    const logs = await getJson("/notification-logs?limit=1");
    const latestLog = logs?.data?.[0];

    if (latestLog?.id && latestLog?.status === "sent") {
      pass(
        "Son işletme bildirimi",
        `#${latestLog.id} to ${latestLog.recipient}`,
      );
    } else {
      hasFailure = true;
      fail("Son işletme bildirimi", JSON.stringify(latestLog || logs));
    }
  } catch (error) {
    hasFailure = true;
    fail("Son işletme bildirimi", error.message);
  }

  console.log("");

  if (hasFailure) {
    console.log("Demo sağlık kontrolü başarısız.");
    process.exit(1);
  }

  console.log("Demo sağlık kontrolü başarılı. Pilot demo hazır.");
}

main();
