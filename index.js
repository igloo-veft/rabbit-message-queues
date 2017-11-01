import express from 'express';
import mongoose, {Schema} from 'mongoose';
import { add } from './add';
import app from './server';

mongoose.Promise = global.Promise;
mongoose
   .connect('mongodb://Makus:Makus@ds125914.mlab.com:25914/veft-test', {
    useMongoClient: true,
  })
  .then(db => {
	  const server = app(db);
	  server.listen(3000, () => console.log('Server running on port 3000'));
  });