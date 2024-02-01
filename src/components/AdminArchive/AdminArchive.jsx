import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./AdminArchive.css";

export default function AdminArchive({}) {
  useEffect(() => {
    dispatch({ type: "FETCH_ARCHIVED_EVENTS" });
    dispatch({ type: "FETCH_TAGS" });
    window.scrollTo(0, 0);
  }, []);

  let [tagName, setTagName] = useState('');

  const events = useSelector((store) => store.archived);
  const tags = useSelector((store) => store.tags);
  console.log("events", events);

  const history = useHistory();
  const dispatch = useDispatch();

  const deleteTag = (tag) => {
    dispatch({
      type: "DELETE_TAG",
      payload: tag,
    });
  };
    
    const newTag = (event) => {
        event.preventDefault();

        dispatch({
            type: "ADD_TAGS", payload: {
              tag_name: tagName
            }
        });
        setTagName('')
      

    };



  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Host</th>
            <th>Event Name</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => {
            return (
              <tr key={event.id}>
                <td>{event.host}</td>
                <td>{event.event_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Tag Name</th>
            <th>Delete/Edit</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((tag) => {
            return (
              <tr key={tag.id}>
                <td>{tag.tag_name}</td>
                <td>
                  <button onClick={() => deleteTag(tag)}>delete</button>{" "}
                  <button>edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
          </table>
          <input
              type="text"
              value={tagName}
              placeholder="Zip"
              onChange={(event) => setTagName(event.target.value)}
          />
          <button onClick={newTag} >Add Tag</button>
          
    </div>
  );
}
