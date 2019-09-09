import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { DropzoneArea } from 'material-ui-dropzone';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  upload: {
      width: '150px',
      minHeight: '50px'
  }, 
  text: {
      textAlign:'center',
  }
});



export default function Hook({...props}) {

    const handleSave = (files) => {
        var formData = new FormData();
            formData.append('file', files);
        
        props.uploadBreakFast(formData)
    }

  const classes = useStyles();
  return (
    <DropzoneArea  
        dropzoneParagraphClass ={classes.text}
        onDrop={handleSave}
        dropzoneClass={classes.upload}
        showPreviewsInDropzone={false}
        showPreviews={true}
        // onChange={this.handleChange.bind(this)}
        dropzoneText={"Upload"}
        filesLimit={1}
        style={{ width: '1000px'}}
    />
  );
}