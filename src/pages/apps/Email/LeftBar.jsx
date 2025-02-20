import { Link } from "react-router-dom";
const LeftBar = ({ totalUnreadEmails, showAllEmails, showStarredEmails }) => {
  return (
    <>
      <div className="mail-list mt-4">
        <Link
          to="#"
          className="text-danger font-14 fw-bold"
          onClick={showAllEmails}
        >
          <i className="dripicons-inbox me-2"></i>Inbox
          <span className="badge bg-soft-danger text-danger float-end ms-2">
            {totalUnreadEmails}
          </span>
        </Link>
        <Link to="#" className="font-14" onClick={showStarredEmails}>
          <i className="dripicons-star me-2"></i>Starred
        </Link>
        <Link to="#" className="font-14">
          <i className="dripicons-clock me-2"></i>Snoozed
        </Link>
        <Link to="#" className="font-14">
          <i className="dripicons-document me-2"></i>Draft
          <span className="badge bg-soft-info text-info float-end ms-2">
            32
          </span>
        </Link>
        <Link to="#" className="font-14">
          <i className="dripicons-exit me-2"></i>Sent Mail
        </Link>
        <Link to="#" className="font-14">
          <i className="dripicons-trash me-2"></i>Trash
        </Link>
        <Link to="#" className="font-14">
          <i className="dripicons-tag me-2"></i>Important
        </Link>
        <Link to="#" className="font-14">
          <i className="dripicons-warning me-2"></i>Spam
        </Link>
      </div>

      <h6 className="mt-4">Labels</h6>

      <div className="list-group b-0 mail-list">
        <Link to="#" className="list-group-item border-0 font-14">
          <span className="mdi mdi-circle text-info me-2"></span>Web App
        </Link>
        <Link to="#" className="list-group-item border-0 font-14">
          <span className="mdi mdi-circle text-warning me-2"></span>Recharge
        </Link>
        <Link to="#" className="list-group-item border-0 font-14">
          <span className="mdi mdi-circle text-dark me-2"></span>Wallet Balance
        </Link>
        <Link to="#" className="list-group-item border-0 font-14">
          <span className="mdi mdi-circle text-primary me-2"></span>Friends
        </Link>
        <Link to="#" className="list-group-item border-0 font-14">
          <span className="mdi mdi-circle text-success me-2"></span>Family
        </Link>
      </div>
    </>
  );
};
export default LeftBar;
