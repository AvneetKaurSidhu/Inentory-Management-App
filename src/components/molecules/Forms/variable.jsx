import React, { useEffect, useState } from "react";
const Themes = () => {
    const [archiveBtn, setarchiveBtn] = useState("Archive");
    const [archiveFlag, setArchiveFlag] = useState(true);
    const [archiveCSS, setarchiveCSS] = useState("");

    const archivePage = () => {
        if (archiveFlag === true) {
          setarchiveBtn("Unarchive");
          setArchiveFlag(false);
          setarchiveCSS("archive-page");
        } else {
          setarchiveBtn("Archive");
          setArchiveFlag(true);
          setarchiveCSS("");
        }
      };
  
    return { archiveBtn, setarchiveBtn, archiveFlag, setArchiveFlag, archiveCSS, setarchiveCSS, archivePage };
  
}
export default Themes;