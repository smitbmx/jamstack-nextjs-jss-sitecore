import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

function Home(props) {
  //console.warn("data", props.sitecoreExperiences[0].sitecore.route.name)
  var exp = Math.floor(Math.random() * props.sitecoreExperiences.length)
  console.warn("Length Exp: ", exp);
  
  var experience0 = props.sitecoreExperiences[0].sitecore.route.fields;
  var experience1 = props.sitecoreExperiences[1].sitecore.route.fields;
  var experience2 = props.sitecoreExperiences[2].sitecore.route.fields;
  return <div>
  <header>
    <h1 className="header__name">
      Welcome to Proton Store Malaysia
    </h1>
    <h2 className="header__name"></h2>
  </header>
  <div id="main">
    <article>
    <img src="/protonlogo.jpg" className="logo" />
    <h2 className="car__name">{experience0.Title.value}</h2>
    <h4>{experience0.Text.value}</h4>
    







    {/* <img className="car__image" src={experience.Image.value} alt={experience.Title.value} /> */}

    <h3>Technical specs</h3>
       <hr/>
       <h4>Color: {experience0.Color?.value}</h4>
       <h4>Engine: {experience0.Engine?.value}</h4>
       <h4>Price: {experience0.Price?.value}</h4>
       <h4>Weigth: {experience0.Weight?.value}</h4>
       <h4>Length: {experience0.Length?.value}</h4>
       <h4>Fuel tank capacity: {experience0.FuelTank?.value}</h4>
       <hr/>
    </article>
    <article>
    <img src="/protonlogo.jpg" className="logo" />
    <h2 className="car__name">{experience1.Title.value}</h2>
    <h4>{experience1.Text.value}</h4>
    
    {/* <img className="car__image" src={experience.Image.value} alt={experience.Title.value} /> */}

    <h3>Technical specs</h3>
       <hr/>
       <h4>Color: {experience1.Color?.value}</h4>
       <h4>Engine: {experience1.Engine?.value}</h4>
       <h4>Price: {experience1.Price?.value}</h4>
       <h4>Weigth: {experience1.Weight?.value}</h4>
       <h4>Length: {experience1.Length?.value}</h4>
       <h4>Fuel tank capacity: {experience1.FuelTank?.value}</h4>
       <hr/>
    </article>
    <article>
    <img src="/protonlogo.jpg" className="logo" />
    <h2 className="car__name">{experience2.Title.value}</h2>
    <h4>{experience2.Text.value}</h4>
    
    {/* <img className="car__image" src={experience.Image.value} alt={experience.Title.value} /> */}

    <h3>Technical specs</h3>
       <hr/>
       <h4>Color: {experience2.Color?.value}</h4>
       <h4>Engine: {experience2.Engine?.value}</h4>
       <h4>Price: {experience2.Price?.value}</h4>
       <h4>Weigth: {experience2.Weight?.value}</h4>
       <h4>Length: {experience2.Length?.value}</h4>
       <h4>Fuel tank capacity: {experience2.FuelTank?.value}</h4>
       <hr/>
    </article>
    <nav></nav>
    <aside></aside>
  </div>
  <footer></footer>

  <style jsx>{`
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
    }
    #main {
      display: flex;
      min-height: calc(100vh - 40vh);
    }
    #main > article {
      flex: 1;
      text-align: justify;
    }
    #main > nav,
    #main > aside {
      flex: 0 0 20vw;
      background: #45B39D;
    }
    #main > nav {
      order: -1;
    }
    header,
    footer,
    article,
    nav,
    aside {
      padding: 1em;
    }
    header,
    footer {
      background: #45B39D;
      height: 20vh;
    }
    .main__img {
      max-width: 100%;
    }
    .header__name {
      color: ghostwhite;
      text-align: center;
    }

    .logo{
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 200px;
    }

    .car__image{
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 300px;
    }

    .car__name{
      text-align: center;
    }
  `}</style>
</div>
  
  
  
  // <div>
  //   <h1>Welcome to Proton Store</h1>
  //   <hr/><hr/>
  //     <h2>{experience.sitecore.route.fields.Title.value}</h2>
  //     <h4>{experience.sitecore.route.fields.Text.value}</h4>
  //     <hr/>
  //     <h3>Technical specs</h3>
  //     <hr/>
  //     <h4>Engine: {experience.sitecore.route.fields.Engine?.value}</h4>
  //     <h4>Price: {experience.sitecore.route.fields.Price.value}</h4>
  //     <h4>Weigth: {experience.sitecore.route.fields.Weight.value}</h4>
  //     <h4>Length: {experience.sitecore.route.fields.Length.value}</h4>
  //     <h4>Fuel tank capacity: {experience.sitecore.route.fields.FuelTank.value}</h4>
  //     <hr/>
  //     <h3>Price: {experience.sitecore.route.fields.Price.value}</h3>
  //     <hr/><h6>Product ID: {experience.sitecore.route.deviceId}</h6>
  //     {/* <img src={experience.sitecore.route.fields.Image.value} alt={experience.sitecore.route.fields.Title.value} /> */}
    
  // </div>
}

Home.getInitialProps = async function(){
  const instanceName = "https://sc10demo-xpsingle-single.azurewebsites.net";
  const apiKey = "{BAA50E14-229C-41A4-BE37-496D23FA2876}";
   var items = ['AutoExperiences/ProtonPerdana', 'AutoExperiences/ProtonSaga', 'AutoExperiences/ProtonX50'];

   var sitecoreExperiences = new Array();
   for (let i = 0; i < items.length; i++) {
    var requestUrl = instanceName + '/sitecore/api/layout/render/jss?item='+items[i]+'&sc_apikey='+ apiKey;
    const res = await fetch(requestUrl)
    const data = await res.json();
    sitecoreExperiences.push(data);
  }

  return{
    sitecoreExperiences
  }
}

export default Home

