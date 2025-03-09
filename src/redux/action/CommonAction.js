import { COLOR_PICKER_SET } from "../actionType/CommonTypes";

export const color_picker_set_action = (data) => dispatch => { 
      dispatch({ type: COLOR_PICKER_SET, colorrdata: data });
}

