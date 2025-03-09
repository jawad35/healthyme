import { COLOR_PICKER_SET, DATA_DETAILES_TYPE } from "../actionType/CommonTypes";
const initialState = {
  colorrdata: [],
  detailsStore: []
};
export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case COLOR_PICKER_SET:
      return {
        ...state,
        colorrdata: action.colorrdata,
      };

    case DATA_DETAILES_TYPE:
      return {
        ...state,
        detailsStore: action.data,
      };

    default: {
      return state;
    }
  }
}