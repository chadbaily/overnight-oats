// const express = require('express');
import express from "express";
const app = express();
const PORT = 8000;
app.get('/', (req,res) => res.send('Express + TypeScript Server. This is a test from chad'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});