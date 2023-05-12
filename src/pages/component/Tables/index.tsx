import tableDataDevelopment from "./variables/tableDataDevelopment";
import tableDataCheck from "./variables/tableDataCheck";
import CheckTable from "./components/CheckTable";
import tableDataColumns from "./variables/tableDataColumns";
import tableDataComplex from "./variables/tableDataComplex";
import DevelopmentTable from "./components/DevelopmentTable";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";
import Layout from "@/components/Layout";
import Table1 from "./components/Table1";
import Pagination from "./components/Pagination";

const Tables = () => {
  return (
    <Layout>
      
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <Pagination/>
      </div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <DevelopmentTable tableData={tableDataDevelopment} />
        <CheckTable tableData={tableDataCheck} />
      </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnsTable tableData={tableDataColumns} />

        <ComplexTable tableData={tableDataComplex} />
      </div>
      <div  className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
      <Table1/>
      </div>
    </Layout>
  );
};

export default Tables;
