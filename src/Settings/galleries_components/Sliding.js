import React, {useState} from 'react'
import {
  
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, 
    Button,
   
  } from '@material-ui/core';
  import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
  import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
  
 function Sliding (props){
    const {imgs , title} = props
    const [open1, setOpen] = useState(false);
    const [indexImg, setIndexImg] = useState(0);
   
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose1 = () => {
      setOpen(false);
    };
    const nextImg = () => {
        if (indexImg < (imgs.length-1)) {setIndexImg(indexImg+1)}
      };
    const prevImg = () => {
        if (indexImg > 0) {setIndexImg(indexImg-1)}
      };

    return (
        <>
        
        <img onClick={handleClickOpen} alt="..." className="card-img-top" src={imgs[0]} style={{cursor:"pointer"}} />

        <Dialog
            open={open1}
            onClose={handleClose1}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent style={{position:"relative"}}>

            <img alt="..." className="card-img-top" src={imgs[indexImg]} />
            
            
            <ArrowBackIosRoundedIcon onClick={prevImg}  style={{ position: "absolute", top:"50%" , left: 60, cursor: "pointer" ,color:"white" }} />
            <ArrowForwardIosRoundedIcon onClick={nextImg}  style={{ position: "absolute", top:"50%" ,  right: 60, cursor: "pointer" ,color:"white" }} />
            
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose1} color="primary">
                close
            </Button>
           
            </DialogActions>
        </Dialog>

        </>
    )
}

export default Sliding
