// modelled off a successful response from https://api.websitecarbon.com/

export default interface CarbonDataType {
    // TODO: define the structure of the response from the API
    // note: start here! the following line allows anything to be a part of the object, which isn't useful for us
    "url": string,
    "green": boolean,
    "bytes": number,
    "cleanerThan": number,
    "statistics": {
        "adjustedBytes": number,
        "energy": number,
        "co2": {
            "grid": {
                "grams": number,
                "litres": number
            },
            "renewable": {
                "grams": number,
                "litres": number
            }
        }
    }
}
