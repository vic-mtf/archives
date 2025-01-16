const columns = [
  {
    field: "tags",
    headerName: "Étagère/Rayon",
    type: "array",
    width: 200,
    editable: false,
    valueFormatter: (params) => params.join(", "),
  },
  {
    field: "refNumber",
    headerName: "Étage/Palier",
    // description: "This column has a value getter and is not sortable.",
    width: 220,
    sortable: false,
    type: "string",
  },
  {
    field: "classNumber",
    headerName: "Classeur",

    width: 200,
    sortable: false,
    type: "string",
  },
  {
    field: "folder",
    headerName: "Dossier",
    type: "object",
    width: 200,
    editable: false,
    valueFormatter: (obj) => obj?.name,
  },
  {
    field: "administrativeUnit",
    headerName: "Local",
    // description: "This column has a value getter and is not sortable.",
    width: 220,
    sortable: false,
    type: "string",
  },
  {
    field: "designation",
    headerName: "Désignation",
    width: 300,
    editable: false,
    type: "string",
  },

  {
    field: "type",
    label: "Type de document",
    type: "string",
  },
  {
    field: "createdAt",
    headerName: "Date",
    type: "dateTime",
  },

  {
    field: "_id",
    headerName: "Codification",
    // description: "This column has a value getter and is not sortable.",
    width: 220,
    sortable: false,
    type: "string",
  },
  {
    field: "description",
    headerName: "Déscription",
    width: 350,
    sortable: false,
    type: "string",
  },
  // {
  //   field: "tags",
  //   headerName: "Mot clé",
  //   type: "array",
  //   width: 200,
  //   editable: false,
  //   valueFormatter: (params) => params.join(", "),
  // },
];

export default columns;
