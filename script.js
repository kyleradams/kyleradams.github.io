function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runPipeline() {
  const el = document.getElementById("pipeline");
  el.innerHTML = "";

  const steps = [
    "Extracting data from API...",
    "Loading into Kafka...",
    "Processing stream...",
    "Writing to Snowflake...",
    "Running quality checks...",
    "Pipeline complete"
  ];

  for (let step of steps) {
    el.innerHTML += step + "<br/>";
    await sleep(800);
  }
}
