import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const actions = [
    {
        label: 'ouvrir',
        icon: <LaunchOutlinedIcon/>
    },
    {
        label: 'Supprimer',
        icon: <DeleteOutlinedIcon/>
    },
    {
        label: 'Renommer',
        icon: <EditOutlinedIcon/>
    },
    {
        label: 'Envoyer',
        icon: <SendOutlinedIcon/>
    },
    {
        label: 'Partager',
        disabled: true,
        icon: <ShareOutlinedIcon/>
    },
    {
        label: 'Detail',
        icon: <InfoOutlinedIcon/>
    }
];

export default actions;