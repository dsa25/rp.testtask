import { reactive } from "vue"

let tickets = reactive([
  {
    id: 1,
    header: "header one",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, veniam."
  },
  {
    id: 2,
    header: "header two",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, facilis."
  },
  {
    id: 3,
    header: "header three",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iusto numquam aspernatur?"
  }
])

export default function useTickets() {
  const getTickets = () => {
    if (localStorage?.tickets) {
      tickets = JSON.parse(localStorage?.tickets)
    }
  }
  const addTicket = (data) => {
    tickets.push({
      id: tickets.length + 1,
      header: data.header,
      text: data.text
    })
    localStorage.tickets = JSON.stringify(tickets)
  }
  return { tickets, getTickets, addTicket }
}
