class BatteryInfo{
    constructor(infoContainer){
        this.infoContainer = infoContainer;

        this.showBatteryInfo();
    }
    async getBatteryInfo(){
        try {
            const batteryInfo = await navigator.getBattery();
            return batteryInfo;
        } catch (err) {
            throw new Error(err);
        }
    }
    showBatteryInfo(){
        this.getBatteryInfo().then((infoBattery)=>{
            const {charging, level} = infoBattery;

            //DOM operations related with static information abou battery status
            const newInfoCharging = document.createElement("li");
            newInfoCharging.className = "basicList__element informations__info";
            this.infoContainer.appendChild(newInfoCharging);

            if(charging){
                newInfoCharging.innerHTML = "Is battery charging: Yes, it is";
            }else{
                newInfoCharging.innerHTML = "Is battery charging: No, it isn't";
            }

            //DOM operations related with dynamically changing of battery status
            infoBattery.addEventListener("chargingchange", ()=>{
                const chargingNewStatus = infoBattery.charging;
                if(chargingNewStatus){
                    newInfoCharging.innerHTML = "Is battery charging: Yes, it is";
                }else{
                    newInfoCharging.innerHTML = "Is battery charging: No, it isn't";
                }
            });

            //DOM operations related with showing level of battery
            const newInfoBatteryLevel = document.createElement("li");
            newInfoBatteryLevel.className = "basicList__element informations__info";
            this.infoContainer.appendChild(newInfoBatteryLevel);

            const batteryLevel = level*100;

            newInfoBatteryLevel.innerHTML = `Battery level: ${batteryLevel}%`;

            //DOM operations related with dynamically showing level of battery
            infoBattery.addEventListener("levelchange", ()=>{
                const batteryNewLevel = infoBattery.level*100;
                newInfoBatteryLevel.innerHTML = `Battery level: ${batteryNewLevel}%`;
            });
        });
    }   
}

export default BatteryInfo;