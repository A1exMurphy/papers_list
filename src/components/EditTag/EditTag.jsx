import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function EditTags() {

    const EditTag = useSelector((store) => store.editTag)
    console.log('EditTag',EditTag);

    const dispatch = useDispatch()

    const history = useHistory()

    const params = useParams()

    console.log('params', params.id);

    useEffect(() => {
          dispatch({
              type: "FETCH_TAG_TO_EDIT",
              payload: params.id
          });
        window.scrollTo(0, 0);
    }, []);

    const handleTagNameChange = (tag_name) => {
        dispatch({
            type: 'CHANGE_TAG_NAME',
            payload: tag_name
        })
    }

    const applyEdits = (e) => {
        e.preventDefault()

        dispatch({
            type: "SUBMIT_EDIT_TAG",
            payload: EditTag

        })
history.push("/eventarchive")
    }

    return (
        <div>
            <form>
            <input
                className="input"
                id="outlined-controlled"
                type='onSubmit'
                value={EditTag.tag_name || ''}
                onChange={(e) => handleTagNameChange(e.target.value)}
                />
                <button onClick={applyEdits}>Submit</button>
            </form>
        </div>
    )



}