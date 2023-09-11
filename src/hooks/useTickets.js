import { ref } from "vue"

let tickets = ref([
  {
    id: 1,
    header: "header one",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, veniam."
  },
  // {
  //   id: 2,
  //   header: "header two",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, facilis."
  // },
  // {
  //   id: 3,
  //   header: "header three",
  //   text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iusto numquam aspernatur?"
  // }
])

export default function useTickets() {
  const getTickets = () => {
    if (localStorage?.tickets) {
      tickets.value = JSON.parse(localStorage?.tickets)
      console.log({ tickets })
    }
  }
  const addTicket = (data) => {
    tickets.value.push({
      id: tickets.value.length + 1,
      header: data.header,
      text: data.text
    })
    localStorage.tickets = JSON.stringify(tickets.value)
  }
  return { tickets, getTickets, addTicket }
}
