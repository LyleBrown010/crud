const express = require('express'), 
    router = express.Router()

const service = require('../services/employee.service')

// http:localhost:3001/api/employees/
router.get('/', async (req, res) => {
    const employees = await service.getAllEmployees()
    res.send(employees)

})

module.exports = router; 