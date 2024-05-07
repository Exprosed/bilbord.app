import React from "react";

interface ClickerProps {}

let widget: any;

window.addEventListener("supertab.event", (event: any) => {
   switch (event.detail.type) {
      case "ready":
         widget = new event.detail.Widget({
            clientId: "client.c84095e4-746e-4dd7-89df-afec1d8ff32d",
            merchantName: "Bilbord.app"
         });
      break;
      case "back_to_caller":
         if (event.detail.accessStatus == 'access_granted') {
          console.log("Access granted");
         } else {
          console.log("Buyflow exited");
         }
      break;
   }
});

const Clicker: React.FC<ClickerProps> = () => {
  const alertConsole = () => {
    console.log("Clicked!");
    widget.showPaywall();
  };

  return <button onClick={alertConsole}>Hello there!</button>;
};

export default Clicker;
