
// const express = require('express');
const axios = require('axios');
// const app = express();
const cors = require('cors')

const express = require('express');

// Create an Express application
const app = express();
app.use(cors( {
    origin:'*',
    
  }))

// Define a port for your server to run on
const PORT = process.env.PORT || 3000;


let Product=[];
app.get('/api/data', async (req, res) => {
  try {
    if (Product.length > 0) {
      res.json(Product);
    } else {
      const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
      Product = response.data;
      res.json(Product);
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



    app.get('/api/data/:Month', async (req, res) => {
      try {
        const { Month } = req.params;
        const filteredData = filterProductsByMonth(Product, parseInt(Month));
        res.json(filteredData);
      } catch (error) {
        console.error('Error filtering data by month:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
    


    function filterProductsByMonth(products, targetMonth) {
      return products.filter(product => {
        const dateOfSale = new Date(product.dateOfSale);
        const saleMonth = dateOfSale.getMonth();
        return saleMonth === targetMonth;
      });
    }


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

