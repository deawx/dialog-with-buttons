import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
//import { injectIntl } from 'react-intl';
import SearchIcon from '@material-ui/icons/Search';
import ClassNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    endAdorns: {
        alignItems: 'center'
    },
    wrapper: {
        width: "100%"
    }
});

class TextInputRender extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    keyPress = (e) => {
        if (e.keyCode === 13) {
            if (this.props.onBlur) {
                this.props.onBlur();
            }
        }
    }

    handleClear = (e) => {
        this.props.onClear(e);
    }

    render() {

        const { classes, id, label, placeholder, onChange, multiline, onBlur,
            rows, disabled, onClear, value, required, helperText, error,
            variant, isSelect, setFocus, label_langKey, placeholder_langKey,
            intl, whiteBg, onSearch, title, anchorEl, highlight, autoComplete, allowBlur } = this.props;


        const focusInputField = input => {
            if (setFocus && input) {
                input.focus();
            }
        };

        let inputClass = classes.textField;

        if (variant === "outlined") {
            inputClass = classes.inputOutlined;
        }

        if (highlight) {
            inputClass = ClassNames(classes.color5, {
                [`${classes.inputOutlined}`]: variant === "outlined",
                [`${classes.textField}`]: variant !== "outlined",
            });
        }

        return (
            <div title={title || value} className={ClassNames(classes.wrapper)}>
                <TextField
                    autoComplete={autoComplete}
                    id={id}
                    //label={label_langKey ? intl.formatMessage({ id: label_langKey }) : label}
                    //placeholder={placeholder_langKey ? intl.formatMessage({ id: placeholder_langKey }) : placeholder}
                    className={variant === "outlined" ? classes.outlined : classes.textField}
                    value={value}
                    onChange={onChange}
                    margin="normal"
                    multiline={multiline}
                    rows={rows}
                    disabled={disabled}
                    onKeyDown={this.keyPress}
                    onFocus={this.props.onFocus}
                    onBlur={allowBlur && onBlur}
                    InputProps={{
                        endAdornment: (
                            <div className={ClassNames(classes.flexRow, classes.endAdorns)}>
                                {!anchorEl && (onClear && value && (!isSelect || value !== "Select")) && !disabled &&
                                    <InputAdornment position="end" onClick={this.handleClear} className={classes.clearDiv}>
                                        X
                                    </InputAdornment>
                                }
                                {onSearch && !disabled &&
                                    <InputAdornment position="end" onClick={onSearch}>
                                        <SearchIcon className={ClassNames(classes.iconMedium, classes.clickable)} color="disabled" />
                                    </InputAdornment>
                                }
                                {(isSelect && setFocus) &&
                                    <span className={classes.upArrow}></span>
                                }
                                {(isSelect && !setFocus) &&
                                    <span className={classes.downArrow}></span>
                                }
                            </div>
                        ),
                        classes: {
                            input: inputClass,
                            root: whiteBg && classes.bgColor2
                        }
                    }}
                    InputLabelProps={{
                        FormLabelClasses: {
                            asterisk: classes.asterisk,
                        },
                        classes: {
                            outlined: setFocus ? classes.inputLabelOutlinedFocussed : classes.inputLabelOutlined
                        }
                    }}
                    error={Boolean(error)}
                    helperText={helperText}
                    required={Boolean(required)}
                    variant={variant}
                    inputRef={focusInputField}
                />
            </div>
        );
    }
}


export default withStyles(styles)(TextInputRender);

