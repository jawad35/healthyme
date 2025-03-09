import React from 'react';
import RBSheet from "react-native-raw-bottom-sheet";

const RnbottumSheet = (props) => {
    const { closeOnDragDown, children, refRBSheet, closeOnPressMask, height, openDuration, animationType, customStyles } = props;
    return (
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={closeOnDragDown}
            closeOnPressMask={closeOnPressMask}
            height={height}
            openDuration={openDuration}
            animationType={animationType}
            customStyles={customStyles}
        >
            {children}
        </RBSheet>
    )
}

export default RnbottumSheet