import { useState, useEffect } from 'react'
import DataDevice from "./DataDevice"
import { CiTempHigh } from 'react-icons/ci';
import { FaRegLightbulb } from 'react-icons/fa';
import { MdOutlineWaterDrop } from 'react-icons/md';
import Chart from './Chart.js';
import axios from '../../axios'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"

const Index = () => {
    const navigate = useNavigate()
    const user = useSelector(state => state.user.isLogin)

    const [temperatureData, setTemperatureData] = useState({
        title: 'Temperature',
        value: 0,
        calculationUnit: "℃",
        icon: <CiTempHigh />
    })
    const [lightData, setLightData] = useState({
        title: 'Light',
        value: 0,
        calculationUnit: "Lux",
        icon: <FaRegLightbulb />
    })
    const [humidityData, setHumidityData] = useState({
        title: 'Humidity',
        value: 0,
        calculationUnit: "%",
        icon: <MdOutlineWaterDrop />
    })

    const [typeChart, setTypeChart] = useState(0)
    const [dataChart, setDataChart] = useState()
    const handleChangeTypeChart = () => {
        setTypeChart((prev) => (prev === 0 ? 1 : 0))
    }

    useEffect(() => {
        if (!user) navigate('/')
    }, [user])

    useEffect(() => {
        axios.post('/devices', { name: 'temperature' })
            .then(data => {
                setTemperatureData((prev) => {
                    setDataChart({
                        labels: data.data.label,
                        datasets: [
                            {
                                label: 'Minute Temperatures',
                                data: data.data.data,
                                fill: false,
                                borderColor: 'rgb(75, 192, 192)',
                                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                tension: 0.1
                            }
                        ],
                    })
                    return ({
                        ...prev,
                        value: data.data.value,
                        data: {
                            labels: data.data.label,
                            datasets: [
                                {
                                    label: 'Minute Temperatures',
                                    data: data.data.data,
                                    fill: false,
                                    borderColor: 'rgb(75, 192, 192)',
                                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                    tension: 0.1
                                }
                            ],
                        }
                    })
                })
            })
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        axios.post('/devices', { name: 'lux' })
            .then(data => {
                setLightData((prev) => ({
                    ...prev,
                    value: data.data.value,
                    data: {
                        labels: data.data.label,
                        datasets: [
                            {
                                label: 'Minute Lights',
                                data: data.data.data,
                                fill: false,
                                borderColor: 'rgb(75, 192, 192)',
                                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                tension: 0.1
                            }
                        ],
                    }
                }))
            })
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        axios.post('/devices', { name: 'humidity' })
            .then(data => {
                setHumidityData((prev) => ({
                    ...prev,
                    value: data.data.value,
                    data: {
                        labels: data.data.label,
                        datasets: [
                            {
                                label: 'Minute Humiditys',
                                data: data.data.data,
                                fill: false,
                                borderColor: 'rgb(75, 192, 192)',
                                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                tension: 0.1
                            }
                        ],
                    }
                }))
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            {
                temperatureData.data && lightData.data && humidityData.data && dataChart ?
                    <>
                        <div className="overflow-y-scroll no-scrollbar" style={{ maxHeight: 'calc(100vh - 50px)' }}>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="cursor-pointer" onClick={() => setDataChart(temperatureData.data)} >
                                    <DataDevice title={temperatureData.title} value={`${temperatureData.value} ${temperatureData.calculationUnit}`} icon={temperatureData.icon} />
                                </div>
                                <div className="cursor-pointer" onClick={() => setDataChart(lightData.data)}>
                                    <DataDevice title={lightData.title} value={`${lightData.value} ${lightData.calculationUnit}`} icon={lightData.icon} />
                                </div>
                                <div className="cursor-pointer" onClick={() => setDataChart(humidityData.data)}>
                                    <DataDevice title={humidityData.title} value={`${humidityData.value} ${humidityData.calculationUnit}`} icon={humidityData.icon} />
                                </div>
                            </div>
                            <div className="bg-white mt-4 p-4">
                                {dataChart && <Chart dataChart={dataChart} typeChart={typeChart} handleChangeTypeChart={handleChangeTypeChart} />}
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="h-full flex flex-col justify-center">
                            <p className="text-center">Loadding...</p>
                        </div>
                    </>
            }
        </>
    )
}

export default Index