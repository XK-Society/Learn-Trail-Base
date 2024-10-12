import React from 'react'
import Rank from '../../assets/learn-trail/rank.png'
import LockRank from '../../assets/learn-trail/lock-rank.png'

const RankBadge = () => {
  return (
    <div className="p-4">
      <div className="pt-1 border-dashed border-2 border-bgBox rounded-lg shadow-md">
        <div className="flex justify-between px-4">
          <img src={Rank} className="w-20 h-20"/>
          <img src={LockRank} className="w-20 h-20"/>
          <img src={LockRank} className="w-20 h-20"/>
          <img src={LockRank} className="w-20 h-20"/>
          <img src={LockRank} className="w-20 h-20"/>
        </div>
        <h2 className="pl-4">Wooden League</h2>
      </div>
    </div>
  )
}

export default RankBadge