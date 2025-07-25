// this is a special export that tells the router this is a dynamic route
export const dynamic = "force-dynamic";
import { getProteinTasks } from "@/sn25-api/get-protein-tasks";

// this is the GET method for this route
export async function GET() {
  const tasks = await getProteinTasks();
  return Response.json(tasks);
}
