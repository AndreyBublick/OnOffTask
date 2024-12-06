import {changeIsOpenAC, reducer, StateType} from "./reducer";


test('collapse should be true', () => {

    const state:StateType = {
    isOpen:false
    };

      expect(reducer(state,changeIsOpenAC()).isOpen).toBe(true);

});
test('collapse should be false', () => {

    const state:StateType = {
        isOpen:true
    };

    expect(reducer(state,changeIsOpenAC()).isOpen).toBe(false);

});

export {};