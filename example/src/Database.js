import React, { useState, useEffect } from "react";
import { useUserbase } from "./src";

export const Database = () => {
    const [inputValue, setInputValue] = useState(null);
    const [dbItems, setDbItems] = useState(null);

    const databaseName = "todos";

    const [
        openTodoDb,
        { response: openResponse, loading: openingDb, error: openError }
    ] = useUserbase("openDatabase", {
        databaseName: databaseName,
        changeHandler: items => setDbItems(items)
    });

    const [addItem, { response, loading, error }] = useUserbase("insertItem", {
        databaseName
    });

    // open the DB on load
    useEffect(() => {
        openTodoDb().then(() => console.log("Opened Todo Database!"));
    }, []);

    useEffect(() => {
        console.log(dbItems);
    }, [dbItems]);

    if (openingDb) return <h1>Loading...</h1>;
    return (
        <div className={"database"}>
            New Todo:{" "}
            <input
                value={inputValue || ""}
                onChange={event => setInputValue(event.target.value)}
                style={{ marginTop: "20px" }}
            />
            <button onClick={() => addItem({ item: inputValue })}>
                Add item
            </button>
            <br />
            {dbItems ? (
                <ol
                    style={{ maxWidth: 300, margin: "auto", marginTop: "10px" }}
                >
                    {dbItems.map(record => (
                        <li key={record.itemId}>{record.item}</li>
                    ))}
                </ol>
            ) : null}
        </div>
    );
};
