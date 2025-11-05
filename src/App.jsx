import React from "react";
import Form from "./components/form";
import { AppContext } from "./context/app-context/app-context";
import Card from "./components/card";

function App() {
    const { data } = React.useContext(AppContext);

    return (
        <div className="container mx-auto p-4 space-y-4">
            <Form />
            {data?.userList?.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col md:flex-row gap-4 items-start"
                >
                    <Card username={item.username} id={item.id} />
                </div>
            ))}
        </div>
    );
}

export default App;
