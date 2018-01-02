import React from 'react'
import moment from 'moment'
import GridItemRow from "../GridItemRow"

const FailedJobList = ({data : {failedJobs, error, loading }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return <div>
    {failedJobs && failedJobs.map((j, index) => {
      let payload = {}

      try {
        payload =JSON.parse(j.payload)
      } catch(e) {
      }

      return <GridItemRow index={index} key={index}>
        <div className="flex w-full">
          <div className="flex-1">
            <h5>{payload.displayName}</h5>
          </div>
          <div className="flex-2">
            <h5>{moment(j["failed_at"]).fromNow()}</h5>
          </div>
        </div>
      </GridItemRow>
    }
  )}</div>
}

export default FailedJobList