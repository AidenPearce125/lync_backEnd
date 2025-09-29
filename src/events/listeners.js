module.exports = (emitter) => {
  emitter.on('user:registered', (user) => {
    console.log('[event] user:registered ->', user.email);
  });

  emitter.on('user:profile_completed', (user) => {
    console.log('[event] user:profile_completed ->', user._id);
  });

  emitter.on('service:created', (service) => {
    console.log('[event] service:created ->', service._id);
  });
};
