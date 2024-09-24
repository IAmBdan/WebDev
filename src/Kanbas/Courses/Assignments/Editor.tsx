export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        <tr>
            <td align="right">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option>Assignments</option>
                <option>Quizzes</option>
                <option>Exams</option>
                <option>Discussion Post</option>
              </select>
            </td>
          </tr>

        <tr>
        <td align="right">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
                <option>Points</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
                <option>Paper</option>
                <option>Email</option>
                <option>Sick</option>
              </select>
            </td>
          </tr>

            <tr>
            Online Entry Options
            </tr>

          <tr>
            
            <td>
              <div>
                <input type="checkbox" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
              </div>
              <div>
                <input type="checkbox" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label>
              </div>
              <div>
                <input type="checkbox" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
              </div>
              <div>
                <input type="checkbox" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label>
              </div>
              <div>
                <input type="checkbox" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Upload</label>
              </div>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" />
            </td>
          </tr>



          <tr>
            <td align="right">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input type="date" id="wd-available-from" />
            </td>
          
          
            <td align="right">
              <label htmlFor="wd-available-until">Available Until</label>
            </td>
            <td>
              <input type="date" id="wd-available-until" />
            </td>
          </tr>

        {/* Complete on your own */}
      </table>
    </div>
);}
