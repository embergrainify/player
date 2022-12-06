import { useEffect, useState } from 'react';
import { getName } from '../libs/names';

export default function DeviceInfo() {
    const [deviceName, setDeviceName] = useState('...');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const getDeviceName = () => {
                return getName();
            }
            setDeviceName(getDeviceName());
        }
    }, []);

    return (
        <div className='flex flex-row w-full h-24 justify-around items-center'>
            <div>
                Icon
            </div>
            <div>
                <p>
                    Device Name:
                    <span className='pl-2 font-bold text-xl'>{`${deviceName}`}</span>
                </p>

            </div>

        </div>
    );
}