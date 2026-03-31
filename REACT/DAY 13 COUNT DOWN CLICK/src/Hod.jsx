import { useState } from "react"


export function withCounter(WrappedComponent) {
    return function EnhancedComponent() {

        const [count, setcount] = useState(0)

        const increment = () => {
            setcount(count + 1)
        }

        return (
            <>
                <WrappedComponent increment={increment} count={count}></WrappedComponent>
            </>
        )
    }
}