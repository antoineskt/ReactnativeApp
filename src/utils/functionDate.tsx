import dayjs, { Dayjs } from 'dayjs'
import fr from 'dayjs/locale/fr'
dayjs.locale({
  ...fr,
  weekStart: 1,
})

interface OrderByDateProps {
  selectedDateFormatted: Dayjs[]
}

export const orderByDate = ({
  selectedDateFormatted,
}: OrderByDateProps): Dayjs[] => {
  return selectedDateFormatted.sort((a, b) => (a.isBefore(b) ? -1 : 1))
}
