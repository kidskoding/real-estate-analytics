'use client'
import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { useTheme } from "@emotion/react";

export default function EstateByTXCity() {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({});
    const theme = useTheme();

    const primaryColor = theme.palette.primary.main;
    const secondaryColor = theme.palette.secondary.main;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:8080/city");
                if(!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setChartData(data);
            } catch(error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    if(chartRef.current) {
        if(chartRef.current.chart) {
            chartRef.current.chart.destroy();
        }
        const context = chartRef.current.getContext("2d");
        
        const cities = chartData.rows.map(row => capitalizeFirstLetterOfEachWord(row.city));
        const estateCounts = chartData.rows.map(row => row.count);

        function capitalizeFirstLetterOfEachWord(str) {
            return str
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
        }

        const newChart = new Chart(context, {
            type: "bar",
            data: {
                label: "Real Estate",
                labels: cities,
                datasets: [{
                    label: "Real Estate",
                    data: estateCounts,
                    backgroundColor: [primaryColor, secondaryColor, primaryColor, 
                        secondaryColor, primaryColor, secondaryColor, primaryColor],
                    borderColor: "rgba(0,0,0,0.1)",
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Real Estate',
                        font: {
                            size: 18
                        },
                        padding: {
                            top: 10,
                            bottom: 20
                        }
                    }
                },
                scales: {
                    x: {
                        type: "category"
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        chartRef.current.chart = newChart;
    }

    return (
        <div style={{position: "relative", width: "70vw", height: "60vh"}}>
            <canvas ref={chartRef} />
        </div>
    );
}