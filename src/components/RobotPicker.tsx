import React from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { RobotData } from "../constants/constants";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

const RobotPicker: React.FC<{ robotData: RobotData }> = ({robotData}) =>{
  //eslint-disable-next-line
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const images = [
  "https://media.tenor.com/images/511640cc209ce49552fc7c4a1b2c334f/tenor.gif",
  "https://media.tenor.com/images/19a2013ea8329376f3ee6285dad9d55a/tenor.gif",
  "https://i.giphy.com/media/l0MYKtrxlkiYE596g/giphy.webp"
  ]

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event:any) => {
    robotData.image=images[event.target.id]
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Select Robot
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Select your Robot</h2>
            <img className="robots" id="0" src={"https://media.tenor.com/images/511640cc209ce49552fc7c4a1b2c334f/tenor.gif"} onClick={handleClose}/>
            <img className="robots" id="1" src={"https://media.tenor.com/images/19a2013ea8329376f3ee6285dad9d55a/tenor.gif"} onClick={handleClose}/>
            <img className="robots" id="2" src={"https://i.giphy.com/media/l0MYKtrxlkiYE596g/giphy.webp"}  onClick={handleClose}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default RobotPicker;