import { useCallback, useEffect } from "react";
import { Chart } from "@antv/g2";

const c: any = "";

export interface LineSaveMoneyEntity {
  /**
   * 节省金额
   */
  saveMoney: number;
  /**
   * 产线名称
   */
  lineName: string;
}

export interface TotalSaveEntity {
  /**
   * 标题
   */
  title: string;
  /**
   * 总节省金额
   */
  totalSaveMoney: number;
  /**
   * 使用权益次数描述
   */
  desc: string;
  /**
   * 产线省钱金额列表
   */
  lineSaveMoneyEntityList: LineSaveMoneyEntity[];
}

export interface RightSaveMoneyEntity {
  /**
   * 图标
   */
  icon: string;
  /**
   * 权益码
   */
  code: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 使用次数
   */
  useCount: number;
  /**
   * 排名图标
   */
  rankIcon: string;
  /**
   * 省钱金额
   */
  saveMoney: number;
}

export interface RightSaveMoneyRankEntity {
  /**
   * 标题
   */
  title: string;
  /**
   * 权益省钱列表
   */
  rightSaveMoneyEntityList: RightSaveMoneyEntity[];
}

export interface LineSaveMoneyDetailItem {
  /**
   * 权益码
   */
  code: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 使用次数
   */
  useCount: number;
  /**
   * 省钱金额
   */
  saveMoney: number;
}

export interface LineSaveMoneyDetailEntity {
  /**
   * 产线名称
   */
  lineName: string;
  /**
   * 产线下省钱明细列表
   */
  rightSaveMoneyDetailEntityList: LineSaveMoneyDetailItem[];
}

export interface SaveMoneyDetailEntity {
  /**
   * 标题
   */
  title: string;
  /**
   * 产线省钱明细列表
   */
  lineSaveMoneyDetailEntityList: LineSaveMoneyDetailEntity[];
}

export interface SaveMoneyUser {
  /**
   * 头像
   */
  avatar: string;
  /**
   * 等级图标
   */
  gradeIcon: string;
  /**
   * 描述文案1
   */
  desc1: string;
  /**
   * 描述文案2
   */
  desc2: string;
}

export type GetUserMoneySaveCalculatorResponseType = ResponseType &
  SaveMoneyUser & {
    /**
     * 累计节省节点
     */
    totalSaveEntity: TotalSaveEntity;
    /**
     * 权益省钱榜节点
     */
    rightSaveMoneyRankEntity: RightSaveMoneyRankEntity;
    /**
     * 省钱明细节点
     */
    saveMoneyDetailEntity: SaveMoneyDetailEntity;
  };

function Stat(props: TotalSaveEntity) {
  const { totalSaveMoney, desc, lineSaveMoneyEntityList } = props;

  const chartDataList = lineSaveMoneyEntityList
    .map((item) => ({
      ...item,
      id: item.lineName,
      value: item.saveMoney,
    }))
    .sort((a, b) => b.value - a.value)
    .map((item, index) => ({ ...item, isHighlight: index === 0 }));

  const changeChartDataHighlightByLineName = (
    lineName: string,
    list: typeof chartDataList,
  ) => {
    return list.map((item) => ({
      ...item,
      isHighlight: item.lineName === lineName,
    }));
  };

  let highligtLineName = chartDataList.find(
    (item) => item.isHighlight,
  )!.lineName;

  let isFirstDraw = true;

  const draw = useCallback(async (list: typeof chartDataList) => {
    const chart = new Chart({
      container: "chart",
      width: 1000,
      height: 800,
    });
    chart.coordinate({ type: "theta", innerRadius: 0.6, outerRadius: 0.8 });
    chart
      .interval()
      .data(list)
      .transform({ type: "stackY" })
      .encode("y", "value")
      .label({
        position: "outside",
        fontWeight: 600,
        fill: (data) => (data.isHighlight ? "#CE824E" : "#222222"),
        text: (data) => `省￥${data.saveMoney} \n ${data.lineName}`,
      })
      .style("radius", 4)
      .style("stroke", "#fff")
      .style("lineWidth", 2)
      .style("fill", (data) =>
        data.isHighlight ? "#222222" : "rgb(204, 204, 204)",
      )
      .animate("enter", { type: isFirstDraw ? "waveIn" : false })

      .legend(false)
      .tooltip(false);
    chart
      .text()
      .style("text", `￥${totalSaveMoney}`)
      .style("x", "50%")
      .style("y", 800 / 2 - 24)
      .style("fontSize", 24)
      .style("fontWeight", "bold")
      .style("textAlign", "center");
    chart
      .text()
      .style("text", desc)
      .style("x", "50%")
      .style("y", 800 / 2)
      .style("fontSize", 10)
      .style("textAlign", "center")
      .style("fill", "#999999");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    isFirstDraw = false;

    chart.render();

    chart.on("interval:click", async (event) => {
      const { data } = event;
      const lineName = data.data.lineName;
      console.log(lineName, highligtLineName);
      if (highligtLineName !== lineName) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        highligtLineName = lineName;
        const list = changeChartDataHighlightByLineName(
          lineName,
          chartDataList,
        );
        draw(list);
      }
    });
  }, []);

  useEffect(() => {
    draw(chartDataList);
  }, [chartDataList, draw]);

  return (
    <div className="memeber-save-money-stat-comp">
      <div id="chart"></div>
    </div>
  );
}

export default Stat;
