import pic from "./assets/cs1.jpg";
import "./style.css";

const title = document.createElement("h3");
title.textContent = "good morning";
const page = document.querySelector("body");
page.append(title);

const img = new Image();
img.src = pic;
page.appendChild(img);
