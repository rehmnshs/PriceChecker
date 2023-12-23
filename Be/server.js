const puppeteer = require("puppeteer");
const express = require('express');
const cors = require('cors');
const app = express();


const PORT = 5000;
app.use(express.json());
app.use(cors()); 


  // Launch a headless browser.
  

  // Open a new page.


// Wait for a while to let the context menu appear and the URL to be copied


// Get the clipboard content (the copied image URL)
let browser = null;
  app.get("/getall", async (req, res) => {
    
     browser= await puppeteer.launch({headless:true});;
     
    const st = req.query.term;
    const start = performance.now();
    
    try{
      // browser = await puppeteer.launch();
      const [ am] = await Promise.all([
        amazonsearch(st),

      ]);
    
    // Assuming you want to send the results as JSON to the front end
      res.json({
       amazon: am,


      });
      await browser.close();
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
   

    const end = performance.now();
    const elapsedMilliseconds = end - start;
    console.log(`Time elapsed: ${elapsedMilliseconds} milliseconds`);
});


  const amazonsearch = async(str)=>{
   
    const pagee = await browser.newPage();
  //await pagee.goto(`https://www.amazon.in/s?k=${str}`); HAVE THIS ENABLED WHEN IS PRODUCTION READY
  await pagee.goto(`https://www.amazon.in`);
  await pagee.type("#twotabsearchtextbox",str);
  
    await pagee.keyboard.press("Enter");


  await pagee.waitForSelector("a.a-text-normal");
  

  const titles = await pagee.$$eval('a.a-text-normal > span.a-text-normal', (items) => items.slice(0,6).map(item => item.textContent));
  
const titlesss = await pagee.$$eval('.a-price-whole', (items) => items.slice(0,6).map(item => (item.textContent)));
const url = await pagee.$$eval('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal', (items) => items.slice(0,6).map(item => "https://www.amazon.in" + item.getAttribute('href')));
const imgs  = await pagee.$$eval('.a-section.aok-relative.s-image-fixed-height > img', (items) => items.slice(0,6).map(item => item.getAttribute('src')));



 const resultfinal = [];

 for (i=0;i<=titles.length;i++){
resultfinal.push(`${titlesss[i]}[]${titles[i]}?${url[i]} `)
 }

let arr = [];
 arr.push(resultfinal);
 arr.push(imgs);

 return arr;
/*const titless = new Set(titles); // Create a Set with unique titles

  // Convert the Set back to an array if needed
  const uniqueTitlesArray = Array.from(titless);
  for (i=0;i<=7;i++){
    console.log(uniqueTitlesArray[i]);
  }*/




  // Extract the price of the first product (you can adjust this to your specific needs).
  return await page.screenshot({ path: "screenshot1.png" });
  // Log the price to the console.

  
  }



  const flipkartsearch=async(str)=>{

 
    const page = await browser.newPage();

    await page.goto(`https://www.flipkart.com/search?q=${str}`);
    

    // Enter the product you want to search for in the search bar and submit the search.
    

   
    /*const searchInputSelector = '._3704LK';
    await page.click(searchInputSelector);

    await page.type(searchInputSelector,str);
  
    await page.keyboard.press("Enter");*/

    
   // await new Promise((resolve) => setTimeout(resolve, 1000));
    await page.waitForSelector('._30jeq3 ');
    
    
const titles = await page.$$eval('._30jeq3 ', (items) => items.slice(0,6).map(item => item.textContent));
let titless = await page.$$eval('._4rR01T', (items) => items.slice(0,6).map(item => item.textContent));
let url = await page.$$eval('._1fQZEK', (items) => items.slice(0,6).map(item => "https://www.flipkart.com" + item.getAttribute('href')));
if( titless.length < 1){
 titless = await page.$$eval('.s1Q9rs ', (items) => items.slice(0,6).map(item => item.textContent));
 url = await page.$$eval('.s1Q9rs', (items) => items.slice(0,6).map(item => "https://www.flipkart.com" + item.getAttribute('href')));}
const imgss  = await page.$$eval('._396cs4 ', (items) => items.slice(0,6).map(item => item.getAttribute('src')));
const finalarr=[];
for(i=0;i<=titles.length;i++){
  finalarr.push(`${titles[i]}[]${titless[i]}?${url[i]}`);
  
}
await page.screenshot({ path: "screenshot.png" });
let arrr = [];
 arrr.push(finalarr);
 arrr.push(imgss);

return arrr;


   /* const titles = await page.$$eval('.s-result-item .a-text-normal', (items) => items.map(item => item.textContent));
  
    const titless = new Set(titles); // Create a Set with unique titles
  
    // Convert the Set back to an array if needed
    const uniqueTitlesArray = Array.from(titless);
  
    console.log(uniqueTitlesArray[0]); */
  
  
  

    
  }
const cromasearch = async(str)=>{
  

  const pagew = await browser.newPage();
  await pagew.goto(`https://www.reliancedigital.in`);

await pagew.waitForSelector('[aria-label="Search Box"]');
await new Promise((resolve) => setTimeout(resolve, 1000));
await pagew.type('[aria-label="Search Box"]',str);
await pagew.keyboard.press("Enter");

await new Promise((resolve) => setTimeout(resolve, 1000));
await pagew.waitForSelector(".sp__name"); 
await pagew.waitForSelector(".gimCrs"); 


try{const titles = await pagew.$$eval('.sp__name', (items) => items.slice(0,5).map(item => item.textContent));

const titless = await pagew.$$eval('.gimCrs', (items) => items.slice(0,5).map(item => item.textContent));
const imgs  = await pagew.$$eval('div.sp__productbox > div:nth-child(2) > div > img', (items) => items.slice(0,5).map(item => "https://www.reliancedigital.in" +item.getAttribute('data-srcset')));
let url = await pagew.$$eval('.sp.grid > a', (items) => items.slice(0,5).map(item => "https://www.reliancedigital.in" + item.getAttribute('href')));
const finalarr=[];
for(i=0;i<=titles.length;i++){
  finalarr.push(`${titless[i]}[]${titles[i]}?${url[i]}`);
  
}
await pagew.screenshot({path: "screenshot3.png"});
let arr = [];
arr.push(finalarr);
arr.push(imgs);

return arr;
}catch(error){
  console.log(error);
} finally {
  // Code that will always be execuqqqqqqted, regardless of whether an exception occurred
 
}





}
const shopcluessearch=async(str)=>{
  await page.goto("https://www.shopclues.com/");
  await page.type('#autocomplete',str);
  await page.keyboard.press("Enter");
  await page.waitForSelector(".extraBadges");
  const titles = await page.$$eval('a>h2', (items) => items.slice(0,5).map(item => item.textContent));
  const titless = await page.$$eval('.p_price', (items) => items.slice(0,5).map(item => item.textContent));
  const finalarr=[];
  for(i=0;i<=titles.length;i++){
    finalarr.push(`${titless[i]}:${titles[i]}`);}
    await page.screenshot({path: "screenshot4.png"});
return finalarr;

 


}



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

