import { ProteinFoldingPanel } from "./ProteinFoldingPanel";
import { Section } from "../common/Section";
import { headers } from "next/headers";


export const ProteinFoldingSection = async () => {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = host?.startsWith("localhost") ? "http" : "https";

  const tasks = await fetch(`${protocol}://${host}/api/tasks`).then((res) => res.json());
  return (
    <Section title="Proteins Being Folded Right Now">
      <ProteinFoldingPanel tasks={tasks} />
    </Section>
  );
};
