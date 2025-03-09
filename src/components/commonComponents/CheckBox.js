import React from "react";
import CheckBox from '@react-native-community/checkbox';
import {Colors} from '../../utils';
import {Style} from '../../styles';

function CheckBoxset(props) {
    const { value, onValueChange, disabled, status, } = props;
    return (
        <CheckBox
            status={status}
            disabled={disabled}
            style={Style.CheckBoxView}
            value={value}
            onValueChange={onValueChange}
            tintColors={{ true: Colors.theme_background, false: Colors.theme_background }}
        />
    );
};
export default CheckBoxset;