"use client";
import { useState } from "react";

import { ProteinTask } from "../../../types/protein.types";
import { Table } from "../common/Table";
import { Protein } from "./Protein";
import { Panel } from "../common/Panel";
import { Column } from "../common/Table";


export const ProteinFoldingPanel = ({ tasks }: { tasks: ProteinTask[] }) => {
  const [selectedTask, setSelectedTask] = useState<ProteinTask>(tasks[0]);

  const handleRowClick = (task: ProteinTask) => {
    setSelectedTask(task); 
  };

   const columns: Column<ProteinTask>[] = [
    { header: 'Protein', accessor: 'name' },
    { header: 'Pbd_id', accessor: 'id' },
    { header: 'Miners', accessor: 'minerCount' },
  ];

  return (
    <Panel>
      <div className="w-[40%]">
        <Table<ProteinTask>
          data={tasks}
          selectedRow={selectedTask}
          onRowClick={handleRowClick}
          columns={columns}
        />
      </div>
      <div className="w-[60%] rounded-2xl overflow-hidden">
        <Protein task={selectedTask} />
      </div>
    </Panel>
  );
};
