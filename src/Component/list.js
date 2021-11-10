import React from 'react'

export const Lists = (props) => {

    const lists = [
        {
          id: Math.random(),
          value: 'to study'
        },
        {
         id: Math.random(),
         value: 'to study'
       }
      ]

    return (
        <ul>
            {lists.map(list => <li>
<span>{list.id}</span> <span>{list.value}</span>
</li>)}
        </ul>
    )
}
