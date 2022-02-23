module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e11abde74ae5f6439eff6289262befb0'),
  },
});
