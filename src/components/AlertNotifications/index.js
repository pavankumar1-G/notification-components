// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning} from 'react-icons/md'
import {MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="alert-notification-container">
    <h1 className="main-heading">Alert Notifications</h1>
    <Notification>
      <div className="icons-content-container">
        <AiFillCheckCircle className="success-icon" />
        <div className="heading-description">
          <h1 className="success-heading">Success</h1>
          <p className="description">
            You can access all the files in the folder
          </p>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="icons-content-container">
        <RiErrorWarningFill className="error-warnning-icon" />
        <div className="heading-description">
          <h1 className="error-heading">Error</h1>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="icons-content-container">
        <MdWarning className="warnning-icon" />
        <div className="heading-description">
          <h1 className="warnning-heading">Warning</h1>
          <p className="description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="icons-content-container">
        <MdInfo className="info-icon" />
        <div className="heading-description">
          <h1 className="info-heading">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </div>
    </Notification>
  </div>
)
export default AlertNotifications
