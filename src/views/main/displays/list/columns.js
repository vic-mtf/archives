import DeleteOutlineOutlinedIcon  from "@mui/icons-material/DeleteOutlineOutlined";
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import { GridActionsCellItem } from "@mui/x-data-grid";

const columns = [
  { 
    field: 'id', 
    getActions: (data) => [
      <GridActionsCellItem 
        icon={<LaunchRoundedIcon />} 
        onClick={() => {
          const link = document.createElement('a');
          link.target = '_blank';
          link.href = data?.row?.contentUrl;
          link.click();
        }}
        label="Ouvrir"
      />,
    ],
  },
  { 
    field: 'createdAt', 

  },
  {
    field: 'designation',
   
  },
  {
    field: 'origin',
   
  },
  {
    field: 'destination',
   
  },
  {
    field: 'secrete',
    
  },
  {
    field: 'urgence',
   

  },
  {
    field: 'classNum',
  },
  {
    field: 'refNum',
  },
  {
    field: 'numServiceDis',
  },
  { 
    field: 'code', 
  },
  {
    field: 'type',
  },
  {
    field: 'subType',
  },
  {
    field: 'object',
  },
  {
    field: 'description',
  },
  {
    field: 'status',
   
  },
  {
    field: 'actions',
    getActions: () => [
      <GridActionsCellItem icon={<DeleteOutlineOutlinedIcon />} label="Delete" />,
    ],
  },
]

export default columns;