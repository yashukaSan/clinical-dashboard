"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts' ;
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { LineChart, Line, CartesianGrid, ComposedChart } from 'recharts';
import { useState, useEffect } from 'react';

import data from '../patient-data.json';

export default function MobileView(){
  const [isMount, setIsMount] = useState(false);


  const patientData = [
    {name: "day1", value: 9, energy: 2},
    {name: "day2", value: 9, energy: 2},
    {name: "day3", value: 8, energy: 3},
    {name: "day4", value: 7, energy: 3},
    {name: "day5", value: 7, energy: 4},
    {name: "day6", value: 6, energy: 5},
    {name: "day7", value: 6, energy: 6},
    {name: "day8", value: 5, energy: 6},
    {name: "day9", value: 5, energy: 7},
    {name: "day10", value: 5, energy: 7},
    {name: "day11", value: 6, energy: 8},
    {name: "day12", value: 3, energy: 8},
    {name: "day13", value: 7, energy: 7},
    {name: "day14", value: 7, energy: 7},
    {name: "day15", value: 6, energy: 6},
    {name: "day16", value: 5, energy: 6},
    {name: "day17", value: 5, energy: 6},
    {name: "day18", value: 5, energy: 5},
    {name: "day19", value: 6, energy: 5},
    {name: "day20", value: 6, energy: 5},
    {name: "day21", value: 6, energy: 5},
    {name: "day22", value: 7, energy: 4},
    {name: "day23", value: 7, energy: 4},
    {name: "day24", value: 7, energy: 3},
    {name: "day25", value: 8, energy: 3},
    {name: "day26", value: 8, energy: 3},
    {name: "day27", value: 8, energy: 2},
    {name: "day28", value: 9, energy: 2},
  ]

  const bbtData = [ 
    {name: "day1", value: 36.4},
    {name: "day2", value: 36.4},
    {name: "day3", value: 36.3},
    {name: "day4", value: 36.3},
    {name: "day5", value: 36.4},
    {name: "day6", value: 36.3},
    {name: "day7", value: 36.3},
    {name: "day8", value: 36.2},
    {name: "day9", value: 36.3},
    {name: "day10", value:36.3},
    {name: "day11", value:36.4},
    {name: "day12", value:36.4},
    {name: "day13", value:36.2},
    {name: "day14", value:36.3},
    {name: "day15", value:36.5},
    {name: "day16", value:36.7},
    {name: "day17", value:36.8},
    {name: "day18", value:36.8},
    {name: "day19", value:36.9},
    {name: "day20", value:36.9},
    {name: "day21", value:37.0},
    {name: "day22", value:36.9},
    {name: "day23", value:36.9},
    {name: "day24", value:36.8},
    {name: "day25", value:36.8},
    {name: "day26", value:36.7},
    {name: "day27", value:36.6},
    {name: "day28", value:36.5},
  ]
  useEffect(() => {
    setIsMount(true);
  }, []);

  const data1:any = data[0];
  console.log(data);
  const colors = ["#f9d9a0", "#d9d9d0", "#afadaf"];

  if(!isMount) return null;

  const data2 = [
    {name: 'num1', value: 5000},
    {name: 'num2', value: 5000},
    {name: 'num3', value: 6000}
  ];

  return (
    <>
      <header>CLINICAL MENSTRUAL CYCLE DASHBOARD</header>
      <section className="text-white">
        <div>
          <p>Patient Name</p>
          <p>Date</p>
          <p>Cycle Duration: days</p>
        </div>
        <p>Cycle Start Date: date</p>
      </section>
      <section>Cycle Day: 14 (ovulation Window)</section>
      <section className="w-full h-[450px]">
        <ResponsiveContainer width="100%" height={200} className="border">
          <PieChart>
            <Pie
              data={data2}
              dataKey="value"
              nameKey="name"
              cx="500"
              cy="100"
              outerRadius={75}
            >
              {data2.map((_entry: never, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <ComposedChart width="100%" height="100%">
          <BarChart data={painData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#a9c999" />
          </BarChart>
          <LineChart data={energyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#455565" />
          </LineChart>
        </ComposedChart>
      </section>
    </>
  );
}