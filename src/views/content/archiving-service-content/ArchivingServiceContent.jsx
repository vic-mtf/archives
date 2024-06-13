import useData from "../../../data/useData";
import TableData from "../display-data/TableData";

export default function ArchivingServiceContent() {
  const data = useData();

  return <TableData data={data} />;
}
