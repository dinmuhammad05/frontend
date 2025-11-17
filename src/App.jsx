import { useSelector, useDispatch } from "react-redux";
import { addUser, editUser, removeUser } from "./store/reducer/user-reducer";
import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

function App() {
    const { count, userList } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const { handleSubmit, reset, register } = useForm();

    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState("");

    const handler = (data) => {
        dispatch(addUser({ ...data, id: nanoid() }));
        reset();
    };

    const saveEdit = (id) => {
        dispatch(editUser({ id, data: { userName: editValue } }));
        setEditId(null);
        setEditValue("");
    };

    const removeUserFn = (id) => {
        dispatch(removeUser(id));
    };

    return (
        <>
            <h1>{count}</h1>

            <form onSubmit={handleSubmit(handler)}>
                <input type="text" {...register("userName")} />
                <button type="submit">send</button>
            </form>

            <div>
                {userList.map((item) => (
                    <div key={item.id}>
                        {editId === item.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={(e) =>
                                        setEditValue(e.target.value)
                                    }
                                />
                                <button onClick={() => saveEdit(item.id)}>
                                    save
                                </button>
                                <button onClick={() => setEditId(null)}>
                                    cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <h1>{item.userName}</h1>

                                <button onClick={() => removeUserFn(item.id)}>
                                    remove
                                </button>

                                <button
                                    onClick={() => {
                                        setEditId(item.id);
                                        setEditValue(item.userName);
                                    }}
                                >
                                    edit
                                </button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
