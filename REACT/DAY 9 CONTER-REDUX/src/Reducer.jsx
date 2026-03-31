import { DECREMENT, INCREMENT } from "./actionType";

const initialstate = {
    count: 0
}

export function Reducer(state = initialstate, { type, payload }) {
    switch (type) {
        
        case INCREMENT:
            return { count: state.count + payload }

        case DECREMENT:
            return { count: state.count - payload }

        default:
            return state

    }
}