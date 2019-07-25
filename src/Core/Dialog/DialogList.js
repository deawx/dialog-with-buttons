import React, { Component } from 'react'
import { Dialog, DialogContent, DialogTitle, List, ListItem, ListItemText, DialogActions, } from '@material-ui/core';
import TextInput from '../TextInput/TextInput';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import ClassNames from 'classnames';

const styles = () => ({
   root: {
      cursor: 'pointer'
   },
   commentDiv: {
      paddingLeft: 10,
      paddingRight: 10,
      justifyContent: 'space-between',
   },
   dialogTitleDiv: {
      borderBottom: '2px solid #F7F7F7',
   },
   list: {
      width: '100%',
      maxHeight: 'calc(100vh - 200px)',
      overflowY: 'auto'
   },
   content: {
      position: 'relative',
      justifyContent: 'center',
      padding: 10,
   },
   errMsg: {
      padding: 10,
      paddingTop: 0,
   },
   button: {
      borderRadius: 0,
      border: '1px solid #E30613',
      textTransform: 'none',
      minHeight: 30
   },
});

class DialogList extends Component {

   constructor(props) {
      super(props);
      this.state = {
         comment: "",
         selectedItem: {},
         showErrorMsg: false,
         loading: false,
      }
   }

   handleSelectionChange = item => () => {
      this.callSelectItemChange(item);
   }

   handleTextChange = name => event => {
      this.setState({ [name]: event.target.value, showErrorMsg: false });
   };

   callSelectItemChange = (item) => {
      this.setState({ loading: false },
         () => {
            this.props.handleSelectChange(item);
         });
   }

   onClickSave = () => {
      // Save record code goes here
   }

   onClickClose = () => {
      this.props.handleClose();
   }

   render() {

      const { classes, openModal, handleClose, fullWidth, maxWidth, dialogTitle,
         currentSelectedItem,
         showSaveButtons, enableComment, commmentHelperText, validationMsg, itemList
      } = this.props;

      const { comment, showErrorMsg, loading } = this.state;

      return (

         <Dialog
            open={openModal}
            onClose={handleClose}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
         >
            {dialogTitle &&
               <DialogTitle className={ClassNames(classes.dialogTitleDiv, classes.flexRow)}>
                  {'Country List'}
               </DialogTitle>
            }

            <DialogContent className={ClassNames(classes.content, classes.flexColumn)} style={{ overflowY: 'visible' }}>
               <React.Fragment>
                  <div>
                     <List className={classes.list} dense={true} style={{ paddingTop: '0px' }}>
                        {(itemList && itemList.length > 0) &&
                           itemList.map((item) =>
                              <ListItem
                                 button key={item.value}
                                 divider
                                 aria-haspopup="true"
                                 aria-controls="ringtone-menu"
                                 selected={(String(item.value) === String(currentSelectedItem) ? true : false)}
                                 onClick={this.handleSelectionChange(item)}
                              >
                                 <ListItemText primary={item.label} />
                              </ListItem>
                           )
                        }
                     </List>
                  </div>

                  {enableComment &&
                     <TextInput
                        multiline={true}
                        placeholder_langKey={commmentHelperText}
                        value={comment}
                        onChange={this.handleTextChange('comment')}
                        className={ClassNames(classes.textField)}
                        setFocus
                        rows="4"
                     />
                  }
                  {showErrorMsg &&
                     <div className={ClassNames(classes.errorText, classes.errMsg)}>
                        {validationMsg}
                     </div>
                  }
               </React.Fragment>
            </DialogContent>
            {showSaveButtons &&
               <DialogActions className={classes.dialogActions}>
                  <div className={classes.spaceAroundS}>
                     <Button color="secondary" className={ClassNames(classes.button)} variant={"flat"} onClick={this.onClickSave}>Save</Button>
                  </div>
                  <div className={classes.spaceAroundS}>
                     <Button color="secondary" className={ClassNames(classes.button)} onClick={this.onClickClose}>Close</Button>
                  </div>
               </DialogActions>
            }
            {loading &&
               <CircularProgress size={25} position={"center"} />
            }
         </Dialog>
      )
   }
}

export default withStyles(styles)(DialogList);