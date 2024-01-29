// import Chart from "./views/Chart";
import Stat from "./views/Stat";

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

const mock = {
  resultCode: 0,
  resultMessage: "success",
  avatar: "https://example.com/avatar.jpg",
  gradeIcon: "https://example.com/gradeIcon.jpg",
  desc1: "This is desc1",
  desc2: "This is desc2",
  totalSaveEntity: {
    title: "Total Save",
    totalSaveMoney: 1000,
    desc: "This is the total save description",
    lineSaveMoneyEntityList: [
      {
        saveMoney: 300,
        lineName: "1",
      },
      {
        saveMoney: 300,
        lineName: "2",
      },
      {
        saveMoney: 200,
        lineName: "3",
      },
      {
        saveMoney: 200,
        lineName: "4",
      },
      {
        saveMoney: 200,
        lineName: "5",
      },
    ],
  },
  rightSaveMoneyRankEntity: {
    title: "Right Save Money Rank",
    rightSaveMoneyEntityList: [
      {
        icon: "https://example.com/icon1.jpg",
        code: "001",
        title: "Item 1",
        useCount: 10,
        rankIcon: "https://example.com/rankIcon1.jpg",
        saveMoney: 100,
      },
      {
        icon: "https://example.com/icon2.jpg",
        code: "002",
        title: "Item 2",
        useCount: 5,
        rankIcon: "https://example.com/rankIcon2.jpg",
        saveMoney: 50,
      },
      {
        icon: "https://example.com/icon3.jpg",
        code: "003",
        title: "Item 3",
        useCount: 2,
        rankIcon: "https://example.com/rankIcon3.jpg",
        saveMoney: 20,
      },
    ],
  },
  saveMoneyDetailEntity: {
    title: "Save Money Detail",
    lineSaveMoneyDetailEntityList: [
      {
        lineName: "Line 1",
        rightSaveMoneyDetailEntityList: [
          {
            code: "001",
            title: "Item 1",
            useCount: 5,
            saveMoney: 50,
          },
          {
            code: "002",
            title: "Item 2",
            useCount: 3,
            saveMoney: 30,
          },
        ],
      },
      {
        lineName: "Line 2",
        rightSaveMoneyDetailEntityList: [
          {
            code: "003",
            title: "Item 3",
            useCount: 2,
            saveMoney: 20,
          },
        ],
      },
    ],
  },
};

const a: any = 1;

const b: any = 5;

function App() {
  return (
    <>
      {/* <Chart></Chart> */}
      <Stat
        title={mock.totalSaveEntity.title}
        desc={mock.totalSaveEntity.desc}
        totalSaveMoney={mock.totalSaveEntity.totalSaveMoney}
        lineSaveMoneyEntityList={mock.totalSaveEntity.lineSaveMoneyEntityList}
      ></Stat>
    </>
  );
}

export default App;
