// const Taskbar = document.getElementById("taskbar");

// // Load taskbar icons etc...
// // const loadTaskbarIcons = () => {...}

// let TaskbarElements = [
//     {
//         maxElements: 5,
//     },
// ];
// // const TaskbarMaxElements = 5;

// const TaskbarDefaultElements = {
//     terminal: {
//         elementIdentifier: "terminal",
//         elementTitle: "Terminal",
//         elementSource: "/src/app/icons/terminal-icon.png",
//     },
//     explorer: {
//         elementIdentifier: "explorer",
//         elementTitle: "Explorer",
//         elementSource: "/src/app/icons/folder-icon.png",
//     },
// };

// // TaskbarElements[0].elementsForTaskbar += JSON.stringify(TaskbarDefaultElements);

// const renderTaskbarElements = (elementsArray) => {
//     // If elements array should contain more elements than max,
//     // don't render

//     // if (TaskbarElements.lenght > TaskbarElements[0].maxElements || TaskbarElements.lenght < 1) {
//     //     // Unload taskbar of any elements before rendering
//     //     Taskbar.innerHTML = ``;
//     // }

//     // // If TaskbarElements array lenght is between 1 and max allowed
//     // if (
//     //     TaskbarElements.lenght > 0 &&
//     //     TaskbarElements.lenght <= TaskbarElements[0].maxElements
//     // ) {
//     //     // Get taskbar elements
//     //     // ...

//     //     // This some wierd math
//     //     const amountOfElementsToRender =
//     //         TaskbarElements[0].maxElements - (TaskbarElements[0].maxElements - TaskbarElements.lenght);

//     //     for (
//     //         let elementIndex = 1;
//     //         elementIndex < amountOfElementsToRender;
//     //         elementIndex++
//     //     ) {
//     //         let elementIdentifier;
//     //         let elementTitle;
//     //         let elementSource;

//     //         TaskbarElements.forEach(taskbarApp => {
//     //             taskbarApp.elementIdentifier = elementIdentifier;
//     //             taskbarApp.elementTitle = elementIdentifier;
//     //             taskbarApp.elementSource = elementIdentifier;
//     //         })

//     //         Taskbar.innerHTML += `
//     //         <div class="taskbar-app">
//     //             <button type="button" class="taskbar-app" >
//     //                 <img class="taskbar-app-icon"
//     //                 id="${elementIdentifier}"
//     //                 title="${elementTitle}"
//     //                 src="${elementSource}" />
//     //             </button>
//     //         </div>
//     //     `;
//     //     }
//     // }
//     const amountOfElementsToRender =
//         TaskbarElements[0].maxElements -
//         (TaskbarElements[0].maxElements - TaskbarElements.lenght);

//     for (
//         let elementIndex = 1;
//         elementIndex < amountOfElementsToRender;
//         elementIndex++
//     ) {
//         let elementIdentifier;
//         let elementTitle;
//         let elementSource;

//         TaskbarElements.forEach((taskbarApp) => {
//             taskbarApp.elementIdentifier = elementIdentifier;
//             taskbarApp.elementTitle = elementIdentifier;
//             taskbarApp.elementSource = elementIdentifier;
//         });

//         Taskbar.innerHTML += `
//             <div class="taskbar-app">
//                 <button type="button" class="taskbar-app" >
//                     <img class="taskbar-app-icon"
//                     id="${elementIdentifier}"
//                     title="${elementTitle}"
//                     src="${elementSource}" />
//                 </button>
//             </div>
//         `;
//     }
// };

import "./Taskbar.scss";
import icons from "./icons";

function Taskbar() {
    return (
        <div id="taskbar">
            <div className="taskbar-app">
                <button type="button" className="taskbar-app">
                    <img
                        id="Terminal"
                        className="taskbar-app-icon"
                        title="Terminal"
                        alt="Terminal"
                        src={icons.terminal}
                    />
                </button>
            </div>

            <div className="taskbar-app">
                <button type="button" className="taskbar-app">
                    <img
                        id="Explorer"
                        className="taskbar-app-icon"
                        title="Explorer"
                        alt="Explorer"
                        src={icons.folder}
                    />
                </button>
            </div>
        </div>
    );
}

export default Taskbar;
