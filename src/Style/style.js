import { makeStyles } from "@material-ui/core";

const useStyleAction=makeStyles((theme)=>({
actionMD:{
    padding:theme.spacing(2),
    margin:'auto',

},
    Paper:{
        maxWidth: 500,
        margin: 'auto',
        marginTop:50,   
    },
    ViewPaper:{
        maxWidth: 500,
        margin: 'auto',
        marginTop:5,
    },
    Diplayer:
    {
        height:150,
        width:150,
        borderRadius:75,
        backgroundColor:'#3f51b5',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'white',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
     
}))

export {useStyleAction}
