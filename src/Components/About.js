import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="text-center my-5">This is About Us</h2>
                <div className="row my-5">
                <div className="col-lg-7">
                <p>
                Me Shivam Kumar, I am Web Developer &amp; Web Designer I also Provide Free SEO. I create custom Website with full responsive at any device. I provide Static and Dynamic Website Services.
                </p>
                <p>
                After completing my school I joined It-expert course and I learned Web Designing and Web Development. I am good in HTML, CSS, Bootstrap-3, JavaScript, JQuery, Ajax, PHP and MySQLi. 
Currently I am learning Bootstrap-4 and NodeJs, And this blog is all about the tips and tricks in Web Designing and Web Development and I want to all read and explore the internet Free Resources.
                </p>
                </div>
                <div className="col-lg-5">
                    <img src="https://1.bp.blogspot.com/-ULuA2seafb8/YG2ILK6Z1vI/AAAAAAAAW3w/LehZ936cKiY8U7gGpSHoJflIWfzOxwr5QCPcBGAYYCw/s0/aboutimg.webp" className="img-fluid" alt="about Us"/>
                </div>
            </div>
        </div>
        )
    }
}
