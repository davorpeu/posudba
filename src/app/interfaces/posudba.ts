export interface Posudba {
    redniBroj: number,
    datum: Date,
    narucitelj: string,
    status: string,
    grada: string,
    udk: number,
    odsjek: string,
    knjiznica: string,
    knjiznicaInozemna: string,
    dostupno: boolean,
    datumPrimitka: Date,
    datumPovratka: Date,
    oblik: string,
    napomena: string,
}
