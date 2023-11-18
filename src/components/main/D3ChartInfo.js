import React, { useEffect } from "react";
import { max, select } from "d3";

const D3ChartInfo = ({ data }) => {
  useEffect(() => {
    select("#chart").select("svg").remove();
    // D3를 사용하여 데이터 시각화 로직을 작성합니다.
    const svg = select("#chart")
      .append("svg")
      .attr("width", 265)
      .attr("height", 120);
    const maxValue = max(data, (d) => d.tagNum);
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 40)
      .attr("width", (d) => (d.tagNum / maxValue) * 265)
      .attr("height", 40)
      .attr("rx", 15)
      .attr("ry", 15)
      .attr("fill", (d) => `rgba(0, 104, 253, ${d.tagNum / maxValue})`);

    svg
      .selectAll(".tagNum")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d.tagNum)
      .attr("x", (d) => (d.tagNum / maxValue) * 265 - 10)
      .attr("y", (d, i) => i * 40 + 25)
      .attr("text-anchor", "end")
      .attr("fill", "#fff");

    svg
      .selectAll(".tagContent")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d.tagContent)
      .attr("x", 10)
      .attr("y", (d, i) => i * 40 + 25)
      .attr("fill", "#fff");
  }, []);

  return (
    <div
      id="chart"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "330px",
        height: "200px",
        padding: "30px",
        borderRadius: "20px",
        background: "rgba(132, 144, 255, 0.11)",
      }}
    ></div>
  );
};

export default D3ChartInfo;
