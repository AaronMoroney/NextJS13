//generate a 404 page if they land on page w/ ticket doesn't exist
import { notFound } from "next/navigation"

/*
for new requests to an id with non-exisiting static page, 
next, will try to run a new fetch, find it, cache it, and serve it 
*/
export const dynamicParams = true

export async function generateStaticParams() {
    //get a list of ids = of all tickets at buildtime so can build the routes in cache
   const res = await fetch('http://localhost:4000/tickets')
   const tickets = await res.json()
   
   return tickets.map((ticket) => ({ 
        id: ticket.id 
   }))
}

//keep data outside of the main comp for cleanliness
async function getTicket(id) {
    const response = await fetch('http://localHost:4000/tickets/' + id, {
        next: {
            revalidate: 60
        }
    }) 

    if (!response.ok) {
        notFound()
    }
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
