import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function DatePicker(props) {
    const { value, mode, onChange, testID, display } = props;
    return (
        <View>
            <DateTimePicker
                testID={testID}
                value={value}
                mode={mode}
                display={display}
                onChange={onChange}
            />
        </View>
    )
}
export default DatePicker;