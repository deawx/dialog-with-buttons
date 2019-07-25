import React from 'react';
import TextInputRender from './TextInputRender'


function TextInput(props) {
    const { required, helperText, error } = props;
    let isRequired = false;

    if (required !== null && required !== undefined) {
        isRequired = required;
    }

    return (
        <TextInputRender
            title={props.title}
            id={props.id}
            setFocus={props.setFocus}
            error={Boolean(error)}
            helperText={helperText}
            required={Boolean(isRequired)}
            label={props.label}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            multiline={props.multiline}
            onBlur={props.onBlur}
            rows={props.rows}
            disabled={props.disabled}
            onClear={props.onClear}
            variant={props.variant}
            isSelect={props.isSelect}
            label_langKey={props.label_langKey}
            placeholder_langKey={props.placeholder_langKey}
            whiteBg={props.whiteBg}
            onSearch={props.onSearch}
            anchorEl={props.anchorEl}
            highlight={props.highlight}
            onFocus={props.onFocus}
            autoComplete={props.autoComplete}
            allowBlur={props.allowBlur}
        />
    );
}


export default TextInput;