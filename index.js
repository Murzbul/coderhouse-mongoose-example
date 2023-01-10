import mongoose from "mongoose";
import * as model from './models/user.js';

CRUD();

async function CRUD()
{
  try
  {
      const URL = 'mongodb://coderhouse:coderhouse@localhost:27017/coderhouse';
      let res = await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    console.log('Base de datos conectada');

    console.log('CREATE');
    const user = {
      name: 'Pedro',
      surname: 'Martinez',
      email: 'pedro@g.com',
      user: 'nr',
      password: '123456',
    }

    const userSaveModel = new model.users(user);
    let userSave = await userSaveModel.save();
    console.log('userSave');
    console.log(userSave);

    console.log('READ ALL');
    let users = await model.users.find({});
    console.log(users);

    console.log('UPDATE');
    let userUpdate = await model.users.updateOne({
      name: 'Pedro',
      $set: {
        password: 6123133,
        user: '6123133',
      }
    })
    console.log(userUpdate);

    console.log('READ AND FILTER');
    let userOne = await model.users.find({ name: 'Pedro' });
    console.log(userOne);

    console.log('DELETE');
    let userDelete = await model.users.deleteOne({
      name: 'Pedro'
    });
    console.log(userDelete);

    console.log("CREATES")
    await new model.users({name: 'Juan', surname: 'Perez', email: 'jp@g.com', password: '111111'}).save();
    await new model.users({name: 'Pedro', surname: 'Suarez', email: 'ps@g.com', password: '222222'}).save();
    await new model.users({name: 'Ana', surname: 'Mei', email: 'am@g.com', password: '333333'}).save();
    await new model.users({name: 'Mirta', surname: 'Blanco', email: 'mb@g.com', password: '44444'}).save();

    console.log('READ PROJECTION + FILTER');
    console.log(await model.users.find({ surname: 'Perez' }, {name: 1, surname: 1, email: 1, _id: 0}));
    console.log(await model.users.find({ name: 'Pedro' }, {name: 1, surname: 1, email: 1, _id: 0}));

    console.log('READ PROJECTION + SORT');
    console.log(await model.users.find({}, { name: 1, _id: 0 }).sort({ name: -1 }));

    console.log('READ PROJECTION + SORT + SKIP');
    console.log(await model.users.find({}, { name: 1, _id: 0 }).sort({ name: -1 }).skip(1).limit(2));

  }
  catch (e)
  {
    console.log('Error connection DB');
    console.log(e);
  }
}


