const CHANGE_IS_OPEN = 'CHANGE_IS_OPEN';

export type StateType = {
    isOpen: boolean,
};
type ActionType = {
    type: typeof CHANGE_IS_OPEN,

};
export const reducer = (state: StateType, action: ActionType): StateType => {

    switch (action.type) {
        case CHANGE_IS_OPEN: {
            return {...state, isOpen: !state.isOpen};
        }
    }
    return state;
};


export const changeIsOpenAC = () => ({type: CHANGE_IS_OPEN } as const);