import { Suspense } from "react"
import TicketsList from "./ticketsList"
//components
import Loading from '../loading'

export default function Tickets() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>currently open ticket</small></p>
                </div>
            </nav>
            <Suspense fallback={<Loading/>}>
                <TicketsList />
            </Suspense>
        </main>
    )
}