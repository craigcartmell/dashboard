import React from 'react'
import moment from 'moment'
import styles from './failed-job-list.css'

const FailedJobList = ({data : {failedJobs, error, loading }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return <div className={styles.list}>
    {failedJobs && failedJobs.map((j, k) => {
      let payload = {}

      try {
        payload =JSON.parse(j.payload)
      } catch(e) {
      }

      return <div className="w-full flex-1" key={k}>
        <div style={{float: 'left', marginBottom: '14px'}}>
          <h5>{payload.displayName}</h5>
        </div>
        <div style={{float: 'right'}}>
          <h5>{moment(j["failed_at"]).fromNow()}</h5>
        </div>
      </div>
    }
  )}</div>
}

export default FailedJobList