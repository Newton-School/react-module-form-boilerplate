import React, { useEffect, useState } from "react";

function FormA({ onSubmit, age }) {
  const handleSubmit = (event) => {
  };
  return (
    <form id="dc" onSubmit={handleSubmit}>
      <h2>Form A</h2>
      <label>
        Select DC Shows:
        <select  >
          <option value="">--Select--</option>
          <option value="The Flash">The Flash</option>
          <option value="Arrow">Arrow</option>
          <option value="Supergirl">Supergirl</option>
          <option value="Legends of Tomorrow">Legends of Tomorrow</option>
        </select>
      </label>
      <br />
      <label>
        Enter your age:
        <input type="number" value={age} disabled />
      </label>
      <br />
      <button id="submit-dc" type="submit">Submit</button>

    </form>
  );
}

function FormB({ onSubmit, age }) {
  const [marvelShows, setMarvelShows] = useState("");

  const handleSubmit = (event) => {
  };



  return (
    <form id="marvel" >
      <h2>Form B</h2>
      <label>
        Select Marvel Shows:
        <select  >
          <option value="">--Select--</option>
          <option value="WandaVision">WandaVision</option>
          <option value="The Falcon and the Winter Soldier">
            The Falcon and the Winter Soldier
          </option>
          <option value="Loki">Loki</option>
          <option value="What If...?">What If...?</option>
        </select>
      </label>
      <br />
      <label>
        Enter your age:
        <input type="number" value={age} disabled />
      </label>
      <br />
      <button id="submit-marvel" type="submit">Submit</button>
    </form>
  );
}

function Summary({ formData }) {
  return (
    <div id="summary">
      <h2>Summary</h2>
      <p>Form Type: </p>
      <p>Age: </p>

      <p>DC Shows: </p>

      <p>Marvel Shows: </p>

    </div>
  );
}

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [age, setAge] = useState("");








  return (
    <div>
      {(step === 1 || !age) && (
        <div id="start-page">

          <h1>Step 1: Select Form Type and Enter Age</h1>
          <label>
            Enter your age:
            <input value={age} />
          </label>
          <br />
          <label>
            Select Form Type:
            <select onChange={(e) => setStep(parseInt(e.target.value))}>
              <option value={1}>--Select--</option>
              <option value={2}>Form A</option>
              <option value={3}>Form B</option>
            </select>
          </label>
          <br />


        </div>
      )}
      {step === 2 && (
        <div>
          <FormA age={age} />
        </div>
      )}
      {step === 3 && (
        <div>
          <FormB age={age} />
        </div>
      )}
      {(step === 2 || step === 3) && age ? (
        <button id="go-back" onClick={() => setStep(1)}>Go Back</button>
      ) : null}

      {step === 4 && (
        <div>
          <Summary />
          <button id="start-over">Start Over</button>
        </div>
      )}
    </div>
  );
}

export default App;