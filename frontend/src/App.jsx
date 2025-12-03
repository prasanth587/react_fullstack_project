import React, { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "";

function App() {
  const [form1, setForm1] = useState({ name: "", email: "" });
  const [form2, setForm2] = useState({ username: "", message: "" });
  const [status1, setStatus1] = useState("");
  const [status2, setStatus2] = useState("");

  async function handleSubmit1(e) {
    e.preventDefault();
    setStatus1("Submitting...");

    try {
      const res = await fetch(`${API_URL}/api/form1`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form1),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus1(`Error: ${data.message || res.statusText}`);
      } else {
        setStatus1(data.message || "Form 1 saved");
        setForm1({ name: "", email: "" });
      }
    } catch (err) {
      console.error(err);
      setStatus1("Network error");
    }
  }

  async function handleSubmit2(e) {
    e.preventDefault();
    setStatus2("Submitting...");

    try {
      const res = await fetch(`${API_URL}/api/form2`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form2),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus2(`Error: ${data.message || res.statusText}`);
      } else {
        setStatus2(data.message || "Form 2 saved");
        setForm2({ username: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setStatus2("Network error");
    }
  }

  return (
    <div className="app">
      <h1>Fullstack Dev Project (React + Express + MySQL)</h1>

      <div className="forms">
        <form className="card" onSubmit={handleSubmit1}>
          <h2>Form 1</h2>
          <label>
            Name
            <input
              value={form1.name}
              onChange={(e) => setForm1({ ...form1, name: e.target.value })}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={form1.email}
              onChange={(e) =>
                setForm1({ ...form1, email: e.target.value })
              }
              required
            />
          </label>
          <button type="submit">Submit Form 1</button>
          <p className="status">{status1}</p>
        </form>

        <form className="card" onSubmit={handleSubmit2}>
          <h2>Form 2</h2>
          <label>
            Username
            <input
              value={form2.username}
              onChange={(e) =>
                setForm2({ ...form2, username: e.target.value })
              }
              required
            />
          </label>
          <label>
            Message
            <textarea
              rows="4"
              value={form2.message}
              onChange={(e) =>
                setForm2({ ...form2, message: e.target.value })
              }
              required
            />
          </label>
          <button type="submit">Submit Form 2</button>
          <p className="status">{status2}</p>
        </form>
      </div>
    </div>
  );
}

export default App;
