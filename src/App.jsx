import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const [students, setStudents] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim()) return;

        if (editIndex !== null) {
            const updated = [...students];
            updated[editIndex].name = name;
            setStudents(updated);
            setEditIndex(null);
            setName("");
            return;
        }

        setStudents([...students, { id: Date.now(), name }]);

        setName("");
    };

    const handleEdit = (index) => {
        setName(students[index].name);
        setEditIndex(index);
    };

    const handleDelete = (id) => {
        setStudents(students.filter((s) => s.id !== id));
    };

    return (
        <div style={{ width: "500px", margin: "100px auto", color: 'white' }}>
            <h2>CRUD - useState bilan</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ism kiriting..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        padding: "8px",
                        width: "100%",
                        marginBottom: "10px",
                    }}
                />
                <button type="submit" style={{ padding: "8px", width: "100%" }}>
                    {editIndex !== null ? "Saqlash" : "Qo'shish"}
                </button>
            </form>

            <ul>
                {students.map((student, index) => (
                    <li
                        key={student.id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "8px",
                            background: "#00a1b6ff",
                            marginTop: "8px",
                        }}
                    >
                        {student.name}

                        <div>
                            <button onClick={() => handleEdit(index)}>
                                ✏️ Edit
                            </button>
                            <button
                                onClick={() => handleDelete(student.id)}
                                style={{ marginLeft: "8px", color: "red" }}
                            >
                                🗑 Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
