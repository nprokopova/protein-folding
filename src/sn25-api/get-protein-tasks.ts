import { ProteinTask } from "@/types/protein.types";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
function getRandomMinerCount() {
  return getRandomInt(50);
}

export async function getProteinTasks(): Promise<ProteinTask[]> {
  return Promise.resolve([
    {
      id: 1,
      name: "Cellular tumor antigen p53",
      minerCount: getRandomMinerCount(),
      description:
        "Acts as a tumor suppressor in many tumor types; induces growth arrest or apoptosis depending on the physiological circumstances and cell type",
      imageSrc: "protein_gifs/protein-1.gif",
      imageAlt: "Protein 1",
      rscbLink: "https://www.rcsb.org",
    },
    {
      id: 2,
      name: "Protein kinase domain-containing",
      minerCount: getRandomMinerCount(),
      description:
        "Contains phosphorylation sites with serine/threonine kinase characteristics, which are activated only when conformation changes occur in autoinhibitory junction and calcium-binding domain after calcium-binding (Hardie et al., 1999; Wernimont et al., 2010).",
      imageSrc: "/protein_gifs/protein-2.gif",
      imageAlt: "Protein 2",
      rscbLink: "https://www.rcsb.org",
    },
    {
      id: 3,
      name: "At1g58602",
      minerCount: getRandomMinerCount(),
      description:
        "Plays a crucial role in the regulation of the cell cycle and thus functions as a tumor suppressor that is involved in preventing cancer.",
      imageSrc: "/protein_gifs/protein-1.gif",
      imageAlt: "Protein 3",
      rscbLink: "https://www.rcsb.org",
    },
    {
      id: 4,
      name: "Probable disease resistance",
      minerCount: getRandomMinerCount(),
      description:
        "Functions as a transcription factor that regulates the expression of genes involved in cell differentiation, proliferation, and apoptosis.",
      imageSrc: "/protein_gifs/protein-2.gif",
      imageAlt: "Protein 4",
      rscbLink: "https://www.rcsb.org",
    },
    {
      id: 5,
      name: "Striatin-interacting",
      minerCount: getRandomMinerCount(),
      description:
        "Binds to DNA and acts as a transcriptional activator or repressor, depending on the cellular context and the presence of co-factors.",
      imageSrc: "/protein_gifs/protein-1.gif",
      imageAlt: "Protein 5",
      rscbLink: "https://www.rcsb.org",
    },
    {
      id: 6,
      name: "Free fatty acid receptor 2",
      minerCount: getRandomMinerCount(),
      description:
        "Involved in the signal transduction pathways that mediate cellular responses to growth factors, cytokines, and other extracellular signals.",
      imageSrc: "/protein_gifs/protein-2.gif",
      imageAlt: "Protein 6",
      rscbLink: "https://www.rcsb.org",
    },
    {
      id: 7,
      name: "UPF0410 protein YmgE",
      minerCount: getRandomMinerCount(),
      description:
        "Acts as a molecular chaperone, assisting in the proper folding of nascent polypeptides and the refolding of misfolded proteins.",
      imageSrc: "/protein_gifs/protein-1.gif",
      imageAlt: "Protein 7",
      rscbLink: "https://www.rcsb.org",
    },
    {
      id: 8,
      name: "Protein CbrA",
      minerCount: getRandomMinerCount(),
      description:
        "Participates in the ubiquitin-proteasome pathway, targeting specific proteins for degradation and thus regulating protein turnover.",
      imageSrc: "/protein_gifs/protein-2.gif",
      imageAlt: "Protein 8",
      rscbLink: "https://www.rcsb.org",
    },
    {
      id: 9,
      name: "Putative oxidoreductase AegA",
      minerCount: getRandomMinerCount(),
      description:
        "Functions as an enzyme that catalyzes the transfer of phosphate groups from ATP to specific substrates, playing a key role in cellular signaling.",
      imageSrc: "/protein_gifs/protein-1.gif",
      imageAlt: "Protein 9",
      rscbLink: "https://www.rcsb.org",
    },
    {
      id: 10,
      name: "UPF0167 protein CbrC",
      minerCount: getRandomMinerCount(),
      description:
        "Interacts with other proteins to form multi-protein complexes that are essential for various cellular processes, including DNA replication, repair, and transcription.",
      imageSrc: "/protein_gifs/protein-2.gif",
      imageAlt: "Protein 10",
      rscbLink: "https://www.rcsb.org",
    },
    {
      id: 11,
      name: "Inner membrane protein",
      minerCount: getRandomMinerCount(),
      description:
        "Serves as a structural component of the cytoskeleton, providing mechanical support and facilitating cell shape changes and motility.",
      imageSrc: "/protein_gifs/protein-1.gif",
      imageAlt: "Protein 11",
      rscbLink: "https://www.rcsb.org",
    },
    {
      id: 12,
      name: "Cell death peptidase",
      minerCount: getRandomMinerCount(),
      description:
        "Involved in the transport of molecules across cellular membranes, functioning as a channel, carrier, or pump to maintain cellular homeostasis.",
      imageSrc: "/protein_gifs/protein-2.gif",
      imageAlt: "Protein 12",
      rscbLink: "https://www.rcsb.org",
    },
    {
      id: 13,
      name: "HTH-type transcriptional",
      minerCount: getRandomMinerCount(),
      description:
        "Functions as a transcription factor that regulates gene expression.",
      imageSrc: "/protein_gifs/protein-1.gif",
      imageAlt: "Protein 13",
      rscbLink: "https://www.rcsb.org",
    },
    {
      id: 14,
      name: "DNA-binding protein",
      minerCount: getRandomMinerCount(),
      description:
        "Acts as a transcription factor that regulates the expression of genes involved in cell differentiation, proliferation, and apoptosis.",
      imageSrc: "/protein_gifs/protein-2.gif",
      imageAlt: "Protein 14",
      rscbLink: "https://www.rcsb.org",
    },
  ]);
}
