import React from 'react';
import { LineChart } from "react-native-gifted-charts";

const Graph = (props) => {
    const { height, initialSpacing, data, spacing, textColor1, textShiftY, textShiftX, textFontSize, thickness, yAxisColor, verticalLinesColor, xAxisColor, color, isAnimated, yAxisTextStyle } = props
    return (
        <>
            <LineChart
                height={height}
                initialSpacing={initialSpacing}
                data={data}
                spacing={spacing}
                textColor1={textColor1}
                textShiftY={textShiftY}
                textShiftX={textShiftX}
                textFontSize={textFontSize}
                thickness={thickness}
                hideRules
                yAxisColor={yAxisColor}
                showVerticalLines
                verticalLinesColor={verticalLinesColor}
                xAxisColor={xAxisColor}
                color={color}
                isAnimated={isAnimated}
                yAxisTextStyle={yAxisTextStyle}
            />
        </>
    )
}

export default Graph