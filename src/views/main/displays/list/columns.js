const columns = [
  { 
    field: 'id', 
    headerName: 'N°', 
    width: 50,
    type: 'number'
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
]

export default columns;