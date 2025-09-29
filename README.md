NodeJS Backend - Auth + Profile + Interests/Skills + Services (Event-driven)

How to run:
1. copy .env.example to .env and set MONGO_URI and JWT_SECRET
2. npm install
3. npm run seed   # seeds interests and skills
4. npm run dev    # starts server (nodemon) or npm start

Endpoints:
POST /api/auth/signup { email, password }
POST /api/auth/verify-otp { email, otp }   # static OTP from .env (1111)
POST /api/auth/login { email, password }

POST /api/profile/complete (multipart) fields: fullName,dob,about,university,major,graduationYear,interests (JSON array or CSV),skills (JSON array or CSV), image file (field 'image')
GET  /api/profile/me  (protected)

GET /api/interests
GET /api/skills

POST /api/services (protected) { title, ratePerHour, available, address, description, daysAvailable (JSON array), startTime, endTime }
GET  /api/services/mine (protected)
