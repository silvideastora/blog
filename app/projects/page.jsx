import Image from "next/image"
import Link from "next/link"
import './projects.module.css'


function Projects() {
  return (
    <div class="d-flex gap-3">
      <div class="card w-50 mb-3 border-primary">
        <h4 class="card-header">InstaShop</h4>
        <div class="card-body">
          <h6 class="card-title">Build a Mercado Libre Ecommerce App</h6>
          <p class="card-text fs-6 fw-light">
            The application is developed using Next.js and Material-UI, 
            which provides fast routing and an appealing design.
            You can search and view product display, category and price filters,sorting of 
            Products, find the product Details, responsive Design, performance Optimization. These are just some of the key features of an application similar to Mercado Libre, with a focus on product filters.
          </p>
          <div class="d-flex justify-content-evenly pb-4">
            <span class="badge text-bg-primary d-inline-flex p-3 rounded-pill fw-light">Next.js</span>
            <span class="badge text-bg-primary d-inline-flex p-3 rounded-pill fw-light">MaterialUI</span>
            <span class="badge text-bg-primary d-inline-flex p-3 rounded-pill fw-light">CSS modules</span>
            <span class="badge text-bg-primary d-inline-flex p-3 rounded-pill fw-light">Mercado Libre API</span>
          </div>
          <a href="https://insta-shop.vercel.app/" class="btn btn-link">Go to InstaShop</a>
        </div>
    </div>
    <div class="card w-50 mb-3 border-primary">
        <h4 class="card-header">Home Deco</h4>
        <div class="card-body">
          <h6 class="card-title">Build a Mercado Libre Ecommerce App</h6>
          <p class="card-text fs-6 fw-light">
            The application is developed using Next.js and Material-UI, 
            which provides fast routing and an appealing design.
            You can search and view product display, category and price filters,sorting of 
            Products, find the product Details, responsive Design, performance Optimization. These are just some of the key features of an application similar to Mercado Libre, with a focus on product filters.
          </p>
          <div class="d-flex justify-content-evenly pb-4">
            <span class="badge text-bg-primary d-inline-flex p-3 rounded-pill fw-light">Next.js</span>
            <span class="badge text-bg-primary d-inline-flex p-3 rounded-pill fw-light">MaterialUI</span>
            <span class="badge text-bg-primary d-inline-flex p-3 rounded-pill fw-light">CSS modules</span>
            <span class="badge text-bg-primary d-inline-flex p-3 rounded-pill fw-light">Mercado Libre API</span>
          </div>
          <a href="https://vermillion-concha-eb4fb8.netlify.app/" class="btn btn-link">Go to Home Deco</a>
        </div>
    </div>   

    </div>
  )
}

export default Projects