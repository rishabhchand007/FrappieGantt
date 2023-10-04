import { IconButton, Paper, Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { Delete } from "@material-ui/icons";
import { FrappeGantt } from "frappe-gantt-react";
import * as React from "react";
import { GlobalContext } from "../stateManagement/Contexts/GlobalStateProvider";
import "./chart.scss";
import Slider from "./CustomSlider";
import AddTask from "./Tasks/AddTask";

function Chart() {
  const globalCTX = React.useContext(GlobalContext);

  return (
    <div className="chart">
      <div className="left">
        {globalCTX.labels?.length ? (
          <div className="labels">
            {globalCTX.labels.map((x, i) => {
              return (
                <div key={x + i} className="label">
                  <span className="tiny-circle">{i}</span>
                  <span className="bold space-around capitalize">{x}</span>
                  <IconButton
                    className="bold space-around capitalize"
                    onClick={() =>
                      globalCTX.handleDeleteTask(globalCTX.tasks[i])
                    }
                  >
                    <Delete />
                  </IconButton>
                
                </div>
              );
            })}
          </div>
        ) : null}
        <AddTask
          handleAddTask={(taskObj) => globalCTX.handleAddTask(taskObj)}
        />
      </div>
      <Paper
        elevation={0}
        className="right"
        style={{ scrollbarWidth: "thin", overflow: "hidden" }}
      >
        {globalCTX.tasks?.length ? (
          <>
            <Slider />
            <FrappeGantt
              tasks={globalCTX.tasks}
              viewMode={globalCTX.mode}
              onClick={(task) => {}}
              onDateChange={globalCTX.updatePosition} //aka on drag bar
              onProgressChange={(task, progress) =>
                console.log(task, progress, "progress")
              }
              // onTasksChange={(tasks) => {
              // //
              // }}
            />
          </>
        ) : null}
      </Paper>
    </div>
  );
}

export default Chart;
