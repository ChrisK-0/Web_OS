import { useState } from "react";
import "./Desktop.scss";
import icons from "./icons";
import users from "../lib/users/users.json";
import FileContentModal from "./FileContentModal";

function Desktop() {
    const [showModal, setShowModal] = useState(false);
    const [activeFile, setActiveFile] = useState("none");

    let fileList = [];
    const userFiles = users.root.desktop.files;

    function configureFileList(filesArray) {
        // Reset file list
        fileList = [];

        filesArray.forEach((details) => {
            let customIconPath = "none";
            let fileIcon = icons.error;
            let fullFileName = details.name + "." + details.type;

            if (details.type === "file") {
                fullFileName = details.name;
            }

            // Need to figure out what to do with custom icons.
            // if (details.customIcon === true) {
            //     customIconPath = "./src/components/style/icons/error_icon.png";
            //     // customIconPath = details.customIconPath;
            // } else
            if (details.type === "txt") {
                // customIconPath = "/src/components/style/icons/text_icon.png";
                fileIcon = icons.text;
            } else if (details.type === "exe") {
                // customIconPath = "/src/components/style/icons/exe_icon.png";
                fileIcon = icons.executable;
            } else if (details.type === "file") {
                // customIconPath = "/src/components/style/icons/file_icon.png";
                fileIcon = icons.file;
            } else {
                fileIcon = icons.error;
            }

            let fileElement = (
                <>
                    <button className="file" onClick={fileExecute}>
                        <img
                            data-filetype={details.type}
                            data-filename={details.name}
                            data-filecontent={details.fileContent}
                            className="icon"
                            alt="file"
                            src={details.customIcon ? customIconPath : fileIcon}
                        />
                    </button>
                    <span
                        className="file-name"
                        // TODO: Finish UI for re-naming files. Span HTML on click
                        // should turn into an input on focus, and back to
                        // text on blur. Also change data in json file aswell.
                        onClick={(e) => console.log(e.currentTarget.innerHTML)}
                    >
                        {fullFileName}
                    </span>
                    {/* <FileContentModal /> */}
                </>
            );

            fileList.push(fileElement);
        });
    }

    // function fileInput() {
    //     return <input />;
    // }

    function fileExecute(e) {
        const buttonElem = e.currentTarget;
        // const buttonDiv = buttonElem.querySelector("div");
        const buttonDiv = buttonElem.firstChild;
        const fileData = {
            fileName: buttonDiv.dataset.filename,
            fileType: buttonDiv.dataset.filetype,
            fileContent: buttonDiv.dataset.filecontent,
        };

        // console.log(fileContent);
        // fileContentModal(fileData);

        // console.log(buttonDiv.dataset.filename);
        // console.log(buttonDiv.dataset.filetype);
        // console.log(buttonDiv.dataset.filecontent);
    }

    function DesktopFiles() {
        configureFileList(userFiles);

        const renderFiles = fileList.map((fileElement, index) => (
            // Key is file name, can not have identical file names
            // Note: Or cannot have identical name and file extension. This is TODO.
            <div className="file-container" key={index}>
                {fileElement}
            </div>
        ));
        return <>{renderFiles}</>;
    }

    return (
        <>
            <div id="root">
                <div id="desktop">
                    <DesktopFiles />
                </div>
                <FileContentModal
                    style={
                        showModal
                            ? { display: "visible" }
                            : { display: "hidden" }
                    }
                    fileData={activeFile}
                />
            </div>
        </>
    );
}

export default Desktop;
