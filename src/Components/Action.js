import { Grid, Paper,Typography,Select,InputLabel,FormControl, Button} from '@material-ui/core'
import React from 'react'
import {useStyleAction} from '../Style/style';




function Action() {
    
    
    const [BlnExp, setBlnExp] = React.useState(0);
    const [data, setData] = React.useState([]);
    const [Exp, setExp] = React.useState(0);
    const handleChange = (event) => {
        setExp(Number(event.target.value));   
      };

    const handleAddClick=()=>{
       setBlnExp(BlnExp=>BlnExp+Exp)
       setData([...data,{
           id:data.length,
           value:`${Date().toLocaleString()} - ${Exp}- Add`}])
       
    }

    const handleRemoveClick=()=>{
       
        if(BlnExp>=Exp)
        {
            setBlnExp(BlnExp=>BlnExp-Exp);
            setData([...data,{
                id:data.length,
                value:`${Date().toLocaleString()} - ${Exp}- Remove`}])
        }
        
        
     }


   
    const Classes=useStyleAction();
    return (
        <>
        <div>
            <Paper className={Classes.Paper}>
                <Typography variant="h4" color="success">Expence Tracker</Typography>
                <Grid container spacing={2}>
                   <Grid item md={6} >
                       <Paper className={Classes.Diplayer}>
                           <Typography variant="h4"> ₹{BlnExp}</Typography>
                          
                       </Paper>
                   </Grid>
                   <Grid item md={6}>
                        <FormControl className={Classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Expence</InputLabel>
                            <Select
                            native
                            value={Exp}
                            onChange={handleChange}
                            inputProps={{
                                name: 'exp',
                            }}
                            >
                            <option value={0}>0</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                            <option value={200}>200</option>
                            </Select>
                        </FormControl>
                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <Button variant="outlined" color="primary" onClick={handleAddClick}>Add</Button>
                            </Grid>
                            <Grid item md={6}>
                                <Button variant="outlined" color="secondary" onClick={handleRemoveClick}>Remove</Button>
                            </Grid>
                        </Grid>

                   </Grid>
                </Grid>
            </Paper>

        </div>
        <>
        <Paper className={Classes.ViewPaper}>
           {
               data.map(dataitem=>(
                   <h4 key={dataitem}>{dataitem.value}</h4>
               ))
           }
        </Paper>
        </>
        </>
    )
}

export default Action
