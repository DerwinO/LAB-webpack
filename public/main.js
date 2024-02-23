import '../styles/main.scss'; // You have to import your styles for them to work. comment in this line
import houses from '../utils/sample_data/houses';
import studentsOnDom from '../utils/studentsOnDom';
import { students, voldysArmy } from '../utils/students';
import { renderToDOM } from '../utils/renderToDom';
import form from '../components/forms';
import filterBtnRow from '../utils/sample_data/filterButtons';
import events from '../utils/sample_data/events';
import header from '../components/header';

// ********** LOGIC  ********** //
// sorts student to a house and then place them in the students array


    // create the new student object
    students.push({
      id: createId(students),
      name: student.value,
      house: sortingHat.house,
      crest: sortingHat.crest
    });

    student.value = ''; // reset value of input
    studentsOnDom('#students', sortStudent);
  };








const studentAreas = () => {
  const domString = `<div id="students">No Students</div>
      <div id="voldy">No Death Eaters</div>`;

  renderToDOM('#student-container', domString);
};



// ********** HTML Components  ********** //
// the basic HMTL structure of app

// Create a new ID for the students

// add form to DOM on start-sorting click.
// Add events for form after the form is on the DOM

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
