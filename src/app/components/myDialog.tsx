"use client"

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function MyDialog({
  open, 
  onOpen, 
  onClose,
}:{
  open: boolean; 
  onOpen?: () => void; 
  onClose: () => void;
}){
  return (
      <Dialog
        open={open}
        onClose={onClose}
        onClick={onOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle 
          id="alert-dialog-title" 
          sx={{
            display: 'flex', 
            justifyContent: 'center', 
            height: '100px', 
            alignItems:'center',
            fontSize: '16px'
          }}
          className='
            dark:bg-slate-600 
            bg-white 
            dark:border
            dark:border-b-0 
            dark:border-slate-500
            dark:text-white
          '
        >
          I am implementing, i will release soon!!!
        </DialogTitle>
        <DialogActions className='dark:bg-slate-600 bg-white dark:border dark:border-slate-500 p-4'>
          <Button 
            onClick={onClose} 
            autoFocus 
            variant='text' 
            className='bg-iconColor text-white'
          >
            Okay
          </Button>
        </DialogActions>
      </Dialog>
  );
}