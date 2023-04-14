import { useState } from 'react'
import ControllItem from './ControllItem'

import { CiTempHigh } from 'react-icons/ci';
import { FaRegLightbulb } from 'react-icons/fa';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { CgDropOpacity } from 'react-icons/cg';
import { GiPlantsAndAnimals } from 'react-icons/gi';

const Index = () => {
    const [isSetting, setIsSetting] = useState(false)
    const data = [
        {
            title: 'Temperature',
            icon: <CiTempHigh />,
            minValue: 0,
            maxValue: 100,
            curValue: 60,
            calculationUnit: '℃',
            isOpen: true
        },
        {
            title: 'Light',
            icon: <FaRegLightbulb />,
            minValue: 0,
            maxValue: 100,
            curValue: 50,
            calculationUnit: 'Lux',
            isOpen: true
        },
        {
            title: 'Humidity',
            icon: <MdOutlineWaterDrop />,
            minValue: 0,
            maxValue: 100,
            curValue: 30,
            calculationUnit: '%',
            isOpen: true
        },
        {
            title: 'PH concentration',
            icon: <CgDropOpacity />,
            minValue: 0,
            maxValue: 100,
            curValue: 30,
            calculationUnit: '%',
            isOpen: true
        },
        {
            title: 'Oxygen concentration',
            icon: <GiPlantsAndAnimals />,
            minValue: 0,
            maxValue: 100,
            curValue: 30,
            calculationUnit: '%',
            isOpen: true
        }
    ]
    return (
        <>
            <div className="text-end mb-4">
                <button
                    onClick={() => setIsSetting((prev) => (!prev))}
                    className={`inline-block rounded px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ${isSetting ? "bg-green-600" : "bg-gray-800"}`}
                >
                    {isSetting ? 'Update' : 'Setting'}
                </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {data.map((item, index) => (
                    <ControllItem isSetting={isSetting} data={item} key={index} />
                ))}
            </div>
        </>
    )
}

export default Index