import "./Project.css"
import { useEffect, useState } from "react";
import MagicDropZone from "react-magic-dropzone"
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import image from "../../images/maintenance.png"

const Project = () => {

return (
	<img src={image} alt="down for temporary maintenance"/>
  );
};

export default Project;

/* <div className="GuestUIContainer">
        <div className="PosterDragAndDrop">
          <h2 className="SectionHeading">Upload a Poster</h2>
          <MagicDropZone
            className="DragAndDropArea"
            accept=".jpg, .png, .jpeg"
            onDrop={fileDrop}
          >
            {filePreview === null ? (
              "Drop your poster here"
            ) : (
              <img className="PosterImg" src={filePreview} alt="User Upload" />
            )}
          </MagicDropZone>
        </div>
        <div className="PosterRatingContainer">
          <h2 className="SectionHeading">Accessibility Score</h2>
          <div style={{ width: "95%" }}>
            <BarGraph chartData={BarGraphData.build} />
            <p className="TimeToCalculate">
              {calculating
                ? `Calculating score...`
                : `Calculated in ${totalCalculationTime} seconds`}
            </p>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1000} limit={3} />*/