export const ActionType = {
    CHANGE_INFORMATION : 'main/calculator',
  };

  
export const setInformation = (info) => ({
    type: ActionType.CHANGE_INFORMATION,
    payload: info
});
