import React from 'react'
import Nav from '../component/Nav'
import { categories } from '../category'

function Home() {
    return (
        <div className='bg-slate-200 w-full min-h-screen'>
           <Nav />
           <div>
                {categories.map((item)=>{
                    return <div key={item.id}>
                        {item.name}
                        {item.icon}
                    </div>
                })}
           </div>
        </div>
    )
}

export default Home
