 let traffic = "green";

 let message = "";

 switch(traffic){

    case "red":
        message = "Immediately Stop!";
        break;

    case "yellow":
        message = "Prepare to stop.";
    case "green":
        message = "Proceed or continue Driving.";
        break;
    default:
        message = "Invalid traffic light color.";
 }

 console.log(message);