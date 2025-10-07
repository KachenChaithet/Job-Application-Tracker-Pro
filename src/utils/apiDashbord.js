import moment from "moment"

export const apiDashbord = ({ data = [] }) => {
    const counts = {
        label: ["Pending", "Interviewing", "Offer", "Rejected"],
        total: data.length,
        Pending: data.filter(a => a.status === "Pending").length,
        Interview: data.filter(a => a.status === "Interviewing").length,
        Offer: data.filter(a => a.status === "Offer").length,
        Rejected: data.filter(a => a.status === "Rejected").length,
    }


    return counts
}


export const getLast30DaysData = ({ data = [] }) => {
  const today = moment()
  const thirtyDaysAgo = moment().subtract(29, "days")
  const last30Days = []

  for (let i = 0; i < 30; i++) {
    const day = moment(thirtyDaysAgo).add(i, "days")
    const dayStr = day.format("YYYY-MM-DD")

    const dayData = {
      date: dayStr,
      Pending: data.filter(j => j.status === "Pending" && moment(j.date).format("YYYY-MM-DD") === dayStr).length,
      Interviewing: data.filter(j => j.status === "Interviewing" && moment(j.date).format("YYYY-MM-DD") === dayStr).length,
      Offer: data.filter(j => j.status === "Offer" && moment(j.date).format("YYYY-MM-DD") === dayStr).length,
      Rejected: data.filter(j => j.status === "Rejected" && moment(j.date).format("YYYY-MM-DD") === dayStr).length,
    }

    last30Days.push(dayData)
  }

  return last30Days
}
