import MiniCalendar from "@/components/calendar/MiniCalendar";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import Widget from "@/components/widget/Widget";
import TaskCard from "./components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck";
import tableDataComplex from "./variables/tableDataComplex";
import CheckTable from "./components/CheckTable";
import ComplexTable from "./components/ComplexTable";
import Layout from "@/components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"Earnings"}
            subtitle={"$340.5"}
          />
          <Widget
            icon={<IoDocuments className="h-6 w-6" />}
            title={"Spend this month"}
            subtitle={"$642.39"}
          />
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"Sales"}
            subtitle={"$574.34"}
          />
          <Widget
            icon={<MdDashboard className="h-6 w-6" />}
            title={"Your Balance"}
            subtitle={"$1,000"}
          />
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"New Tasks"}
            subtitle={"145"}
          />
          <Widget
            icon={<IoMdHome className="h-6 w-6" />}
            title={"Total Projects"}
            subtitle={"$2433"}
          />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* <TotalSpent /> */}
          {/* <WeeklyRevenue /> */}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
          <div>
            <CheckTable tableData={tableDataCheck} />
          </div>

          <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
            {/* <DailyTraffic /> */}
            {/* <PieChartCard /> */}
          </div>

          <ComplexTable tableData={tableDataComplex} />

          <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
            <TaskCard />
            <div className="grid grid-cols-1 rounded-[20px]">
              <MiniCalendar />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
