// This module will grab the value from the database that it is passed according to the id

const $ = require("jquery");

const getValue = (database, id) => {
  return $.ajax(`http://localhost:3000/${database}/${id}`);
};