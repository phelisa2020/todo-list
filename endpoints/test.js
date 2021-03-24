exports.handler = async (event) => {
    const { name } = event.queryStringParameters

    if(name !== 'phelisa') {
        return {
            statusCode: 301,
        body: JSON.stringify({ message: 'You are not allowed to get data' })

        }
    }
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello Phelisa!' })
    }
}