import NoPriority from '../assets/No-priority.svg'
import LowPriority from '../assets/Img - Low Priority.svg'
import MediumPriority from '../assets/Img - Medium Priority.svg'
import HighPriority from '../assets/Img - High Priority.svg'
import UrgentPriority from '../assets/SVG - Urgent Priority colour.svg'
import Backlog from '../assets/Backlog.svg'
import Todo from '../assets/To-do.svg'
import InProgress from '../assets/in-progress.svg'
import Done from '../assets/Done.svg'
import Canceled from '../assets/Cancelled.svg'

export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <img src={NoPriority} size={14} alt="No Priority"/>;
        case "Low": return <img src={LowPriority} size={14} alt="Low"/>;
        case "Medium": return <img src={MediumPriority} size={14} alt="Medium" />;
        case "High": return <img src={HighPriority} size={14} alt="High" />;
        case "Urgent": return <img src={UrgentPriority} size={14} alt="Urgent" />;
        default : return <img src={NoPriority} size={14} alt="No Priority" />
    }
}

export const getStatusIcon = (priority) => {
    switch (priority) {
        case "Backlog": return <img src={Backlog} size={24} alt="Backlog"/>;
        case "Todo": return <img src={Todo} size={24} alt="Todo"/>;
        case "In progress": return <img src={InProgress} size={16} alt="In progress"/>;
        case "Done": return <img src={Done} size={16} alt="Done"/>;
        case "Canceled": return <img src={Canceled} size={16} alt="Cancelled"/>;
        default : return <img src={Backlog} size={24} alt="Backlog"/>;
    }
}
