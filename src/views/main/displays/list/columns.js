import DeleteOutlineOutlinedIcon  from "@mui/icons-material/DeleteOutlineOutlined";
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import { GridActionsCellItem } from "@mui/x-data-grid";

const columns = [
  { 
    field: 'id', 
    width: 50,
    type: 'actions',
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
    headerName: 'Date de création',
    type: 'date',
    width: 175
  },
  {
    field: 'designation',
    headerName: 'Designation',
    width: 175
  },
  {
    field: 'origin',
    headerName: 'Provenance',
    width: 175
  },
  {
    field: 'destination',
    headerName: 'Destination',
    width: 175
  },
  {
    field: 'secrete',
     headerName: 'Confidentialite',
     width: 175
  },
  {
    field: 'urgence',
    headerName: 'Urgence',
    width: 175

  },
  {
    headerName: 'Numero de classement',
    field: 'classNum',
    width: 175
  },
  {
    headerName: 'Numero de référence',
    field: 'refNum',
    width: 175
  },
  {
    headerName: 'Numero d\'entree dans le service Disposition',
    field: 'numServiceDis',
    width: 175
  },
  { 
    field: 'code', 
    headerName: 'Code',
    width: 175, 
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 175,
  },
  {
    field: 'subType',
    headerName: 'Sous type',
    width: 175,
  },
  {
    field: 'object',
    headerName: 'Objet',
    width: 175
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 175
  },
  {
    field: 'status',
    headerName: 'Statut',
    width: 175
  },
  {
    field: 'actions',
   // headerName: 'Actions',
    type: 'actions',
    width: 50,
    getActions: () => [
      <GridActionsCellItem icon={<DeleteOutlineOutlinedIcon />} label="Delete" />,
    ],
  },
]

export default columns;