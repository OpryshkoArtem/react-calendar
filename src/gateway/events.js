const baseUrl = `https://61b8210264e4a10017d18dc6.mockapi.io/events`;

export const getEvents = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((events) =>
      events.map(({ id, dateFrom, dateTo, ...rest }) => ({
        id: id,
        dateFrom: new Date(dateFrom),
        dateTo: new Date(dateTo),
        ...rest,
      }))
    )
    .catch(() => alert("Server Error"));
};

export const createEvent = (events) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(events),
  }).catch(() => alert("Failed to create task. Try again later"));
};

export const deleteEvents = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).catch(() => alert("Failed to delete task"));
};

// .then(res => {
//   if (res.ok) {
//     return res.json();
//   }
// })
