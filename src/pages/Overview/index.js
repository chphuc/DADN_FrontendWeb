import { useState, useEffect } from 'react'
import DataDevice from "./DataDevice"
import { CiTempHigh } from 'react-icons/ci';
import { FaRegLightbulb } from 'react-icons/fa';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { CgDropOpacity } from 'react-icons/cg';
import { GiPlantsAndAnimals } from 'react-icons/gi';
import Chart from './Chart.js';
import axios from '../../axios'

const Index = () => {
    const devices = [
        {
            title: 'Temperature',
            value: 27,
            calculationUnit: "℃",
            icon: <CiTempHigh />,
            data: {
                labels: ['00:00', '00:01', '00:02', '00:03', '00:04', '00:05'],
                datasets: [
                    {
                        label: 'Minute Temperatures',
                        data: [24, 28, 22, 23, 25, 27],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        tension: 0.1
                    }
                ],
            },
        },
        {
            title: 'Light',
            value: 150,
            calculationUnit: "Lux",
            icon: <FaRegLightbulb />,
            data: {
                labels: ['00:00', '00:01', '00:02', '00:03', '00:04', '00:05'],
                datasets: [
                    {
                        label: 'Minute Light',
                        data: [140, 147, 143, 140, 146, 150],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        tension: 0.1
                    }
                ],
            }
        },
        {
            title: 'Humidity',
            value: 44,
            calculationUnit: "%",
            icon: <MdOutlineWaterDrop />,
            data: {
                labels: ['00:00', '00:01', '00:02', '00:03', '00:04', '00:05'],
                datasets: [
                    {
                        label: 'Minute Humidity',
                        data: [40, 36, 35, 38, 41, 44],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        tension: 0.1
                    }
                ],
            }
        },
        {
            title: 'PH concentration',
            value: 44,
            calculationUnit: "%",
            icon: <CgDropOpacity />,
            data: {
                labels: ['00:00', '00:01', '00:02', '00:03', '00:04', '00:05'],
                datasets: [
                    {
                        label: 'Minute PH concentratio',
                        data: [42, 43, 48, 45, 44, 44],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        tension: 0.1
                    }
                ],
            }
        },
        {
            title: 'Oxygen concentration',
            value: 70,
            calculationUnit: "%",
            icon: <GiPlantsAndAnimals />,
            data: {
                labels: ['00:00', '00:01', '00:02', '00:03', '00:04', '00:05'],
                datasets: [
                    {
                        label: 'Minute Oxygen concentration',
                        data: [65, 66, 62, 66, 68, 70],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        tension: 0.1
                    }
                ],
            }
        },
    ]

    const [typeChart, setTypeChart] = useState(0)
    const [dataChart, setDataChart] = useState(devices[0].data)
    const handleChangeTypeChart = () => {
        setTypeChart((prev) => (prev == 0 ? 1 : 0))
    }
    const handleChangeDataChart = (index) => {
        setDataChart(devices[index].data)
    }
    useEffect(() => {
        axios.get('/threshold')
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <div className="overflow-y-scroll no-scrollbar" style={{ maxHeight: 'calc(100vh - 50px)' }}>
                <div className="grid grid-cols-3 gap-4">
                    {
                        devices.map((item, index) => (
                            <div className="cursor-pointer" key={index} onClick={() => handleChangeDataChart(index)}>
                                <DataDevice title={item.title} value={`${item.value} ${item.calculationUnit}`} icon={item.icon} />
                            </div>
                        ))
                    }
                </div>
                <div className="bg-white mt-4 p-4">
                    <Chart dataChart={dataChart} typeChart={typeChart} handleChangeTypeChart={handleChangeTypeChart} />
                </div>
            </div>
        </>
    )
}

export default Index