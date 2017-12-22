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

      return <div className={styles.listItem} key={k}>
        <div className="flex w-full flex-no-wrap px-4 py-4 h-200">
          <div className="flex-1">
            <h5>{payload.displayName}</h5>
          </div>
          <div className="flex-2">
            <h5>{moment(j["failed_at"]).fromNow()}</h5>
          </div>
        </div>
      </div>
    }
  )}</div>
}

export default FailedJobList