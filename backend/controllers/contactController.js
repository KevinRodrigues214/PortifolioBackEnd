// contactController.js
const Contact = require('../models/Contact'); 


const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id); 
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getContactById };
