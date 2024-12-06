import React, { useState } from "react";
import Header from "../../components/header/Header";
import "./Home.css";

const Home = () => {
    const [isBoxOpen, setIsBoxOpen] = useState(false); // State to manage box

    const toggleBox = () => {
        setIsBoxOpen(!isBoxOpen); // Toggle the box open/close
    };
    return (
        <div>
            <div className="main-blue-div">
                <p className="main-para">
                    Check my new project 💧 MistCSS write React components with 50% less
                    code
                </p>
            </div>
            <div className="main-div">
                <div className="erapper-div">
                    <Header />
                    <div className="header-content">
                        <h1 className="content-heading">Faizan Placeholder</h1>
                        <p className="content-para">
                            Free fake and reliable API for testing and prototyping.
                        </p>
                        <p className="content-para">Powered by JSON Server + LowDB.</p>
                        <p className="content-month">
                            Serving ~3 billion requests each month.
                        </p>
                    </div>
                    <div className="sponcer-div">
                        <h1 className="sponcer-heading">Sponsors</h1>
                        <p className="sponcer-para">
                            JSONPlaceholder is supported by the following companies and
                            Sponsors on GitHub, check them out 💖
                        </p>
                    </div>
                    <div className="mokend-div">
                        <div className="img-div-1">
                            <img src="/images/mockend.svg" alt="" />
                        </div>
                        <div className="img-div-1">
                            <img src="/images/img2.png" alt="" />
                        </div>
                    </div>
                    <div className="main-try-it-div">
                        <h1>Try it</h1>
                        <p className="main-para-code-sec">Run this code here, in a console or from any site:</p>
                        <div className="code-div">
                            <p className="fetch-para">
                                {`fetch('https://jsonplaceholder.typicode.com/todos/1')
                                       .then(response => response.json())
                                       .then(json => console.log(json))`}
                            </p>
                        </div>
                        {/* Button to open/close box */}
                        <button onClick={toggleBox} className="ButtonModal">
                            {isBoxOpen ? "Close Box" : "Open Box"}
                        </button>

                        {/* Conditional rendering of the box */}
                        {isBoxOpen && (
                            <div>
                                <div className="code-div">
                                    <p className="fetch-para">
                                        {`{
                                            "userId": 1,
                                            "id": 1,
                                            "title": "delectus aut autem",
                                            "completed": false
                                        }`}
                                    </p>
                                </div>
                                <p className="main-para-code-sec">Congrats! You've made your first call to JSONPlaceholder. 😃 🎉</p>
                            </div>
                        )}
                    </div>
                    <div className="sec-use-div">
                        <h1 className="sec-use-head">When to use</h1>
                        <p className="sec-use-para">JSONPlaceholder is a free online REST API that you can use <b>whenever you need some fake data</b>It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.</p>
                    </div>
                    <div className="sec-resorces-main-div">
                        <h1>Resources</h1>
                        <p>JSONPlaceholder comes with a set of 6 common resources:</p>
                        <div className="res-ul-div">
                            <div className="res-ul-div-1">
                                 <ul>
                                    <li><a href="https://my-first-api-ruddy.vercel.app/products/posts" target="_blank" rel="noopener noreferrer">/posts</a></li>
                                    <li><a href="https://my-first-api-ruddy.vercel.app/products/comments" target="_blank" rel="noopener noreferrer">/comments</a></li>
                                    <li><a href="https://my-first-api-ruddy.vercel.app/products/albums" target="_blank" rel="noopener noreferrer">/albums</a></li>
                                    <li><a href="https://my-first-api-ruddy.vercel.app/products/photos" target="_blank" rel="noopener noreferrer">/photos</a></li>
                                    <li><a href="https://my-first-api-ruddy.vercel.app/products/todos" target="_blank" rel="noopener noreferrer">/todos</a></li>
                                    <li><a href="https://my-first-api-ruddy.vercel.app/products/users" target="_blank" rel="noopener noreferrer">/users</a></li>
                                 </ul>
                            </div>
                            <div className="res-ul-div-1">
                                  <ul>
                                    <li>100 posts</li>
                                    <li>500 comments</li>
                                    <li>100 albums</li>
                                    <li>5000 photos</li>
                                    <li>200 todos</li>
                                    <li>10 users</li>
                                  </ul>
                            </div>
                        </div>
                        <p className="res-note"><b>Note: </b>resources have relations. For example: posts have many comments, albums have many photos, ... see guide for the full list.</p>
                    </div>
                    <div className="sec-resorces-main-div">
                        <h1>Routes</h1>
                        <p>All HTTP methods are supported. You can use http or https for your requests.</p>
                        <div className="res-ul-div">
                            <div className="res-ul-div-1">
                                 <ul>
                                    <li>GET</li>
                                    <li>GET</li>
                                    <li>GET</li>
                                    <li>GET</li>
                                    <li>POST</li>
                                    <li>PUT</li>
                                    <li>PATCH</li>
                                    <li>DELETE</li>
                                  </ul>
                            </div>
                            <div className="res-ul-div-1">
                                 <ul>
                                    <li><a href="https://my-first-api-ruddy.vercel.app/products/posts" target="_blank" rel="noopener noreferrer">/posts</a></li>
                                    <li><a href="https://my-first-api-ruddy.vercel.app/products/comments" target="_blank" rel="noopener noreferrer">/comments</a></li>
                                    <li><a href="https://my-first-api-ruddy.vercel.app/products/albums" target="_blank" rel="noopener noreferrer">/albums</a></li>
                                    <li><a href="https://my-first-api-ruddy.vercel.app/products/photos" target="_blank" rel="noopener noreferrer">/photos</a></li>
                                    <li><a href="https://my-first-api-ruddy.vercel.app/products/todos" target="_blank" rel="noopener noreferrer">/todos</a></li>
                                    <li><a href="https://my-first-api-ruddy.vercel.app/products/users" target="_blank" rel="noopener noreferrer">/users</a></li>
                                    <li><a href="https://my-first-api-ruddy.vercel.app/products/users" target="_blank" rel="noopener noreferrer">/users</a></li>
                                    <li><a href="https://my-first-api-ruddy.vercel.app/products/users" target="_blank" rel="noopener noreferrer">/users</a></li>
                                 </ul>
                            </div>
                        </div>
                        <p className="res-note"><b>Note: </b>resources have relations. For example: posts have many comments, albums have many photos, ... see guide for the full list.</p>
                    </div>
                    <div className="sec-use-own">
                        <h1>Use your own data</h1>
                        <p className="sec-use-own-para1">With our sponsor Mockend and a simple GitHub repo, you can have your own fake online REST server in seconds.</p>
                        <a href="">You can sponsor this project (and others) on GitHub</a>
                        <p className="sec-use-own-para2">Coded and maintained with ❤️ by typicode © 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
