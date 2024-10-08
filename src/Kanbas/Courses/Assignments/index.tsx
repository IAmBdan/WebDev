import React from 'react';
import { FaSearch, FaPlus, FaEllipsisV, FaCheckCircle } from 'react-icons/fa';
import { BsGripVertical } from 'react-icons/bs';
import { GiNotebook } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const AssignmentsScreen = () => {
  const assignments = [
    { id: 'A1', title: 'HW1', availableFrom: 'May 6', dueDate: 'May 13', points: 50 },
    { id: 'A2', title: 'Quiz 1', availableFrom: 'May 13', dueDate: 'May 20', points: 100 },
    { id: 'A3', title: 'HW 2', availableFrom: 'May 20', dueDate: 'May 27', points: 50 },
    { id: 'A4', title: 'Quiz 2', availableFrom: 'May 27', dueDate: 'June 3', points: 100 },
    { id: 'A5', title: 'HW3', availableFrom: 'June 3', dueDate: 'June 10', points: 50 },
  ];

  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <FaSearch className="text-muted" />
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="col-auto">
          <button className="btn btn-light me-2">
            <FaPlus /> Group
          </button>
          <button className="btn btn-danger">
            <FaPlus /> Assignment
          </button>
        </div>
      </div>
      
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            <BsGripVertical className="me-2" />
            ASSIGNMENTS
          </h5>
          <div>
          <span className="text-muted me-2 px-2 py-1" style={{
              border: '1px solid #ccc',
              borderRadius: '15px',
              backgroundColor: 'rgba(0,0,0,0.05)'
            }}>40% of Total</span>
            <button className="btn btn-link p-0 text-secondary">
              <FaPlus />
            </button>
            <button className="btn btn-link p-0 ms-2 text-secondary">
              <FaEllipsisV />
            </button>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          {assignments.map((assignment, index) => (
            <li key={index} className="list-group-item">
              <div className="d-flex align-items-center">
                <div className="me-3" style={{ borderLeft: '5px ', height: '100%' }}></div>
                <BsGripVertical className="me-1" style={{ fontSize: '1.5rem' }} />
                <GiNotebook className="me-3" style={{ fontSize: '1.5rem', color: 'green' }} />
                <div>
                <h6 className="mb-0">{assignment.id}</h6>
                  <Link to={`/Kanbas/Courses/Assignments/Editor`} className="text-danger">
                    {assignment.title}
                  </Link>{' '}
                  |{' '}
                  <small className="text-muted">
                    Not available until {assignment.availableFrom} at 12:00am
                  </small>
                  <br />
                  <small className="text-muted">
                    Due {assignment.dueDate} at 11:59pm | {assignment.points} pts
                  </small>
                </div>
                <FaCheckCircle className="ms-auto text-success" />
                <button className="btn btn-link p-0 ms-2 text-secondary">
                  <FaEllipsisV />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AssignmentsScreen;