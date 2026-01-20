
export async function getJobs() {
  const res = await fetch("https://jsonfakery.com/jobs");
  return res.json();
}
