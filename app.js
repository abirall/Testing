import React, { useState } from 'react';

const initialEmployees = [
  { id: 1, name: 'John Doe', role: 'Frontend Developer', department: 'Engineering', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', role: 'UI/UX Designer', department: 'Design', email: 'jane@example.com' },
  { id: 3, name: 'Michael Lee', role: 'Backend Developer', department: 'Engineering', email: 'michael@example.com' },
  { id: 4, name: 'Emily Johnson', role: 'HR Manager', department: 'Human Resources', email: 'emily@example.com' },
];

function App() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [search, setSearch] = useState('');

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Employee Directory</h1>

      <input
        type="text"
        placeholder="Search by name..."
        style={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={styles.list}>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <div key={employee.id} style={styles.card}>
              <h3>{employee.name}</h3>
              <p><strong>Role:</strong> {employee.role}</p>
              <p><strong>Department:</strong> {employee.department}</p>
              <p><strong>Email:</strong> {employee.email}</p>
            </div>
          ))
        ) : (
          <p>No employees found.</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1.5rem',
    fontSize: '1rem',
  },
  list: {
    display: 'grid',
    gap: '1rem',
  },
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
};

export default App;
