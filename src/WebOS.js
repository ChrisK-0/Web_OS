import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import "../src/components/style/main.scss";

function WebOS() {
    return (
        <div id="computer">
            <Desktop />
            <Taskbar />
        </div>
    );
}

export default WebOS;
