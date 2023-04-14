import { useState } from 'react'
import NotificationItem from "./NotificationItem"
const Index = () => {
    const infoData = [
        {
            time: "18:05",
            title: "The system works well",
            content: "Current data is suitable for ideal conditions.",
            type: 0
        },
        {
            time: "18:00",
            title: "Temperature Warning",
            content: "The current temperature is 35 and higher than the ideal condition.",
            type: 1
        },
        {
            time: "17:55",
            title: "Temperature Warning",
            content: "The current temperature is 35 and higher than the ideal condition.",
            type: 1
        },
        {
            time: "18:05",
            title: "The system works well",
            content: "Current data is suitable for ideal conditions.",
            type: 0
        },
        {
            time: "18:05",
            title: "The system works well",
            content: "Current data is suitable for ideal conditions.",
            type: 0
        },
        {
            time: "18:05",
            title: "The system works well",
            content: "Current data is suitable for ideal conditions.",
            type: 0
        },
        {
            time: "18:05",
            title: "The system works well",
            content: "Current data is suitable for ideal conditions.",
            type: 0
        },
        {
            time: "18:05",
            title: "The system works well",
            content: "Current data is suitable for ideal conditions.",
            type: 0
        },
        {
            time: "18:05",
            title: "The system works well",
            content: "Current data is suitable for ideal conditions.",
            type: 0
        },
        {
            time: "18:05",
            title: "The system works well",
            content: "Current data is suitable for ideal conditions.",
            type: 0
        },
    ]
    const constraintData = [
        {
            title: 'Temperature',
            min: '30',
            max: '38'
        },
        {
            title: 'Light',
            min: '130',
            max: '170'
        },
        {
            title: 'Humidity',
            min: '40',
            max: '60'
        },
        {
            title: 'PH concentration',
            min: '40',
            max: '60'
        },
        {
            title: 'Oxygen concentration',
            min: '60',
            max: '80'
        },
    ]
    const filterDateData = [
        {
            title: '7/3/2023'
        },
        {
            title: '8/3/2023'
        },
        {
            title: '9/3/2023'
        },
    ]
    const filterTimeData = [
        {
            title: '6h-12h'
        },
        {
            title: '12h-18h'
        },
        {
            title: '18h-24h'
        },
    ]
    return (
        <>
            <div className="text-end mb-4">
                <button className="inline-block rounded px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] bg-gray-800">Setting</button>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 p-4 shadow-lg bg-white rounded-md">
                    <p className="text-center bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Constraint Data</p>
                    <div className="my-2">
                        {
                            constraintData.map((item, index) => (
                                <div className="flex items-center justify-between">
                                    <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">{item.title}</span>
                                    <div className="flex items-center">
                                        <input type="text" disabled value={item.min} className="block w-10 p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                                        <span className="mx-2">-</span>
                                        <input type="text" disabled value={item.max} className="block w-10 p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <p className="text-center bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Filter Data</p>
                    <span className="text-center bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Date</span>
                    <div className="my-2">
                        {
                            filterDateData.map((item, index) => (
                                <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded cursor-pointer border border-gray-500 hover:bg-gray-300">{item.title}</span>
                            ))
                        }
                    </div>
                    <span className="text-center bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Time</span>
                    <div className="my-2">
                        {
                            filterTimeData.map((item, index) => (
                                <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded cursor-pointer border border-gray-500 hover:bg-gray-300">{item.title}</span>
                            ))
                        }
                    </div>
                </div>
                <div className="col-span-9 p-4 overflow-y-scroll no-scrollbar shadow-lg bg-white rounded-md" style={{ maxHeight: 'calc(100vh - 100px)' }}>
                    {infoData.map((item, index) => (
                        <div key={index} className={" " + (index != 0 ? "mt-4" : "")}>
                            <NotificationItem type={item.type} time={item.time} title={item.title} content={item.content} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Index