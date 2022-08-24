import { NumberValueAccessor } from "@angular/forms"

export interface ExchangeRatesResponse {
    rates: {
        [key: string]: number
    },
    base: string,
    date: string
}
