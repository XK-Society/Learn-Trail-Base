import React from 'react'
import ranks from '../../Data/RankListData'

const RankList = () => {
  return (
    <div className="p-4">
        <div className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            {ranks.map((rank) => (
                <div key={rank.id} className="flex items-center space-x-4 rtl:space-x-reverse">
                    <h2 >{rank.number}</h2>
                    <img src={rank.profile} className="w-8 h-8 rounded-full" />
                    <h2>{rank.exp}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RankList;