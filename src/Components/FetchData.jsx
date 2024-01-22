// import { resolveConfig } from "vite";

export default async function fetchData(from, to) {
  try {
    const response = await fetch(from);
    if (!response.ok) {
      throw new Error("Invalid response! Check Network connection");
    }

    const data = await response.json();
    to(data);
  } catch (error) {
    console.error("Error", error);
  }
}
