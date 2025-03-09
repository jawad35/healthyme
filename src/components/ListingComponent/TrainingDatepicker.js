import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DatePicker, VectoreIcons } from '../../components';
import moment from 'moment';
import { Style } from '../../styles';
import { SF, Colors } from '../../utils';

const TrainingDatepicker = () => {
    let currentDate = moment().format('Do MMM');
    const [date, setDate] = useState(currentDate);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const DateChange = (event, todayDate) => {
        const currentDate = todayDate || date;
        setShow(false);
        setDate(moment(currentDate, 'Do MMM').format('Do MMM'));
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };
    return (
        <View style={Style.FlexRowAlCen}>
            <VectoreIcons icon="Feather" name="calendar" size={SF(18)} color={Colors.theme_background} />
            <View>
                <Text style={Style.DateText} onPress={() => { showDatepicker(); }}>{date}</Text>
            </View>
            <View>
                {show && (
                    <DatePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={new Date()}
                        mode={mode}
                        is24Hour={true}
                        display={"default"}
                        onChange={DateChange}
                    />
                )}
            </View>
        </View>
    )
}

export default TrainingDatepicker