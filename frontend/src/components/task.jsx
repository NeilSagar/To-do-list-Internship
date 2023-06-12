import ClearIcon from '@mui/icons-material/Clear';


import { deleteIt } from "../controller/controller";
import { Typography,styled } from '@mui/material';


const StyledTypography=styled(Typography)`
display:inline-block;
font-size:20px;
font-weight:350;
`;

function Task(props){
    const task=props.task.task_name;
    const index=props.index;
    function handleDelete(){
        
        // console.log(task);
        deleteIt(task);
    }
    
    return (
    <>
        <StyledTypography variant="subtitle1" >{index+1}. {task}</StyledTypography>
        <button className="task-delete-button" onClick={handleDelete}><ClearIcon/></button>
    </>
    );
}

export default Task;