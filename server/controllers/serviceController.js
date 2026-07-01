const Service = require('../models/Service');

// get all services
const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({ services });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add a service - admin only
const addService = async (req, res) => {
  try {
    const { name, description, duration, price, qualificationRequired } = req.body;

    const service = await Service.create({
      name,
      description,
      duration,
      price,
      qualificationRequired
    });

    res.status(201).json({ message: 'Service added', service });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getServices, addService };