const apiResponse = (res, httpCode, msg, data) => {
	// Receive response method, http code, any message, and the data to be returned

	// Set status based on http code
	let status
	if (httpCode.toString().startsWith('2')) {
		status = 'success'
	} else if (httpCode.toString().startsWith('4')) {
		status = 'fail'
	} else {
		status = 'error'
	}

	

	// Return response
	return res.status(httpCode).json({
		status,
		msg,
		data,
	})
}

module.exports = apiResponse
