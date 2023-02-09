import './App.css';
import Rafia_Khandaker_Resume from './Rafia_Khandaker_Resume.pdf';

function Resume() {

  console.log("test")

  return (
    <div className="Resume">
      <h1>Resume</h1>

      {/* <a href=" ">Download </a> */}
      {/* add a toggle if they want to view the PDF or not */}
      {/* otherwise setup a layout similar to this: https://brittanychiang.com/ */}
      <iframe src={Rafia_Khandaker_Resume} width="100%" height="600px">
      </iframe>
    </div>
  );
}

export default Resume;
