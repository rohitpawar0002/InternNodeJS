const countryStateCityModel =require('../model/countryStateCity.model')

const getCountry = async function (req, res, next) {
    try {
        const countryResult = await countryStateCityModel.getCountry()
        console.log(countryResult);
        res.status(200).send({ countryList: countryResult })
    }
    catch (err) {
        console.log(err);
        next(err)
    }
}
module.exports = {getCountry};
