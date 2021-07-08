// styles import
import "../styles/main.scss";

// js import
import GetInfo from "./classes/GetStaticInfo";
import BatteryInfo from "./classes/BatteryInfo";
import NetworkStatus from "./classes/NetworkStatusInfo";
import CursorMoveCoordinates from "./classes/CursorMoveCoordinatesInfo";
import TotalTime from "./classes/TotalTimeSpentInfo";

//variables ralated with DOM
const infoContainer = document.querySelector("#infoContainer");

//objects
const info = new GetInfo(infoContainer);
const batteryInfo = new BatteryInfo(infoContainer);
const networkStatus = new NetworkStatus(infoContainer);
const cursorMoveCoordinates = new CursorMoveCoordinates(infoContainer);
const totalTime = new TotalTime(infoContainer);
