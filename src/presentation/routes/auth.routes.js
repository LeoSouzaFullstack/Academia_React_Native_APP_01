import express from 'express';
import authController from '../controllers/auth.controller.js';
import { validateRequest } from '../middlewares/validate.middleware.js';
import { loginSchema, registerSchema } from '../validators/auth.validator.js';

const router = express.Router();

// Public routes
router.post('/register', validateRequest(registerSchema), authController.register);
router.post('/login', validateRequest(loginSchema), authController.login);
router.post('/logout', authController.logout);
router.post('/refresh-token', authController.refreshToken);

// Protected routes
router.get('/me', authController.getCurrentUser);

export default router;