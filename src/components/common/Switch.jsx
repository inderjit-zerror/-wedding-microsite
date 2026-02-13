import React from 'react'

const Switch = () => {

    return (
        <div className='w-full h-screen fixed top-0 left-0 pointer-events-none z-[200]'>
            {
                Array.from({ length: 10 }).map((_, i) => {
                    return(
                        <div key={i} className='w-full h-1/10 overflow-hidden flex justify-end items-end pointer-events-none' >
                            <div className='w-full h-[0%] SWITCHLINE COLOR_BG_RED flex pointer-events-none '>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Switch
