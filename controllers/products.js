const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  const { company, tittle, sort, select } = req.query;

  const queryObject = {};

  let apiData = Product.find(queryObject);
  if (company) {
    queryObject.company = company;
  }
  if (tittle) {
    queryObject.tittle = { $regex: tittle, $options: "i" };
  }
  if (sort) {
    let sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
  }
  if (select) {
    // let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }
  console.log("req", req.query);
  const myData = await apiData;
  res.status(200).json({ myData });
};

const getAllTestingProducts = async (req, res) => {
  const myData = await Product.find(req.query).select("tittle company");
  // console.log(req.query);
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllTestingProducts };
