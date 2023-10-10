import Link from "next/link";

//keep data outside of the main comp for cleanliness
async function getTickets() {
    //imitate delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    const response = await fetch('http://localHost:4000/tickets', {
        next: {
            revalidate: 0
        }
    }) 
    return response.json(); 
}

//all this data is running on the server 
export default async function TicketsList() {
    const tickets = await getTickets();
    return (
        <>
            {tickets.map((ticket) => (
                <div key={ticket.id} className="card my-5">
                    <Link href={`/tickets/${ticket.id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority}
                        </div>
                    </Link>
                </div>
            ))}
            {tickets.length === 0 && (
                <p className="text-center">there are no tickets! yay🤓</p>
            )}
        </>
    )
}

//dynamic routing 