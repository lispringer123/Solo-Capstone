const readline = require('readline')
const dateFns = require('date-fns')
const format = `yyyy-MM-dd`
const today = new Date()

console.log(dateFns.format(today, format))

const apiKeyId ='PKJ5GV9QOO4H76KAO9L9'
const secretKey ='E9wJIcefOm6ai9SbCNj74ZXokkGXiAU7rbgAFUNE'

const Alpaca = require('@alpacahq/alpaca-trade-api')

const alpaca = new Alpaca({
    keyId: apiKeyId,
    secretKey: secretKey,
    paper: true,
    usePolygon: false
})

alpaca
.getClock()
.then((clock) => {
    console.log(`The market is ${clock.is_open ? 'open.' : 'closed.'}`)
})

const date = dateFns.format(today, format)
alpaca.getCalendar({
    start: date,
    end: date
}).then((calendars) => {
    console.log(calendars)
})

const { formatToTimeZone } = require('date-fns-timezone')

const timeZone = 'America/Toronto'

const edtFormat = 'YYYY-MM-DD HH:mm:ss.SSS [GMT]Z (z)'
const edtDate = formatToTimeZone(new Date(), edtFormat, { timeZone })

console.log(edtDate)

const to = dateFns.format(today, format)
today.setMonth(today.getMonth() - 3)
const from = dateFns.format(today, format)
const stock = 'AAPL'

alpaca
    .getAggregates(
        stock,
        'day',
        from,
        to
    )
    .then(data => {
        console.table(data.results)
    }).catch((e) => {
        console.log(e)
    })
