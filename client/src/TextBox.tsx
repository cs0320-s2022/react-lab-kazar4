import React from 'react';
import logo from './logo.svg';
import './App.css';
import { isPropertySignature } from 'typescript';

function TextBox(props: { label: string; change: React.Dispatch<string>}) {
  return (
    <div className="Horoscope">
      <label htmlFor={props.label}>{props.label}</label>
      <input type="text" id={props.label} 
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => props.change(e.target.value)}></input>
    </div>
  );
}

export default TextBox;
