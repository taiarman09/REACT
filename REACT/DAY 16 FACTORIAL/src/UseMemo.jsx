import React, { useMemo, useState } from 'react'

function UseMemo() {

    const [number, setNumber] = useState(5)


    const factorial = useMemo(() => {
        function fact(n) {
            if (n == 1 || n == 0 || n == undefined || n == null) {
                return 1
            }

            return n * fact(n - 1)
        }

        return fact(number)
    }, [number])

    return (
        <div>
            <input type="number" className='border border-black outline-none' value={number} onChange={(e) => setNumber(e.target.value)} />
            <h1>{factorial}</h1>
        </div>
    )
}

export default UseMemo
