import { useState } from "react";
import "./Desktop.scss";
import icons from "./icons";
import users from "../lib/users/users.json";

function Desktop() {
    const [activeFile, setActiveFile] = useState(null);
    const [fileAction, setFileAction] = useState(null);
    const [fileEdit, setFileEdit] = useState(false);

    let fileList = [];
    // Dev!
    const activeUser = users.root;
    const userFiles = activeUser.desktop.files;

    function configureFileList(filesArray) {
        // Reset file list on render.
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
                    <button
                        className="file"
                        onClick={fileExecution}
                        onContextMenu={fileExecution}
                    >
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
                        // text on blur. Also change data in json file
                        // aswell on change "submit".
                        onClick={(e) => console.log(e.currentTarget.innerHTML)}
                    >
                        {fullFileName}
                    </span>
                </>
            );

            fileList.push(fileElement);
        });
    }

    function FileContentModal({ fileData }) {
        return (
            <div className="fileModal">
                <div
                    className="fileModal-bar"
                    onClick={() => {
                        setFileAction((prev) => (prev = null));
                        setFileEdit((prev) => (prev = false));
                        setActiveFile((prev) => (prev = null));
                    }}
                >
                    X
                </div>
                <div
                    className={
                        fileEdit
                            ? "fileModal-content fileModal-content-edit"
                            : "fileModal-content fileModal-content-preview"
                    }
                >
                    {fileData !== null ? (
                        <>
                            {fileEdit ? (
                                <>
                                    <label>
                                        {`File name: ${fileData.fileName}`}
                                        <input />
                                    </label>
                                    <label>
                                        {`File type: ${fileData.fileType}`}
                                        <input />
                                    </label>
                                    <label>
                                        File content:
                                        <textarea
                                            defaultValue={fileData.fileContent}
                                        />
                                    </label>
                                    {/* TODO: Add file saving function */}
                                    <button>Save</button>
                                </>
                            ) : (
                                <></>
                            )}
                            {fileAction === "preview" ? (
                                <>
                                    <h2>
                                        {fileData.fileType === "file" ? (
                                            <>{fileData.fileName}</>
                                        ) : (
                                            <>
                                                {fileData.fileName}.
                                                {fileData.fileType}
                                            </>
                                        )}
                                    </h2>
                                    <p>{fileData.fileContent}</p>
                                </>
                            ) : (
                                <></>
                            )}
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        );
    }

    function fileExecution(e) {
        e.preventDefault();

        const buttonElem = e.currentTarget;
        const buttonDiv = buttonElem.firstChild;
        const fileData = {
            fileName: buttonDiv.dataset.filename,
            fileType: buttonDiv.dataset.filetype,
            fileContent: buttonDiv.dataset.filecontent,
        };

        // Reset previous file modes
        setActiveFile((prev) => (prev = null));
        setFileEdit((prev) => (prev = false));
        setFileAction((prev) => (prev = null));

        // Left click
        if (e.button === 0) {
            setActiveFile((prev) => (prev = fileData));
            setFileAction((prev) => (prev = "preview"));
        }

        // Right click
        if (e.button === 2) {
            setActiveFile((prev) => (prev = fileData));
            setFileEdit((prev) => (prev = true));
        }
    }

    function DesktopFiles() {
        configureFileList(userFiles);

        const renderFiles = fileList.map((fileElement, index) => (
            // Key is file name, can not have identical file names
            // Note: Or cannot have identical name and file extension,
            // this is TODO.
            <div className="file-container" key={index}>
                {fileElement}
            </div>
        ));
        return <>{renderFiles}</>;
    }

    return (
        <div id="root">
            <div id="desktop">
                <DesktopFiles />
            </div>
            {fileEdit || fileAction !== null ? (
                <FileContentModal fileData={activeFile} />
            ) : (
                <></>
            )}
        </div>
    );
}

export default Desktop;
