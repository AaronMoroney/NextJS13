import TicketsList from "./ticketsList"

export default function Tickets() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>currently open ticket</small></p>
                </div>
            </nav>
            <TicketsList />
        </main>
    )
}