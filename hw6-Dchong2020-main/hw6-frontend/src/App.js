import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"

          
        >
          Learn React
        </a>

      
      </header>


     
    <h2> Create New Student</h2>
    <form action="/students" method="post"></form>
    <label for="first_name">First Name</label>
    <input type="text" id="first_name" name="first_name" value=""></input>

    <label for="last_name">Last Name</label>
    <input type="text" id="last_name" name="last_name" value=""></input>

    <label for="gpa">GPA: </label>
    <input type="text" id="gpa" name="gpa" value=""></input>

    <label for="enrolled">Enrolled(True/False)</label>
    <input type="text" id="enrolled" name="enrolled" value=""></input>

    <input type="submit" value="submit"></input>
 

  <h2>Get Student by ID</h2>
  <label for= "record_id">Record ID</label>
  <input type= "text" id ="record_id" name="record_id" value=""></input>
  
  <button onclick="getStudentById()">Get Student</button>
  
  <div id="student_result" name="student_result"></div>

  <h2>Delete Student</h2>
  <label for= "delete_id">Record ID</label>
  <input type= "text" id ="delete_id" name="delete_id" value=""></input>
  
  <button onclick="deleteStudent()">Delete Student</button>
 
  <div id="delete_message" name="delete_message"></div>
 

   
</div>
  );
}

export default App;
