import { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
    const [events, setEvents] = useState([])
    const getEvents = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/events/get-events`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            })
            if (res) {
                const gotEvents = res.data
                setEvents(gotEvents)
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getEvents()
    }, [])
    console.log(events, "ev")
    return (
        <div className="pt-14 font-serif">
            <div className="bg-rose-200 p-4 py-10">
                <p className="text-md font-bold lg:text-3xl text-center my-4">Events</p>
                <p className="text-center text-sm lg:text-sm my-2">Join us for some great times and even better food...</p>
            </div>
            <div>
                <div>
                    {events.map(e => {
                        return (<>
                            <p>{e.title}</p>
                            <p>{e.description}</p>
                        </>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default Events;
