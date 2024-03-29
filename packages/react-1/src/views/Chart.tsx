import { Chart } from "@antv/f2";
import { useEffect } from "react";

const ChartComp = () => {
  const draw = () => {
    const data = [
      {
        const: "const",
        type: "交通出行",
        money: 51.39,
      },
      {
        const: "const",
        type: "饮食",
        money: 356.68,
      },
      {
        const: "const",
        type: "生活日用",
        money: 20.0,
      },
      {
        const: "const",
        type: "住房缴费",
        money: 116.53,
      },
    ];
    const chart = new Chart({
      id: "container",
      pixelRatio: window.devicePixelRatio,
    });
    chart.source(data);
    chart.coord("polar", {
      transposed: true,
      radius: 0.9,
      innerRadius: 0.5,
    });
    chart.axis(false);
    chart.legend(false);
    chart.tooltip(false);
    chart.guide().html({
      position: ["50%", "50%"],
      html: '<div style="text-align: center;width:150px;height: 50px;">\n      <p style="font-size: 12px;color: #999;margin: 0" id="title">哈哈哈</p>\n      <p style="font-size: 18px;color: #343434;margin: 0;font-weight: bold;" id="money"></p>\n      </div>',
    });
    chart
      .interval()
      .position("const*money")
      .adjust("stack")
      .color("type", ["#1890FF", "#13C2C2", "#2FC25B", "#FACC14"]);

    chart.render();
  };

  useEffect(() => {
    draw();
  }, []);

  return <canvas id="container"></canvas>;
};

export default ChartComp;
