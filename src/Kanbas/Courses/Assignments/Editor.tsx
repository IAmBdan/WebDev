import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input id="wd-name" className="form-control" defaultValue="A1" />
        </div>

        <div className="mb-3">
          <textarea id="wd-description" className="form-control" rows={4} defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page." />
        </div>

        <div className="row justify-content-end">
          <div className="col-md-6">
            <div className="mb-3 row">
              <label htmlFor="wd-points" className="col-sm-4 col-form-label text-end">Points</label>
              <div className="col-sm-8">
                <input id="wd-points" className="form-control" type="number" defaultValue={100} />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="wd-group" className="col-sm-4 col-form-label text-end">Assignment Group</label>
              <div className="col-sm-8">
                <select id="wd-group" className="form-control">
                  <option>ASSIGNMENTS</option>
                  <option>Quizzes</option>
                  <option>Exams</option>
                  <option>Projects</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="wd-display-grade-as" className="col-sm-4 col-form-label text-end">Display Grade as</label>
              <div className="col-sm-8">
                <select id="wd-display-grade-as" className="form-control">
                  <option>Percentage</option>
                  <option>Points</option>
                  <option>Letter Grade</option>
                  <option>Complete/Incomplete</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label text-end">Submission Type</label>
              <div className="col-sm-8">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-3">
                      <select id="wd-submission-type" className="form-control">
                        <option>Online</option>
                        <option>Paper</option>
                        <option>No Submission</option>
                      </select>
                    </div>
                    <div>
                      <p className="mb-2">Online Entry Options</p>
                      <div className="form-check">
                        <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                        <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                      </div>
                      <div className="form-check">
                        <input type="checkbox" id="wd-website-url" className="form-check-input" defaultChecked />
                        <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                      </div>
                      <div className="form-check">
                        <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                        <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                      </div>
                      <div className="form-check">
                        <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                        <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                      </div>
                      <div className="form-check">
                        <input type="checkbox" id="wd-file-uploads" className="form-check-input" />
                        <label htmlFor="wd-file-uploads" className="form-check-label">File Uploads</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label text-end">Assign</label>
              <div className="col-sm-8">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-3">
                      <input id="wd-assign-to" className="form-control" defaultValue="Everyone" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="wd-due-date" className="form-label">Due</label>
                      <input type="datetime-local" id="wd-due-date" className="form-control" defaultValue="2024-05-13T23:59" />
                    </div>
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="wd-available-from" className="form-label">Available from</label>
                        <input type="datetime-local" id="wd-available-from" className="form-control" defaultValue="2024-05-06T00:00" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="wd-available-until" className="form-label">Until</label>
                        <input type="datetime-local" id="wd-available-until" className="form-control" />
                      </div>
                      </div></div>
                      </div></div>
                      </div>



            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-secondary me-2">Cancel</button>
              <button type="submit" className="btn btn-danger">Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}