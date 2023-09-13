import React from 'react'

function Card({
    head,
    headIn,
    paragraph,
    component,
    queries,
    templates,
    img
}) {
    return (
        <div className='card'>
            <div className='card-left'>
                <h1>Get <span className='headin'> {headIn} </span>{head}</h1>
                <p>{paragraph}</p>
                <div className='card-table'>
                    <div className='component'>
                        <span className='text-3xl font-bold font-sans text-text sm:text-4xl'>{component.count}</span>
                        <span className='text-paragraph text-lg font-mono tracking-wider font-medium mt-1 
                        sm:text-lg ' >{component.name}</span>
                    </div>
                    <div className='templates'>
                        <span className='text-3xl font-bold font-sans text-text
                        sm:text-4xl
                        '>{templates.count}</span>
                        <span className='text-paragraph text-lg font-mono tracking-wider font-medium mt-1 sm:text-lg 
                        sm:text-lg'>{templates.name}</span>
                    </div>
                    <div className='queries text-left'>
                        <span className='text-3xl font-bold font-sans text-text sm:text-4xl'>{queries.count}</span>
                        <span className='text-paragraph text-lg font-mono tracking-wider font-medium mt-1 sm:text-lg'>{queries.name}</span>
                    </div>
                </div>
            </div>
            <div className='w-full h-full bg-filter'>
                <img src={img} alt={img} />
            </div>
        </div>
    )
}

export default Card
