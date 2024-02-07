


export default function AdminTables(events) {

return (
    <div className="EventsTable events-post-it">
               
                    <table>
                    <thead>
                        <tr>
                            <td>Host</td>
                            <td>Event Name</td>
                            <td>Status</td>
                            <td>Featured / Review</td>


                        </tr>
                    </thead>
                  
                        {events.map((event) => {
                            return (
                                <tr key={event.id}>
                                    <td>{event.host}</td>
                                    <td>{event.event_name}</td>
                                    <td>{event.admin_approved}</td>
                                    <td><Button onClick={() => StatusChange(event.id)}>{event.is_highlighted_event ? <StarOutlinedIcon className="star">
                                    </StarOutlinedIcon> : <StarBorderOutlinedIcon className="star"></StarBorderOutlinedIcon>}
                                    </Button> <Button onClick={() => { history.push(`/edit_event/${event.id}`) }}> <RateReviewIcon></RateReviewIcon></Button></td>

                                </tr>
                            );
                        })}
                       

                    </table>
                   
                
            </div>
)}