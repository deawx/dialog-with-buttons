import React, { Component } from 'react'
import DialogList from '../../Core/Dialog/DialogList';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ClassNames from 'classnames';

const styles = () =>({
    button: {
        borderRadius: 0,
        border: '1px solid #E30613',
        textTransform: 'none',
        minHeight: 30
     },
});

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemListOpen: false,
            itemList: [],
            currentItemId: 0,
        }
    }

    showList = () => {
        this.setState({
            itemListOpen: true,
            itemList: [
                { value: 1, label: "America" },
                { value: 2, label: "France" },
            ]
        });
    }

    handleWindowClose = () => {
        this.setState({ itemListOpen: false });
    }

    handleItemSelectChange = (item) => {
        this.setState({ currentItemId: item.value });
    }

    render() {
        const {classes} = this.props;
        const { itemListOpen, itemList, currentItemId, } = this.state;

        return (
            <React.Fragment>
                <Button color="secondary" className={ClassNames(classes.button)} onClick={this.showList}>Show The List</Button>
                <DialogList
                    openModal={itemListOpen ? itemListOpen : false}
                    handleClose={this.handleWindowClose}
                    fullWidth={false}
                    maxWidth={'xs'}
                    itemList={itemList}
                    currentSelectedItem={currentItemId}
                    handleSelectChange={this.handleItemSelectChange}
                    showSaveButtons={true}
                    enableComment={true}
                    commmentHelperText={'Comment Here'}
                    validationMsg={'Something Wrong Please check'}
                    dialogTitle={'List Item Sample'}
                />
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Layout);
