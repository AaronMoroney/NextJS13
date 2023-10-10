//keep data outside of the main comp for cleanliness
async function getTicket(id) {
    const response = await fetch('http://localHost:4000/tickets/' + id, {
        next: {
            revalidate: 30
        }
    }) 
    return response.json(); 
}

export default async function TicketDetails({params}) {
  const ticket = await getTicket(params.id)
  return (
    <main>
        <nav>
        <div className="card">
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
        </div>
        </nav>
        
    </main>
  )
}
