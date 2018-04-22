import React from "react";
import ReactDOM from "react-dom";
import style from "../styles/main.scss"

const title = "Privet, ndrey";

ReactDOM.render(
	<div className="title">{title}</div>,
	document.getElementById('app')
)

module.hot.accept();