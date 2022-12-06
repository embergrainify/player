import { useEffect, useState } from "react";

export default function mediaDevices() {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        navigator.mediaDevices.enumerateDevices()
        .then((devices) => {
          devices.forEach((device) => {
            console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
          });
        })
        .catch((err) => {
          console.error(`${err.name}: ${err.message}`);
        });
    }, []);
    const test1 = () => {

        // navigator.mediaDevices.enumerateDevices()
        // .then((devices) => {
        //   devices.forEach((device) => {
        //     console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
        //   });
        // })
        // .catch((err) => {
        //   console.error(`${err.name}: ${err.message}`);
        // });

    }
    test1();
    return (
        <>
            {
                devices.forEach(device => `${device.kind}: ${device.label} id = ${device.deviceId}`)
            }
            
        </>
    );
}