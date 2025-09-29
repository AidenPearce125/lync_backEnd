require('dotenv').config();
const connectDB = require('../config/db');
const Interest = require('../models/Interest');
const Skill = require('../models/Skill');

const seed = async () => {
  try {
    await connectDB();
    await Interest.deleteMany();
    await Skill.deleteMany();

    const interests = ['Photography','Programming','Music','Sports','Travel'];
    const skills = ['JavaScript','Node.js','MongoDB','React','Design'];

    await Promise.all(interests.map(name => Interest.create({ name })));
    await Promise.all(skills.map(name => Skill.create({ name })));

    console.log('Seed completed');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
