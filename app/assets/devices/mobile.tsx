"use client";

import {  ResponsiveContainer, Line, CartesianGrid, ComposedChart, Bar, XAxis, YAxis, Tooltip, Legend} from "recharts";
import { useState, useEffect } from "react";


// registerLicense(
//   "Ngo9BigBOggjHTQxAR8/V1JHaF5cWWdCe0xyWmFZfVhgd19GYlZUQWY/P1ZhSXxVdkFjXX5bcHdVRGJbWUR9XEE=",
// );

export default function MobileView() {
  const [isMount, setIsMount] = useState(false);

  const patientData = [
    {name: "day1", bleeding: "Heavy", lh: "NA", energy: 2, bbt: 36.4,  pain: 9 },
    {name: "day2", bleeding: "Heavy", lh: "NA", energy: 2, bbt: 36.4, pain: 9},
    {name: "day3", bleeding: "Medium", lh: "NA", energy: 3, bbt: 36.3, pain: 8},
    {name: "day4", bleeding: "Medium", lh: "NA", energy: 3, bbt: 36.3, pain: 7},
    {name: "day5", bleeding: "Light", lh: "NA", energy: 4, bbt: 36.4, pain: 7},
    {name: "day6", bleeding: "NA", lh: "NA", energy: 5, bbt: 36.3, pain: 6 },
    {name: "day7", bleeding: "NA", lh: "NA", energy: 6, bbt: 36.3, pain: 6 },
    {name: "day8", bleeding: "NA", lh: "NA", energy: 6, bbt: 36.2, pain: 5 },
    {name: "day9", bleeding: "NA", lh: "Low", energy: 7, bbt: 36.3, pain: 5 },
    {name: "day10", bleeding: "NA", lh: "Low", energy: 7, bbt: 36.3, pain: 5 },
    {name: "day11", bleeding: "NA", lh: "High", energy: 8, bbt: 36.4, pain: 6},
    {name: "day12", bleeding: "NA", lh: "High", energy: 8, bbt: 36.4, pain: 6},
    {name: "day13", bleeding: "NA", lh: "Peak", energy: 7, bbt: 36.2, pain: 7},
    {name: "day14", bleeding: "NA", lh: "Peak", energy: 7, bbt: 36.3, pain: 7},
    {name: "day15", bleeding: "NA", lh: "High", energy: 6, bbt: 36.5,pain: 6, },
    {name: "day16", bleeding: "NA", lh: "Low", energy: 6, bbt: 36.7, pain: 5 },
    {name: "day17", bleeding: "NA", lh: "NA", energy: 6, bbt: 36.8, pain: 5 },
    {name: "day18", bleeding: "NA", lh: "NA", energy: 5, bbt: 36.8, pain: 5 },
    {name: "day19", bleeding: "NA", lh: "NA", energy: 5, bbt: 36.9, pain: 6 },
    {name: "day20", bleeding: "NA", lh: "NA", energy: 5, bbt: 36.9, pain: 6 },
    {name: "day21", bleeding: "NA", lh: "NA", energy: 5, bbt: 37.0, pain: 6 },
    {name: "day22", bleeding: "NA", lh: "NA", energy: 4, bbt: 36.9, pain: 7 },
    {name: "day23", bleeding: "NA", lh: "NA", energy: 4, bbt: 36.9, pain: 7 },
    {name: "day24", bleeding: "NA", lh: "NA", energy: 3, bbt: 36.8, pain: 7 },
    {name: "day25", bleeding: "NA", lh: "NA", energy: 3, bbt: 36.8, pain: 8 },
    {name: "day26", bleeding: "NA", lh: "NA", energy: 3, bbt: 36.7, pain: 8 },
    {name: "day27", bleeding: "NA", lh: "NA", energy: 2, bbt: 36.6, pain: 8 },
    {name: "day28", bleeding: "NA", lh: "NA", energy: 2, bbt: 36.5, pain: 9 },
  ];

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) return null;

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
      <section className="w-full h-[800px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart width="100%" height="100%" data={patientData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              yAxisId="left"
              orientation="left"
              label={{
                value: "Score / Energy",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[36, 37.5]}
              label={{ value: "Temp °C", angle: 90, position: "insideRight" }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="energy" barSize={20} fill="#49c999" />

            <Line type="monotone" dataKey="pain" stroke="#f55565" />
            <Line
              yAxisId="right"
              type="monotone" // This creates the "Spline" (curved) effect
              dataKey="bbt"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="Body Temp (Spline)"
            />
          </ComposedChart>
        </ResponsiveContainer>

      </section>
    </>
  );
}
