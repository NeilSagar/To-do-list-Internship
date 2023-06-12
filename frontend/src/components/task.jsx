import ClearIcon from '@mui/icons-material/Clear';


import { deleteIt } from "../controller/controller";
import { Typography,styled } from '@mui/material';


const StyledTypography=styled(Typography)`
display:inline-block;
font-size:20px;
font-weight:300;
width:70%;
`;
const StyledIndex=styled(Typography)`
font-size:20px;
font-weight:300;
position:relative;
top:2px;
margin-right:5px;
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
        
        <StyledIndex className='index'>{index+1}.</StyledIndex>
        <StyledTypography variant="subtitle1" >{task}</StyledTypography>
        <button className="task-delete-button" onClick={handleDelete}><ClearIcon/></button>
    </>
    );
}

export default Task;