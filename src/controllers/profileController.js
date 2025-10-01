const User = require('../models/User');
const { appEvents } = require('../events');

exports.completeProfile = async (req, res, next) => {
  try {
    const user = req.user;
    const body = req.body;
    user.fullName = body.fullName || user.fullName;
    user.dob = body.dob ? new Date(body.dob) : user.dob;
    user.about = body.about || user.about;
    user.university = body.university || user.university;
    user.major = body.major || user.major;
    user.graduationYear = body.graduationYear ? Number(body.graduationYear) : user.graduationYear;
    if (req.file) user.image = req.file.path;
    if (body.interests) {
      try { user.interests = JSON.parse(body.interests); }
       catch(e) { user.interests = body.interests.split(',').map(s=>s.trim()); }
    }
    if (body.skills) {
      try { user.skills = JSON.parse(body.skills); } 
      catch(e) { user.skills = body.skills.split(',').map(s=>s.trim()); }
    }
    await user.save();
    appEvents.emit('user:profile_completed', user);
    return res.json({ message: 'Profile completed', user });
  } catch (err) { next(err); }
};

exports.getMyProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).populate('interests', '-_id name').populate('skills', 'name');
    return res.json(user);
  } catch (err) { next(err); }
};
